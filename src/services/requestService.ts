import * as fs from "fs";
import * as path from "path";
import { Request, RequestStatus, RequestType } from "../../generated/prisma";
import { prisma } from "../config/database";

export interface LocationDataDto {
  latitude: number;
  longitude: number;
  accuracy: number | null;
  address?: string;
  timestamp: number;
}

export interface CreateRequestDto {
  type: RequestType;
  reason?: string;
  expectedBack?: Date;
  studentId: string;
  parentId?: string;
  // Verification data
  verificationPhoto?: string | null; // Base64 encoded image
  location?: LocationDataDto;
}

export interface CreateArrivalConfirmationDto {
  studentId: string;
  parentId: string;
}

export interface UpdateRequestStatusDto {
  status: RequestStatus;
  approvedBy?: string;
  message?: string;
}

export interface ParentUpdateRequestStatusDto {
  status: RequestStatus;
  location?: LocationDataDto; // Parent's location when approving
}

export interface ScaleUpRequestDto {
  requestId: string;
  scaledUpBy: string;
}

export interface ConfirmArrivalDto {
  requestId: string;
  confirmedBy: string;
  role: "WARDEN" | "CHIEF_WARDEN";
}

// Constants for scale up functionality
export const SCALE_UP_THRESHOLD_HOUR = 20; // 8 PM in 24-hour format

// Optimized includes for request responses
const optimizedRequestInclude = {
  student: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      studentProfile: {
        select: {
          studentId: true,
          roomNumber: true,
          floorNumber: true,
          building: true,
          emergencyContact: true,
          medicalInfo: true,
        },
      },
    },
  },
  parent: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      parentProfile: {
        select: {
          relationship: true,
          emergencyContact: true,
        },
      },
    },
  },
};

export class RequestService {
  // Check if a request needs to be scaled up (return time after 8 PM or before 6 AM)
  static needsScaleUp(expectedBack: Date): boolean {
    const hour = expectedBack.getHours();
    // Late if after 8 PM (20) or before 6 AM (6)
    return hour >= 20 || hour < 6;
  }

  // Scale up a request to chief warden
  static async scaleUpRequest(data: ScaleUpRequestDto): Promise<Request> {
    const existingRequest = await prisma.request.findUnique({
      where: { id: data.requestId },
      include: optimizedRequestInclude,
    });

    if (!existingRequest) {
      throw new Error("Request not found");
    }

    console.log(`🔍 Scaling up request ${data.requestId}:`, {
      expectedBack: existingRequest.expectedBack,
      status: existingRequest.status,
      isScaledUp: existingRequest.isScaledUp,
    });

    if (!existingRequest.expectedBack) {
      throw new Error(
        "Request must have an expected return time to be scaled up"
      );
    }

    if (existingRequest.isScaledUp) {
      throw new Error("Request has already been scaled up");
    }

    // Check if request is already processed (approved or rejected)
    if (existingRequest.status !== RequestStatus.PENDING) {
      throw new Error(
        "Cannot scale up a request that has already been processed"
      );
    }

    // Check if request is too old (more than 24 hours old)
    const requestAge = Date.now() - existingRequest.requestedAt.getTime();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    if (requestAge > maxAge) {
      throw new Error("Cannot scale up requests older than 24 hours");
    }

    // Check if the return time is actually after 8 PM
    const needsScaling = this.needsScaleUp(existingRequest.expectedBack);
    console.log(`⏰ Time check for request ${data.requestId}:`, {
      expectedBack: existingRequest.expectedBack,
      returnHour: existingRequest.expectedBack.getHours(),
      threshold: SCALE_UP_THRESHOLD_HOUR,
      needsScaling,
    });

    if (!needsScaling) {
      throw new Error(
        "Request return time is not after 8 PM and cannot be scaled up"
      );
    }

    const updatedRequest = await prisma.request.update({
      where: { id: data.requestId },
      data: {
        isScaledUp: true,
        scaledUpAt: new Date(),
        scaledUpBy: data.scaledUpBy,
        status: RequestStatus.PENDING, 
        chiefWardenStatus: RequestStatus.PENDING// Reset to pending for chief warden approval
      },
      include: optimizedRequestInclude,
    });

    console.log(
      `✅ Request ${data.requestId} scaled up by warden ${data.scaledUpBy} for chief warden approval`
    );

    return updatedRequest;
  }

  // Chief warden approves/rejects any request (has override authority)
  static async updateScaledUpRequestStatus(
    requestId: string,
    data: UpdateRequestStatusDto
  ): Promise<Request> {
    const existingRequest = await prisma.request.findUnique({
      where: { id: requestId },
      include: {
        ...optimizedRequestInclude,
        student: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            studentProfile: true,
          },
        },
      },
    });

    if (!existingRequest) {
      throw new Error("Request not found");
    }

    // Chief warden can approve any request, not just scaled up ones
    // Removed the isScaledUp check to allow override authority

    if (
      existingRequest.chiefWardenStatus &&
      existingRequest.chiefWardenStatus !== RequestStatus.PENDING
    ) {
      throw new Error(
        "Chief warden has already made a decision on this request"
      );
    }

    // Determine if we should update the main status (warden's status)
    // Case 1: Request was scaled up by warden -> always update
    // Case 2: Warden rejected but Chief Warden approves -> update to override rejection
    // Case 3: Request not touched by warden (PENDING) and Chief Warden approves -> update
    const wardenRejected = existingRequest.status === RequestStatus.REJECTED;
    const chiefWardenApproves = data.status === RequestStatus.APPROVED;
    const shouldUpdateMainStatus =
      existingRequest.isScaledUp || // Scaled up request
      (wardenRejected && chiefWardenApproves) || // Override rejection
      (existingRequest.status === RequestStatus.PENDING && chiefWardenApproves); // Direct approval

    const updatedRequest = await prisma.request.update({
      where: { id: requestId },
      data: {
        chiefWardenStatus: data.status,
        chiefWardenApprovedAt: new Date(),
        chiefWardenApprovedBy: data.approvedBy,
        chiefWardenMessage: data.message, // Add chief warden's message
        // Update main status based on conditions above
        ...(shouldUpdateMainStatus && {
          status: data.status,
          approvedAt: new Date(),
          approvedBy: data.approvedBy,
        }),
      },
      include: optimizedRequestInclude,
    });

    // If GO_HOME request is APPROVED by Chief Warden, set student's isAtHostel to false
    if (
      existingRequest.type === "GO_HOME" &&
      chiefWardenApproves &&
      shouldUpdateMainStatus &&
      existingRequest.student.studentProfile
    ) {
      await prisma.studentProfile.update({
        where: { id: existingRequest.student.studentProfile.id },
        data: { isAtHostel: false },
      });

      console.log(
        `✅ Student ${existingRequest.studentId} marked as away from hostel (GO_HOME approved by Chief Warden)`
      );
    }

    console.log(
      `✅ Scaled up request ${requestId} ${data.status.toLowerCase()} by chief warden ${
        data.approvedBy
      }${data.message ? ` with message: "${data.message}"` : ""}`
    );

    return updatedRequest;
  }

  // Get requests that need chief warden approval (scaled up requests)
  static async getScaledUpRequests(): Promise<Request[]> {
    return await prisma.request.findMany({
      where: {
        isScaledUp: true,
        chiefWardenStatus: RequestStatus.PENDING,
      },
      include: optimizedRequestInclude,
      orderBy: { scaledUpAt: "desc" },
    });
  }

  // Get all scaled up requests (for chief warden dashboard)
  static async getAllScaledUpRequests(): Promise<Request[]> {
    return await prisma.request.findMany({
      where: {
        isScaledUp: true,
      },
      include: optimizedRequestInclude,
      orderBy: { scaledUpAt: "desc" },
    });
  }

  static async createRequest(data: CreateRequestDto): Promise<Request> {
    // Validate that the student exists and has the STUDENT role
    const student = await prisma.user.findUnique({
      where: { id: data.studentId },
      include: {
        studentProfile: {
          include: {
            motherProfile: {
              include: {
                user: true,
              },
            },
            fatherProfile: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!student || student.role !== "STUDENT") {
      throw new Error("Invalid student ID");
    }

    // Debug logging for parent linking
    console.log(`🔍 Student Profile Debug:`, {
      studentId: data.studentId,
      hasStudentProfile: !!student.studentProfile,
      motherProfileId: student.studentProfile?.motherProfileId,
      fatherProfileId: student.studentProfile?.fatherProfileId,
      motherUser: student.studentProfile?.motherProfile?.user?.id,
      fatherUser: student.studentProfile?.fatherProfile?.user?.id,
    });

    // Automatically find the parent if not provided
    let parentId = data.parentId;
    if (!parentId) {
      // Try to find mother first, then father
      const motherProfile = student.studentProfile?.motherProfile;
      const fatherProfile = student.studentProfile?.fatherProfile;

      if (motherProfile?.user) {
        parentId = motherProfile.user.id;
        console.log(`📧 Auto-linking request to mother: ${parentId}`);
      } else if (fatherProfile?.user) {
        parentId = fatherProfile.user.id;
        console.log(`📧 Auto-linking request to father: ${parentId}`);
      }
    }

    // If parentId is provided or found, validate that it exists and has PARENT role
    if (parentId) {
      const parent = await prisma.user.findUnique({
        where: { id: parentId },
        include: { parentProfile: true },
      });

      if (!parent || parent.role !== "PARENT") {
        console.warn(`⚠️ Invalid parent ID: ${parentId}`);
        parentId = undefined; // Clear invalid parentId
      }
    }

    // Handle verification photo - save to disk and get URL
    let verificationPhotoUrl: string | undefined;
    if (data.verificationPhoto) {
      try {
        const uploadDir = path.join(process.cwd(), "uploads", "verification-photos");
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        
        const fileName = `${data.studentId}_${Date.now()}.jpg`;
        const filePath = path.join(uploadDir, fileName);
        
        // Remove base64 prefix if present
        const base64Data = data.verificationPhoto.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, "base64");
        fs.writeFileSync(filePath, buffer);
        
        verificationPhotoUrl = `/uploads/verification-photos/${fileName}`;
        console.log(`📸 Verification photo saved: ${verificationPhotoUrl}`);
      } catch (error) {
        console.error("❌ Failed to save verification photo:", error);
        // Continue without photo - don't fail the request
      }
    }

    const request = await prisma.request.create({
      data: {
        type: data.type,
        reason: data.reason,
        expectedBack: data.expectedBack,
        studentId: data.studentId,
        parentId: parentId, // This will now be automatically set if parent exists
        status: RequestStatus.PENDING,
        // Verification data
        verificationPhotoUrl: verificationPhotoUrl,
        locationLatitude: data.location?.latitude,
        locationLongitude: data.location?.longitude,
        locationAccuracy: data.location?.accuracy,
        locationAddress: data.location?.address,
        locationTimestamp: data.location?.timestamp ? new Date(data.location.timestamp) : undefined,
      },
      include: optimizedRequestInclude,
    });

    console.log(
      `✅ Request created: ${request.id}, Student: ${data.studentId}, Parent: ${
        parentId || "No parent linked"
      }, Photo: ${verificationPhotoUrl ? "Yes" : "No"}, Location: ${data.location ? "Yes" : "No"}`
    );
    return request;
  }

  static async getRequestsByStudent(
    studentId: string,
    includeHistory: boolean = false
  ): Promise<Request[]> {
    const whereClause: any = { studentId };

    if (!includeHistory) {
      // Only get today's requests for active tab
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      whereClause.requestedAt = {
        gte: today,
        lt: tomorrow,
      };
    }

    return await prisma.request.findMany({
      where: whereClause,
      include: optimizedRequestInclude,
      orderBy: { requestedAt: "desc" },
    });
  }

  static async getRequestsByParent(parentId: string): Promise<Request[]> {
    // First, get the parent's profile to find their children
    const parentProfile = await prisma.parentProfile.findUnique({
      where: { userId: parentId },
      include: {
        childrenAsMother: {
          select: { userId: true },
        },
        childrenAsFather: {
          select: { userId: true },
        },
      },
    });

    if (!parentProfile) {
      console.warn(`⚠️ Parent profile not found for user: ${parentId}`);
      return [];
    }

    // Get all student IDs (children) linked to this parent
    const childrenIds = [
      ...parentProfile.childrenAsMother.map((c) => c.userId),
      ...parentProfile.childrenAsFather.map((c) => c.userId),
    ];

    console.log(`👨‍👩‍👧‍👦 Parent ${parentId} has children:`, childrenIds);

    if (childrenIds.length === 0) {
      console.warn(`⚠️ No children found for parent: ${parentId}`);
      return [];
    }

    // Get requests either:
    // 1. Where parentId matches (explicitly linked)
    // 2. Where studentId is one of the parent's children
    return await prisma.request.findMany({
      where: {
        OR: [
          { parentId },
          { studentId: { in: childrenIds } },
        ],
      },
      include: optimizedRequestInclude,
      orderBy: { requestedAt: "desc" },
    });
  }

  static async updateRequestStatus(
    requestId: string,
    data: UpdateRequestStatusDto
  ): Promise<Request> {
    const existingRequest = await prisma.request.findUnique({
      where: { id: requestId },
      include: {
        student: {
          include: {
            studentProfile: true,
          },
        },
      },
    });

    if (!existingRequest) {
      throw new Error("Request not found");
    }

    if (existingRequest.status !== RequestStatus.PENDING) {
      throw new Error("Request has already been processed");
    }

    // Update the request
    const updatedRequest = await prisma.request.update({
      where: { id: requestId },
      data: {
        status: data.status,
        approvedBy: data.approvedBy,
        approvedAt: data.status !== RequestStatus.PENDING ? new Date() : null,
      },
      include: optimizedRequestInclude,
    });

    // If GO_HOME request is APPROVED, set student's isAtHostel to false
    if (
      existingRequest.type === "GO_HOME" &&
      data.status === RequestStatus.APPROVED &&
      existingRequest.student.studentProfile
    ) {
      await prisma.studentProfile.update({
        where: { id: existingRequest.student.studentProfile.id },
        data: { isAtHostel: false },
      });

      console.log(
        `✅ Student ${existingRequest.studentId} marked as away from hostel (GO_HOME approved)`
      );
    }

    return updatedRequest;
  }

  static async getRequestById(requestId: string): Promise<Request | null> {
    return await prisma.request.findUnique({
      where: { id: requestId },
      include: optimizedRequestInclude,
    });
  }

  static async getAllRequests(): Promise<Request[]> {
    return await prisma.request.findMany({
      include: optimizedRequestInclude,
      orderBy: { requestedAt: "desc" },
    });
  }

  static async updateRequestStatusByParent(
    requestId: string,
    parentId: string,
    data: ParentUpdateRequestStatusDto
  ): Promise<Request> {
    // First, verify the request exists and belongs to this parent's child
    const existingRequest = await prisma.request.findUnique({
      where: { id: requestId },
      include: {
        student: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            studentProfile: {
              select: {
                motherProfileId: true,
                fatherProfileId: true,
              },
            },
          },
        },
      },
    });

    if (!existingRequest) {
      throw new Error("Request not found");
    }

    // Get parent's profile to check relationship
    const parentProfile = await prisma.parentProfile.findUnique({
      where: { userId: parentId },
    });

    if (!parentProfile) {
      throw new Error("Parent profile not found");
    }

    // Check if this parent is linked to the student (either as mother or father)
    const studentProfile = existingRequest.student.studentProfile;
    const isParentOfStudent =
      studentProfile?.motherProfileId === parentProfile.id ||
      studentProfile?.fatherProfileId === parentProfile.id ||
      existingRequest.parentId === parentId;

    if (!isParentOfStudent) {
      throw new Error("You can only approve/reject your own child's requests");
    }

    if (existingRequest.parentStatus !== RequestStatus.PENDING) {
      throw new Error("Request has already been processed by parent");
    }

    // Only allow APPROVED or REJECTED status for parent actions
    if (
      data.status !== RequestStatus.APPROVED &&
      data.status !== RequestStatus.REJECTED
    ) {
      throw new Error("Parents can only approve or reject requests");
    }

    // Prepare update data
    const updateData: any = {
      parentStatus: data.status,
      parentApprovedAt: new Date(),
      parentId: parentId, // Ensure parentId is set
    };

    // If approving and location is provided, save parent's location
    if (data.status === RequestStatus.APPROVED && data.location) {
      updateData.parentLocationLatitude = data.location.latitude;
      updateData.parentLocationLongitude = data.location.longitude;
      updateData.parentLocationAccuracy = data.location.accuracy;
      updateData.parentLocationAddress = data.location.address;
      updateData.parentLocationTimestamp = new Date(data.location.timestamp);
      console.log(`📍 Parent location captured: ${data.location.address || `${data.location.latitude}, ${data.location.longitude}`}`);
    }

    const updatedRequest = await prisma.request.update({
      where: { id: requestId },
      data: updateData,
      include: optimizedRequestInclude,
    });

    console.log(
      `✅ Request ${requestId} ${data.status.toLowerCase()} by parent ${parentId} for student ${
        existingRequest.student.firstName
      } ${existingRequest.student.lastName}`
    );

    return updatedRequest;
  }

  // Confirm Arrival - Warden or Chief Warden confirms student has arrived
  static async confirmArrival(data: ConfirmArrivalDto): Promise<Request> {
    const existingRequest = await prisma.request.findUnique({
      where: { id: data.requestId },
      include: {
        ...optimizedRequestInclude,
        student: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            studentProfile: {
              select: {
                id: true,
                studentId: true,
                isAtHostel: true,
              },
            },
          },
        },
      },
    });
    console.log("hello :-----",existingRequest);

    if (!existingRequest) {
      throw new Error("Request not found");
    }

    if (existingRequest.type !== "ARRIVAL_CONFIRMATION") {
      throw new Error("This is not an arrival confirmation request");
    }

    // Check if already confirmed by this role
    if (data.role === "WARDEN" && existingRequest.confirmedByWarden) {
      throw new Error("Arrival already confirmed by warden");
    }

    if (data.role === "CHIEF_WARDEN" && existingRequest.confirmedByChiefWarden) {
      throw new Error("Arrival already confirmed by chief warden");
    }

    // Prepare update data based on role
    const updateData: any = {};

    if (data.role === "WARDEN") {
      updateData.confirmedByWarden = true;
      updateData.confirmedByWardenAt = new Date();
      updateData.confirmedByWardenId = data.confirmedBy;
    } else if (data.role === "CHIEF_WARDEN") {
      updateData.confirmedByChiefWarden = true;
      updateData.confirmedByChiefWardenAt = new Date();
      updateData.confirmedByChiefWardenId = data.confirmedBy;
    }

    // If confirmed by either role, mark request as approved and update student status
    updateData.status = RequestStatus.APPROVED;
    updateData.approvedAt = new Date();
    updateData.approvedBy = data.confirmedBy;

    // Update request
    const updatedRequest = await prisma.request.update({
      where: { id: data.requestId },
      data: updateData,
      include: optimizedRequestInclude,
    });

    // Update student isAtHostel to true
    if (existingRequest.student.studentProfile) {
      await prisma.studentProfile.update({
        where: { id: existingRequest.student.studentProfile.id },
        data: {
          isAtHostel: true,
        },
      });

      console.log(
        `✅ Student ${existingRequest.student.firstName} ${existingRequest.student.lastName} marked as at hostel`
      );
    }

    console.log(
      `✅ Arrival confirmed by ${data.role} ${data.confirmedBy} for request ${data.requestId}`
    );

    return updatedRequest;
  }

  // Get arrival confirmation requests (for Warden/Chief Warden)
  static async getArrivalConfirmationRequests(): Promise<Request[]> {
    return await prisma.request.findMany({
      where: {
        type: "ARRIVAL_CONFIRMATION",
        status: RequestStatus.PENDING,
      },
      include: optimizedRequestInclude,
      orderBy: { requestedAt: "desc" },
    });
  }

  // Create Arrival Confirmation Request (for Parents)
  static async createArrivalConfirmationRequest(
    data: CreateArrivalConfirmationDto
  ): Promise<Request> {
    // Validate that the student exists and has the STUDENT role
    const student = await prisma.user.findUnique({
      where: { id: data.studentId },
      include: {
        studentProfile: {
          include: {
            motherProfile: {
              include: {
                user: true,
              },
            },
            fatherProfile: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!student || student.role !== "STUDENT") {
      throw new Error("Invalid student ID");
    }

    // Validate that the parent exists and has PARENT role
    const parent = await prisma.user.findUnique({
      where: { id: data.parentId },
      include: { parentProfile: true },
    });

    if (!parent || parent.role !== "PARENT") {
      throw new Error("Invalid parent ID");
    }

    // Verify that this parent is linked to this student
    const isMotherOrFather =
      student.studentProfile?.motherProfile?.user.id === data.parentId ||
      student.studentProfile?.fatherProfile?.user.id === data.parentId;

    if (!isMotherOrFather) {
      throw new Error("You can only create arrival confirmation for your own child");
    }

    // Check if student already has a pending arrival confirmation request
    const existingRequest = await prisma.request.findFirst({
      where: {
        studentId: data.studentId,
        type: "ARRIVAL_CONFIRMATION",
        status: RequestStatus.PENDING,
      },
    });

    if (existingRequest) {
      throw new Error("Student already has a pending arrival confirmation request");
    }

    // Create the arrival confirmation request
    // Auto-approve by parent since they created it
    const request = await prisma.request.create({
      data: {
        type: "ARRIVAL_CONFIRMATION",
        studentId: data.studentId,
        parentId: data.parentId,
        status: RequestStatus.PENDING,
        parentStatus: RequestStatus.APPROVED, // Auto-approved by parent
        parentApprovedAt: new Date(), // Set approval timestamp
        reason: "Parent initiated arrival confirmation",
      },
      include: optimizedRequestInclude,
    });

    console.log(
      `✅ Arrival confirmation request created by parent ${data.parentId} for student ${data.studentId} (auto-approved by parent)`
    );

    return request;
  }
}

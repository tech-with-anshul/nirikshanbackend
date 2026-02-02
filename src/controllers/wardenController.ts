import { Request, Response } from "express";
import { DashboardService } from "../services/dashboardService";
import { RequestService } from "../services/requestService";
import { AuthService } from "../services/authService";
import { RequestStatus, RequestType } from "../../generated/prisma";
import { prisma } from "../config/database";
import { deleteOldProfilePicture } from "../config/multer";

const authService = new AuthService();

export class WardenController {
  // Warden Dashboard
  static async getDashboard(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const [stats, pendingRequests, recentActivities, students] =
        await Promise.all([
          DashboardService.getWardenStats(userId),
          DashboardService.getWardenPendingRequests(userId),
          DashboardService.getWardenRecentActivities(userId),
          DashboardService.getWardenStudents(userId),
        ]);

      res.json({
        success: true,
        data: {
          stats,
          pendingRequests: pendingRequests.slice(0, 5), // Limit for dashboard
          recentActivities,
          students: students.slice(0, 10), // Limit for dashboard
        },
      });
    } catch (error) {
      console.error("Error loading warden dashboard:", error);
      res.status(500).json({
        success: false,
        message: "Failed to load dashboard data",
      });
    }
  }

  // Get Warden Profile
  static async getProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const user = await authService.getUserById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      res.json({
        success: true,
        message: "Profile retrieved successfully",
        data: user,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || "Failed to retrieve profile",
      });
    }
  }

  // Update Warden Profile
  static async updateProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { firstName, lastName, phone, wardNumber, responsibilities, shiftHours } = req.body;

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        // Construct the public URL for the uploaded file
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;

        // Get current profile to delete old picture
        const currentProfile = await prisma.wardenProfile.findUnique({
          where: { userId },
        });

        if (currentProfile?.profilePicture) {
          deleteOldProfilePicture(currentProfile.profilePicture);
        }
      }

      // Update user basic info
      const updatedUser = await authService.updateUser(userId, {
        firstName,
        lastName,
        phone,
      });

      // Update warden profile
      await prisma.wardenProfile.update({
        where: { userId },
        data: {
          ...(wardNumber && { wardNumber }),
          ...(responsibilities && { responsibilities }),
          ...(shiftHours && { shiftHours }),
          ...(profilePictureUrl && { profilePicture: profilePictureUrl }),
        },
      });

      // Fetch complete user data with profile
      const completeUser = await authService.getUserById(userId);

      res.json({
        success: true,
        message: "Profile updated successfully",
        data: completeUser,
      });
    } catch (error: any) {
      console.error("Error updating warden profile:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update profile",
      });
    }
  }

  // Get All Requests with tab filtering
  static async getRequests(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const status = req.query.status as string;
      const tab = (req.query.tab as "active" | "past" | "all") || "all";

      let requests;
      if (status && status !== "ALL") {
        // If status filter is specified, use the new method and then filter by status
        requests = await DashboardService.getWardenRequests(userId, tab);
        requests = requests.filter((r) => r.status === status);
      } else {
        // Use the new tab-based method
        requests = await DashboardService.getWardenRequests(userId, tab);
      }

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch requests",
      });
    }
  }

  // Approve/Reject Request (Warden Authority)
  static async updateRequestStatus(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const wardenId = (req as any).user.id;
      const { status } = req.body;

      // Validate status
      if (!["APPROVED", "REJECTED"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Status must be either APPROVED or REJECTED",
        });
      }

      const updatedRequest = await RequestService.updateRequestStatus(
        requestId,
        {
          status: status as RequestStatus,
          approvedBy: wardenId,
        }
      );

      res.json({
        success: true,
        message: `Request ${status.toLowerCase()} successfully`,
        data: updatedRequest,
      });
    } catch (error: any) {
      console.error("Error updating request status:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update request status",
      });
    }
  }

  // Scale up request to chief warden (for requests after 8 PM)
  static async scaleUpRequest(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const wardenId = (req as any).user.id;

      const updatedRequest = await RequestService.scaleUpRequest({
        requestId,
        scaledUpBy: wardenId,
      });

      res.json({
        success: true,
        message: "Request scaled up to chief warden for approval",
        data: updatedRequest,
      });
    } catch (error: any) {
      console.error("Error scaling up request:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to scale up request",
      });
    }
  }

  // Get Request Details
  static async getRequestById(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const wardenId = (req as any).user.id;

      // Get warden's assigned building
      const wardenProfile = await authService.getWardenProfile(wardenId);
      const assignedBuilding = wardenProfile?.assignedBuilding;

      if (!assignedBuilding) {
        return res.status(400).json({
          success: false,
          message: "Warden has no assigned building",
        });
      }

      const request = await RequestService.getRequestById(requestId);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Check if the request belongs to a student from warden's building
      if (
        (request as any).student?.studentProfile?.building !== assignedBuilding
      ) {
        return res.status(403).json({
          success: false,
          message: "You can only access requests from your assigned building",
        });
      }

      res.json({
        success: true,
        data: request,
      });
    } catch (error) {
      console.error("Error fetching request:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch request details",
      });
    }
  }

  // Get All Students
  static async getStudents(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const students = await DashboardService.getWardenStudents(userId);

      res.json({
        success: true,
        data: students,
      });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch students data",
      });
    }
  }

  // Get Student Details
  static async getStudentById(req: Request, res: Response) {
    try {
      const { studentId } = req.params;
      const userId = (req as any).user.id;
      const userRole = (req as any).user.role;

      const student = await authService.getUserById(studentId);

      if (!student || student.role !== "STUDENT") {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      // If user is a Warden, check building access
      if (userRole === "WARDEN") {
        // Get warden's assigned building
        const wardenProfile = await authService.getWardenProfile(userId);
        const assignedBuilding = wardenProfile?.assignedBuilding;

        if (!assignedBuilding) {
          return res.status(400).json({
            success: false,
            message: "Warden has no assigned building",
          });
        }

        // Check if student belongs to warden's building
        if (student.studentProfile?.building !== assignedBuilding) {
          return res.status(403).json({
            success: false,
            message: "You can only access students from your assigned building",
          });
        }
      }
      // Chief Wardens can access any student, no building check needed

      res.json({
        success: true,
        data: student,
      });
    } catch (error) {
      console.error("Error fetching student details:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch student details",
      });
    }
  }

  // Get Student Requests
  static async getStudentRequests(req: Request, res: Response) {
    try {
      const { studentId } = req.params;
      const wardenId = (req as any).user.id;

      // Get warden's assigned building
      const wardenProfile = await authService.getWardenProfile(wardenId);
      const assignedBuilding = wardenProfile?.assignedBuilding;

      if (!assignedBuilding) {
        return res.status(400).json({
          success: false,
          message: "Warden has no assigned building",
        });
      }

      // First check if the student belongs to warden's building
      const student = await authService.getUserById(studentId);
      if (!student || student.role !== "STUDENT") {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      if (student.studentProfile?.building !== assignedBuilding) {
        return res.status(403).json({
          success: false,
          message: "You can only access students from your assigned building",
        });
      }

      const requests = await RequestService.getRequestsByStudent(
        studentId,
        true
      );

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching student requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch student requests",
      });
    }
  }

  // Create Student (Warden Authority)
  static async createStudent(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;

      // Get warden's assigned building first
      const wardenProfile = await authService.getWardenProfile(wardenId);
      if (!wardenProfile?.assignedBuilding) {
        return res.status(400).json({
          success: false,
          message: "Warden has no assigned building. Cannot create students.",
        });
      }

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        // Construct the public URL for the uploaded file
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;
      }

      const {
        email,
        firstName,
        lastName,
        phone,
        username,
        studentId,
        roomNumber,
        floorNumber,
        building, // Now accept building from request
        emergencyContact,
        medicalInfo,
        // Mother fields
        motherEmail,
        motherFirstName,
        motherLastName,
        motherPhone,
        motherAddress,
        motherEmergencyContact,
        // Father fields
        fatherEmail,
        fatherFirstName,
        fatherLastName,
        fatherPhone,
        fatherAddress,
        fatherEmergencyContact,
      } = req.body;

      // Validate required fields
      if (!email || !firstName || !lastName || !username || !studentId || !roomNumber || !floorNumber || !building) {
        return res.status(400).json({
          success: false,
          message: "Email, first name, last name, username, student ID, room number, floor number, and building are required",
        });
      }

      const studentData: any = {
        email,
        firstName,
        lastName,
        role: "STUDENT" as const,
        phone,
        username,
        studentId,
        roomNumber,
        floorNumber,
        building, // Use provided building instead of auto-assigning
        emergencyContact,
        medicalInfo,
        ...(profilePictureUrl && { profilePicture: profilePictureUrl }), // Add profile picture if uploaded
      };

      // Add mother data if provided
      if (motherEmail && motherFirstName && motherLastName) {
        studentData.motherEmail = motherEmail;
        studentData.motherFirstName = motherFirstName;
        studentData.motherLastName = motherLastName;
        studentData.motherPhone = motherPhone;
        studentData.motherAddress = motherAddress;
        studentData.motherEmergencyContact = motherEmergencyContact;
      }

      // Add father data if provided
      if (fatherEmail && fatherFirstName && fatherLastName) {
        studentData.fatherEmail = fatherEmail;
        studentData.fatherFirstName = fatherFirstName;
        studentData.fatherLastName = fatherLastName;
        studentData.fatherPhone = fatherPhone;
        studentData.fatherAddress = fatherAddress;
        studentData.fatherEmergencyContact = fatherEmergencyContact;
      }

      const result = await authService.createUserByWarden(
        studentData,
        wardenId
      );

      res.status(201).json({
        success: true,
        message: result.message,
        data: result.user,
      });
    } catch (error: any) {
      console.error("Error creating student:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to create student",
      });
    }
  }

  // Update Student (Warden Authority) - Complete update with parent info
  static async updateStudent(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;
      const { studentId } = req.params;

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        // Construct the public URL for the uploaded file
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;

        // Get current profile to delete old picture
        const currentStudent = await prisma.user.findUnique({
          where: { id: studentId },
          include: { studentProfile: true },
        });

        if (currentStudent?.studentProfile?.profilePicture) {
          deleteOldProfilePicture(currentStudent.studentProfile.profilePicture);
        }
      }

      const {
        email,
        firstName,
        lastName,
        phone,
        username,
        studentIdNumber,
        roomNumber,
        floorNumber,
        building,
        emergencyContact,
        medicalInfo,
        isAtHostel,
        mother, // Nested mother object (from JSON)
        father, // Nested father object (from JSON)
        // FormData mother fields
        motherEmail,
        motherFirstName,
        motherLastName,
        motherPhone,
        motherAddress,
        motherEmergencyContact,
        // FormData father fields
        fatherEmail,
        fatherFirstName,
        fatherLastName,
        fatherPhone,
        fatherAddress,
        fatherEmergencyContact,
      } = req.body;

      // Validate required fields
      if (!email || !firstName || !lastName) {
        return res.status(400).json({
          success: false,
          message: "Email, first name, and last name are required",
        });
      }

      // Build mother object from FormData fields if they exist
      let motherData = mother;
      if (motherEmail && motherFirstName && motherLastName) {
        motherData = {
          email: motherEmail,
          firstName: motherFirstName,
          lastName: motherLastName,
          phone: motherPhone,
          address: motherAddress,
          emergencyContact: motherEmergencyContact,
        };
      }

      // Build father object from FormData fields if they exist
      let fatherData = father;
      if (fatherEmail && fatherFirstName && fatherLastName) {
        fatherData = {
          email: fatherEmail,
          firstName: fatherFirstName,
          lastName: fatherLastName,
          phone: fatherPhone,
          address: fatherAddress,
          emergencyContact: fatherEmergencyContact,
        };
      }

      const result = await authService.updateStudentByWarden(
        studentId,
        {
          email,
          firstName,
          lastName,
          phone,
          username,
          studentIdNumber,
          roomNumber,
          floorNumber,
          building,
          emergencyContact,
          medicalInfo,
          isAtHostel: isAtHostel === "true" || isAtHostel === true,
          mother: motherData,
          father: fatherData,
          ...(profilePictureUrl && { profilePicture: profilePictureUrl }),
        },
        wardenId
      );

      res.json({
        success: true,
        message: result.message,
        data: result.user,
      });
    } catch (error: any) {
      console.error("Error updating student:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update student",
      });
    }
  }

  // Delete Student (Warden Authority)
  static async deleteStudent(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;
      const { studentId } = req.params;

      await authService.deleteStudentByWarden(studentId, wardenId);

      res.json({
        success: true,
        message: "Student deleted successfully",
      });
    } catch (error: any) {
      console.error("Error deleting student:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to delete student",
      });
    }
  }

  // Change Student Password (Warden/Chief Warden Authority)
  static async changeStudentPassword(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;
      const { studentId } = req.params;
      const { newPassword } = req.body;

      if (!newPassword) {
        return res.status(400).json({
          success: false,
          message: "New password is required",
        });
      }

      const result = await authService.changeStudentPasswordByWarden(
        studentId,
        newPassword,
        wardenId
      );

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      console.error("Error changing student password:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to change student password",
      });
    }
  }

  // Change Parent Password (Warden/Chief Warden Authority)
  static async changeParentPassword(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;
      const { parentId } = req.params;
      const { newPassword } = req.body;

      if (!newPassword) {
        return res.status(400).json({
          success: false,
          message: "New password is required",
        });
      }

      const result = await authService.changeParentPasswordByWarden(
        parentId,
        newPassword,
        wardenId
      );

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      console.error("Error changing parent password:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to change parent password",
      });
    }
  }

  // Create Parent (Warden Authority)
  static async createParent(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;
      const {
        email,
        firstName,
        lastName,
        phone,
        parentAddress,
        parentRelationship,
        parentEmergencyContact,
        studentId, // Optional: if provided, automatically link to this student
      } = req.body;

      // Validate required fields
      if (!email || !firstName || !lastName) {
        return res.status(400).json({
          success: false,
          message: "Email, first name, and last name are required",
        });
      }

      const parentData = {
        email,
        firstName,
        lastName,
        role: "PARENT" as const,
        phone,
        parentAddress,
        parentRelationship,
        parentEmergencyContact,
      };

      const result = await authService.createUserByWarden(parentData, wardenId);

      // If studentId is provided, automatically link the parent to the student
      if (studentId && result.user) {
        try {
          // Get the student by ID to get their email
          const student = await authService.getUserById(studentId) as any;

          if (student && student.role === "STUDENT") {
            await AuthService.linkStudentToParent(student.email, email);
          } else {
            console.warn(
              `Student with ID ${studentId} not found or not a student`
            );
          }
        } catch (linkError) {
          console.error("Error linking parent to student:", linkError);
          // Don't fail the parent creation if linking fails
        }
      }

      res.status(201).json({
        success: true,
        message: result.message,
        data: result.user,
      });
    } catch (error: any) {
      console.error("Error creating parent:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to create parent",
      });
    }
  }

  // Link Existing Student to Existing Parent (Warden Authority)
  static async linkStudentToParent(req: Request, res: Response) {
    try {
      const { studentEmail, parentEmail } = req.body;

      if (!studentEmail || !parentEmail) {
        return res.status(400).json({
          success: false,
          message: "Student email and parent email are required",
        });
      }

      const result = await AuthService.linkStudentToParent(
        studentEmail,
        parentEmail
      );

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      console.error("Error linking student to parent:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to link student to parent",
      });
    }
  }

  // Get All Parents (Warden Authority)
  static async getParents(req: Request, res: Response) {
    try {
      const wardenId = (req as any).user.id;

      // Get warden's assigned building
      const wardenProfile = await authService.getWardenProfile(wardenId);
      const assignedBuilding = wardenProfile?.assignedBuilding;

      // Get parents filtered by building (only parents of students in warden's building)
      const parents = await DashboardService.getAllParents(
        assignedBuilding ?? undefined
      );

      res.json({
        success: true,
        data: parents,
      });
    } catch (error) {
      console.error("Error fetching parents:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch parents data",
      });
    }
  }

  // Get Parent by ID (Warden Authority)
  static async getParentById(req: Request, res: Response) {
    try {
      const { parentId } = req.params;

      // Try to get parent by user ID first
      let parent: any = await authService.getUserById(parentId);

      // If not found by user ID, try to find by parent profile ID
      if (!parent) {
        parent = await authService.getUserByParentProfileId(parentId);
      }

      if (!parent || parent.role !== "PARENT") {
        return res.status(404).json({
          success: false,
          message: "Parent not found",
        });
      }

      res.json({
        success: true,
        data: parent,
      });
    } catch (error) {
      console.error("Error fetching parent details:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch parent details",
      });
    }
  }

  // Confirm Arrival - Warden confirms student has arrived at hostel
  static async confirmArrival(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const wardenId = (req as any).user.id;

      const updatedRequest = await RequestService.confirmArrival({
        requestId,
        confirmedBy: wardenId,
        role: "WARDEN",
      });

      res.json({
        success: true,
        message: "Student arrival confirmed successfully",
        data: updatedRequest,
      });
    } catch (error: any) {
      console.error("Error confirming arrival:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to confirm arrival",
      });
    }
  }

  // Get Arrival Confirmation Requests
  static async getArrivalConfirmationRequests(req: Request, res: Response) {
    try {
      const requests = await RequestService.getArrivalConfirmationRequests();

      res.json({
        success: true,
        data: requests,
      });
    } catch (error: any) {
      console.error("Error getting arrival confirmation requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get arrival confirmation requests",
      });
    }
  }
}

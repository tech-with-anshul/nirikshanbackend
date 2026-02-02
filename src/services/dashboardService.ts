import { prisma } from "../config/database";
import { UserRole, RequestStatus, RequestType } from "../../generated/prisma";
import { withRetry } from "../utils/dbRetry";
import { Prisma} from "@prisma/client";


export interface DashboardStats {
  totalStudents?: number;
  pendingRequests?: number;
  approvedRequests?: number;
  rejectedRequests?: number;
  availableRooms?: number;
  occupiedRooms?: number;
  totalRequests?: number;
  myChildren?: number;
  totalWardens?: number;
  criticalAlerts?: number;
}

export interface StudentRoomInfo {
  roomNumber?: string;
  floorNumber?: string;
  building?: string;
  checkInDate?: string;
  emergencyContact?: string;
}

export interface RecentActivity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  user?: {
    firstName: string;
    lastName: string;
  };
}

export class DashboardService {
  static async getDashboardStats(
    userId: string,
    role: string
  ): Promise<DashboardStats> {
    const userRole = role.toUpperCase() as UserRole;

    switch (userRole) {
      case "STUDENT":
        return this.getStudentStats(userId);
      case "PARENT":
        return this.getParentStats(userId);
      case "WARDEN":
        return this.getWardenStats(userId);
      case "CHIEF_WARDEN":
        return this.getChiefWardenStats(userId);
      default:
        throw new Error("Invalid role");
    }
  }

  static async getStudentStats(userId: string): Promise<DashboardStats> {
    return withRetry(async () => {
      // Only count today's requests
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      // Get student's request counts using new two-stage approval system
      const [
        finallyApprovedCount,
        parentPendingCount,
        parentApprovedWardenPendingCount,
        rejectedCount,
      ] = await Promise.all([
        // Finally approved: parent approved AND warden approved
        prisma.request.count({
          where: {
            studentId: userId,
            parentStatus: "APPROVED",
            status: "APPROVED",
            requestedAt: { gte: today, lt: tomorrow },
          },
        }),
        // Parent approval pending
        prisma.request.count({
          where: {
            studentId: userId,
            parentStatus: "PENDING",
            requestedAt: { gte: today, lt: tomorrow },
          },
        }),
        // Parent approved but warden pending
        prisma.request.count({
          where: {
            studentId: userId,
            parentStatus: "APPROVED",
            status: "PENDING",
            requestedAt: { gte: today, lt: tomorrow },
          },
        }),
        // Rejected by either parent or warden
        prisma.request.count({
          where: {
            studentId: userId,
            OR: [{ parentStatus: "REJECTED" }, { status: "REJECTED" }],
            requestedAt: { gte: today, lt: tomorrow },
          },
        }),
      ]);

      const totalPendingCount =
        parentPendingCount + parentApprovedWardenPendingCount;

      return {
        approvedRequests: finallyApprovedCount,
        pendingRequests: totalPendingCount,
        rejectedRequests: rejectedCount,
        totalRequests: finallyApprovedCount + totalPendingCount + rejectedCount,
      };
    });
  }

  static async getStudentRecentRequests(userId: string) {
    return withRetry(async () => {
      return await prisma.request.findMany({
        where: { studentId: userId },
        include: {
          student: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              studentProfile: true,
            },
          },
          parent: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
              parentProfile: true,
            },
          },
        },
        orderBy: { requestedAt: "desc" },
        take: 5,
      });
    });
  }

  static async getStudentRoomInfo(
    userId: string
  ): Promise<StudentRoomInfo | null> {
    return withRetry(async () => {
      const student = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          studentProfile: {
            include: {
              room: true,
            },
          },
        },
      });

      if (!student?.studentProfile) {
        return null;
      }

      const profile = student.studentProfile;
      return {
        roomNumber: profile.roomNumber ?? profile.room?.roomNumber ?? undefined,
        floorNumber:
          profile.floorNumber ?? profile.room?.floorNumber ?? undefined,
        building: profile.building ?? profile.room?.building ?? undefined,
        checkInDate: profile.checkInDate?.toISOString() ?? undefined,
        emergencyContact: profile.emergencyContact ?? undefined,
      };
    });
  }

  static async getParentStats(userId: string): Promise<DashboardStats> {
    // Only count today's requests
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Get parent's children count
    const parent = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        parentProfile: {
          include: {
            childrenAsMother: true,
            childrenAsFather: true,
          },
        },
      },
    });

    if (!parent?.parentProfile) {
      return {};
    }

    // Combine children from both relations
    const allChildren = [
      ...(parent.parentProfile.childrenAsMother || []),
      ...(parent.parentProfile.childrenAsFather || []),
    ];

    // Get request counts for parent's children using parent status
    const [pendingCount, approvedCount, rejectedCount] = await Promise.all([
      prisma.request.count({
        where: { parentId: userId, parentStatus: "PENDING", requestedAt: { gte: today, lt: tomorrow } },
      }),
      prisma.request.count({
        where: { parentId: userId, parentStatus: "APPROVED", requestedAt: { gte: today, lt: tomorrow } },
      }),
      prisma.request.count({
        where: { parentId: userId, parentStatus: "REJECTED", requestedAt: { gte: today, lt: tomorrow } },
      }),
    ]);

    return {
      myChildren: allChildren.length,
      pendingRequests: pendingCount,
      approvedRequests: approvedCount,
      rejectedRequests: rejectedCount,
      totalRequests: pendingCount + approvedCount + rejectedCount,
    };
  }

  static async getParentChildren(userId: string) {
    const parent = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        parentProfile: {
          include: {
            childrenAsMother: {
              include: {
                user: {
                  select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                  },
                },
                room: true,
              },
            },
            childrenAsFather: {
              include: {
                user: {
                  select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                  },
                },
                room: true,
              },
            },
          },
        },
      },
    });

    // Combine children from both mother and father relations
    const allChildren = [
      ...(parent?.parentProfile?.childrenAsMother || []),
      ...(parent?.parentProfile?.childrenAsFather || []),
    ];

    return allChildren.map((child) => ({
      ...child.user,
      studentProfile: child,
    }));
  }

  static async getParentRecentRequests(userId: string) {
    return await prisma.request.findMany({
      where: { parentId: userId },
      include: {
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
      orderBy: { requestedAt: "desc" },
      take: 10,
    });
  }

  static async getWardenStats(userId: string): Promise<DashboardStats> {
    // Only count today's requests
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    // Get warden's assigned building
    const wardenProfile = await prisma.wardenProfile.findUnique({
      where: { userId },
      select: { assignedBuilding: true },
    });

    const assignedBuilding = wardenProfile?.assignedBuilding;

    // If warden has no assigned building, return empty stats
    if (!assignedBuilding) {
      return {
        totalStudents: 0,
        pendingRequests: 0,
        availableRooms: 0,
        occupiedRooms: 0,
      };
    }

    // Get statistics only for warden's assigned building
    const [totalStudents, pendingRequests, availableRooms, occupiedRooms] =
      await Promise.all([
        prisma.user.count({
          where: {
            role: "STUDENT",
            studentProfile: {
              building: assignedBuilding,
            },
          },
        }),
        prisma.request.count({
          where: {
            parentStatus: "APPROVED", // Parent approved
            status: "PENDING", // Warden still pending
            student: {
              studentProfile: {
                building: assignedBuilding,
              },
            },
            requestedAt: { gte: today, lt: tomorrow },
          },
        }),
        prisma.room.count({
          where: {
            building: assignedBuilding,
            isOccupied: false,
          },
        }),
        prisma.room.count({
          where: {
            building: assignedBuilding,
            isOccupied: true,
          },
        }),
      ]);

    return {
      totalStudents,
      pendingRequests,
      availableRooms,
      occupiedRooms,
    };
  }

  static async getWardenPendingRequests(userId: string) {
    // Get warden's assigned building
    const wardenProfile = await prisma.wardenProfile.findUnique({
      where: { userId },
      select: { assignedBuilding: true },
    });

    const assignedBuilding = wardenProfile?.assignedBuilding;

    // If warden has no assigned building, return empty array
    if (!assignedBuilding) {
      return [];
    }

    // Only today's requests
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    return await prisma.request.findMany({
      where: {
        parentStatus: RequestStatus.APPROVED, // Only show parent-approved requests
        status: RequestStatus.PENDING, // Still pending warden decision
        student: {
          studentProfile: {
            building: assignedBuilding, // Only from warden's building
          },
        },
        requestedAt: { gte: today, lt: tomorrow },
      },
      include: {
        student: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            studentProfile: true,
          },
        },
        parent: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            parentProfile: true,
          },
        },
      },
      orderBy: { parentApprovedAt: "desc" }, // Order by when parent approved
      take: 20,
    });
  }

  // New method for warden requests with tab-based filtering
  static async getWardenRequests(
    userId: string,
    tab: "active" | "past" | "all" = "all"
  ) {
    // Get warden's assigned building
    const wardenProfile = await prisma.wardenProfile.findUnique({
      where: { userId },
      select: { assignedBuilding: true },
    });

    const assignedBuilding = wardenProfile?.assignedBuilding;

    // If warden has no assigned building, return empty array
    if (!assignedBuilding) {
      return [];
    }

    const baseWhere = {
      OR: [
        // Regular requests that are parent-approved
        {
          parentStatus: RequestStatus.APPROVED,
          student: {
            studentProfile: {
              building: assignedBuilding,
            },
          },
        },
        // Arrival confirmation requests (created by parents, don't need parent approval)
        {
          type: RequestType.ARRIVAL_CONFIRMATION,
          student: {
            studentProfile: {
              building: assignedBuilding,
            },
          },
        },
      ],
    };

    let dateFilter = {};
    if (tab === "active") {
      // Today's requests only
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      dateFilter = {
        parentApprovedAt: {
          gte: today,
          lt: tomorrow,
        },
      };
    } else if (tab === "past") {
      // All requests before today
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      dateFilter = {
        parentApprovedAt: {
          lt: today,
        },
      };
    }

    return await prisma.request.findMany({
      where: {
        ...baseWhere,
        ...dateFilter,
      },
      include: {
        student: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            studentProfile: true,
          },
        },
        parent: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            parentProfile: true,
          },
        },
      },
      orderBy: { parentApprovedAt: "desc" },
    });
  }

  static async getWardenRecentActivities(
    userId: string
  ): Promise<RecentActivity[]> {
    // Get warden's assigned building
    const wardenProfile = await prisma.wardenProfile.findUnique({
      where: { userId },
      select: { assignedBuilding: true },
    });

    const assignedBuilding = wardenProfile?.assignedBuilding;

    // If warden has no assigned building, return empty array
    if (!assignedBuilding) {
      return [];
    }

    // Get recent requests as activities - filtered by warden's building
    const recentRequests = await prisma.request.findMany({
      where: {
        requestedAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
        },
        student: {
          studentProfile: {
            building: assignedBuilding, // Only from warden's building
          },
        },
      },
      include: {
        student: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
      orderBy: { requestedAt: "desc" },
      take: 10,
    });

    return recentRequests.map((request) => ({
      id: request.id,
      type: request.type.toLowerCase(),
      description: `${request.student.firstName} ${
        request.student.lastName
      } submitted a ${request.type.toLowerCase()} request`,
      timestamp: request.requestedAt.toISOString(),
      user: request.student,
    }));
  }

  static async getWardenStudents(userId: string) {
    // Get warden's assigned building
    const wardenProfile = await prisma.wardenProfile.findUnique({
      where: { userId },
      select: { assignedBuilding: true },
    });

    const assignedBuilding = wardenProfile?.assignedBuilding;

    // If warden has no assigned building, return empty array
    if (!assignedBuilding) {
      return [];
    }

    return await prisma.user.findMany({
      where: {
        role: "STUDENT",
        studentProfile: {
          building: assignedBuilding, // Only students in warden's building
        },
      },
      include: {
        studentProfile: {
          include: {
            room: true,
          },
        },
      },
      orderBy: { firstName: "asc" },
      take: 50,
    });
  }

  static async getChiefWardenStats(userId: string): Promise<DashboardStats> {
      console.log("Fetching Chief Warden Stats");

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      // Run queries sequentially to avoid DB exhaustion
      let totalStudents = 0;
      let totalWardens = 0;
      let pendingRequests = 0;
      let totalRooms = 0;
      let occupiedRooms = 0;

      try {
        totalStudents = await prisma.user.count({
          where: { role: "STUDENT" },
        });

        totalWardens = await prisma.user.count({
          where: { role: "WARDEN" },
        });

        pendingRequests = await prisma.request.count({
          where: {
            status: "PENDING",
            requestedAt: { gte: today, lt: tomorrow },
          },
        });

        totalRooms = await prisma.room.count();

        occupiedRooms = await prisma.room.count({
          where: { isOccupied: true },
        });

      } catch (error) {
        console.error("Error loading chief warden stats:", error);
        throw error;
      }

      console.log("Chief Warden Stats fetched successfully");

      return {
        totalStudents,
        totalWardens,
        pendingRequests,
        availableRooms: totalRooms - occupiedRooms,
        occupiedRooms,
        criticalAlerts: pendingRequests > 10 ? 1 : 0,
      };
    }


  static async getChiefWardenSystemOverview(userId: string) {
  let totalUsers = 0;
  let totalRequests = 0;
  let recentActivity: any[] = [];

  try {
    totalUsers = await prisma.user.count();
    totalRequests = await prisma.request.count();

    recentActivity = await prisma.request.findMany({
      orderBy: { requestedAt: "desc" },
      take: 5,
      include: {
        student: {
          select: { firstName: true, lastName: true },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching chief warden system overview:", error);
    throw error;
  }

  const formattedActivity = recentActivity.map((req) => ({
    id: req.id,
    type: req.type,
    status: req.status,
    student: `${req.student.firstName} ${req.student.lastName}`,
    timestamp: req.requestedAt.toISOString(),
  }));

  return {
    totalUsers,
    totalRequests,
    recentActivity: formattedActivity,
  };
}

  static async getChiefWardenWardens(userId: string) {
    return await prisma.user.findMany({
      where: { role: "WARDEN" },
      include: {
        wardenProfile: true,
      },
      orderBy: { firstName: "asc" },
    });
  }

  static async getChiefWardenStudents(userId: string) {
    return await prisma.user.findMany({
      where: { role: "STUDENT" },
      include: {
        studentProfile: {
          include: {
            room: true,
          },
        },
      },
      orderBy: { firstName: "asc" },
    });
  }

  static async getChiefWardenCriticalAlerts(userId: string) {
  const alerts: any[] = [];

  let pendingRequests = 0;
  try {
    pendingRequests = await prisma.request.count({ where: { status: "PENDING" } });
    if (pendingRequests > 10) {
      alerts.push({
        id: "pending-requests",
        type: "warning",
        title: "High Pending Requests",
        description: `${pendingRequests} requests are pending approval`,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.error("Error fetching pending requests:", err);
  }

  let studentsWithoutRooms = 0;
  try {
    studentsWithoutRooms = await prisma.user.count({
      where: { role: "STUDENT", studentProfile: { roomNumber: null } },
    });
    if (studentsWithoutRooms > 0) {
      alerts.push({
        id: "students-no-room",
        type: "error",
        title: "Students Without Rooms",
        description: `${studentsWithoutRooms} students need room assignments`,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (err) {
    console.error("Error fetching students without rooms:", err);
  }

  return alerts;
}


  // Get all parents for warden overview - filtered by building
  static async getAllParents(building?: string) {
    const whereClause: any = { role: "PARENT" };

    // If building is specified, only get parents of students in that building
    if (building) {
      whereClause.parentProfile = {
        OR: [
          {
            childrenAsMother: {
              some: {
                building: building,
              },
            },
          },
          {
            childrenAsFather: {
              some: {
                building: building,
              },
            },
          },
        ],
      };
    }

    return await prisma.user.findMany({
      where: whereClause,
      include: {
        parentProfile: {
          include: {
            childrenAsMother: {
              include: {
                user: {
                  select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                  },
                },
              },
            },
            childrenAsFather: {
              include: {
                user: {
                  select: {
                    firstName: true,
                    lastName: true,
                    email: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { firstName: "asc" },
    });
  }
}

import { Request, Response } from "express";
import { DashboardService } from "../services/dashboardService";
import { RequestService } from "../services/requestService";
import { AuthService } from "../services/authService";
import { MessageService } from "../services/messageService";
import { RequestStatus } from "../../generated/prisma";
import { prisma } from "../config/database";
import { deleteOldProfilePicture } from "../config/multer";

const authService = new AuthService();

export class ChiefWardenController {
  // Chief Warden Dashboard
  static async getDashboard(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      console.log("Loading chief warden dashboard for user:", userId);

      const stats = await DashboardService.getChiefWardenStats(userId);
      const systemOverview = await DashboardService.getChiefWardenSystemOverview(userId);
      const wardens = await DashboardService.getChiefWardenWardens(userId);
      // const criticalAlerts = await DashboardService.getChiefWardenCriticalAlerts(userId);


      res.json({
        success: true,
        data: {
          stats,
          systemOverview,
          wardens: wardens.slice(0, 5), // Limit for dashboard
          // criticalAlerts,
        },
      });
    } catch (error) {
      console.error("Error loading chief warden dashboard:", error);
      res.status(500).json({
        success: false,
        message: "Failed to load dashboard data",
      });
    }
  }

  // Get Chief Warden Profile
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

  // Update Chief Warden Profile
  static async updateProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const { firstName, lastName, phone, department, responsibilities, adminLevel } = req.body;

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        // Construct the public URL for the uploaded file
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;

        // Get current profile to delete old picture
        const currentProfile = await prisma.chiefWardenProfile.findUnique({
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

      // Update chief warden profile
      const updatedProfile = await prisma.chiefWardenProfile.update({
        where: { userId },
        data: {
          ...(department && { department }),
          ...(responsibilities && { responsibilities }),
          ...(adminLevel && { adminLevel }),
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
      console.error("Error updating chief warden profile:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update profile",
      });
    }
  }

  // Get System Overview
  static async getSystemOverview(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const overview = await DashboardService.getChiefWardenSystemOverview(
        userId
      );

      res.json({
        success: true,
        data: overview,
      });
    } catch (error) {
      console.error("Error fetching system overview:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch system overview",
      });
    }
  }

  // Get All Wardens
  static async getWardens(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const wardens = await DashboardService.getChiefWardenWardens(userId);

      res.json({
        success: true,
        data: wardens,
      });
    } catch (error) {
      console.error("Error fetching wardens:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch wardens data",
      });
    }
  }

  // Get Warden Details
  static async getWardenById(req: Request, res: Response) {
    try {
      const { wardenId } = req.params;
      const warden = await authService.getUserById(wardenId);

      if (!warden || warden.role !== "WARDEN") {
        return res.status(404).json({
          success: false,
          message: "Warden not found",
        });
      }

      res.json({
        success: true,
        data: warden,
      });
    } catch (error) {
      console.error("Error fetching warden details:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch warden details",
      });
    }
  }

  // Get All System Requests (Admin View)
  static async getRequests(req: Request, res: Response) {
    try {
      const status = req.query.status as string;
      const limit = parseInt(req.query.limit as string) || 100;

      let requests = await RequestService.getAllRequests();

      if (status && status !== "ALL") {
        requests = requests.filter((r) => r.status === status);
      }

      // Limit results
      requests = requests.slice(0, limit);

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching system requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch requests",
      });
    }
  }

  // Override Request Status (Chief Warden Authority)
  static async updateRequestStatus(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const chiefWardenId = (req as any).user.id;
      const { status, message } = req.body;

      // Validate status
      if (!["APPROVED", "REJECTED"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Status must be either APPROVED or REJECTED",
        });
      }

      const updatedRequest = await RequestService.updateScaledUpRequestStatus(
        requestId,
        {
          status: status as RequestStatus,
          approvedBy: chiefWardenId,
          message, // Include chief warden's message
        }
      );

      res.json({
        success: true,
        message: `Request ${status.toLowerCase()} by Chief Warden`,
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

  // Get All Students (System View)
  static async getStudents(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const students = await DashboardService.getChiefWardenStudents(userId);

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

  // Get Critical Alerts
  static async getAlerts(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const alerts = await DashboardService.getChiefWardenCriticalAlerts(
        userId
      );

      res.json({
        success: true,
        data: alerts,
      });
    } catch (error) {
      console.error("Error fetching alerts:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch critical alerts",
      });
    }
  }

  // Get System Statistics
  static async getStatistics(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const stats = await DashboardService.getChiefWardenStats(userId);

      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch system statistics",
      });
    }
  }

  // Get Scaled Up Requests (requests that need chief warden approval)
  static async getScaledUpRequests(req: Request, res: Response) {
    try {
      const requests = await RequestService.getScaledUpRequests();

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching scaled up requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch scaled up requests",
      });
    }
  }

  // Get All Scaled Up Requests (for dashboard overview)
  static async getAllScaledUpRequests(req: Request, res: Response) {
    try {
      const requests = await RequestService.getAllScaledUpRequests();

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching all scaled up requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch scaled up requests",
      });
    }
  }

  // Approve/Reject Scaled Up Request (Chief Warden Authority)
  static async updateScaledUpRequestStatus(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const chiefWardenId = (req as any).user.id;
      const { status, message } = req.body;

      // Validate status
      if (!["APPROVED", "REJECTED"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Status must be either APPROVED or REJECTED",
        });
      }

      const updatedRequest = await RequestService.updateScaledUpRequestStatus(
        requestId,
        {
          status: status as RequestStatus,
          approvedBy: chiefWardenId,
          message, // Pass the chief warden's message
        }
      );

      res.json({
        success: true,
        message: `Scaled up request ${status.toLowerCase()} by Chief Warden`,
        data: updatedRequest,
      });
    } catch (error: any) {
      console.error("Error updating scaled up request status:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update scaled up request status",
      });
    }
  }

  // Confirm Arrival - Chief Warden confirms student has arrived at hostel
  static async confirmArrival(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const chiefWardenId = (req as any).user.id;

      const updatedRequest = await RequestService.confirmArrival({
        requestId,
        confirmedBy: chiefWardenId,
        role: "CHIEF_WARDEN",
      });

      res.json({
        success: true,
        message: "Student arrival confirmed successfully by Chief Warden",
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

  // Broadcast message to all students or all parents
  static async broadcastMessage(req: Request, res: Response) {
    try {
      const chiefWardenId = (req as any).user.id;
      const { content, targetRole } = req.body;

      // Validate targetRole
      if (!["STUDENT", "PARENT"].includes(targetRole)) {
        return res.status(400).json({
          success: false,
          message: "Target role must be either STUDENT or PARENT",
        });
      }

      // Validate content
      if (!content || content.trim().length === 0) {
        return res.status(400).json({
          success: false,
          message: "Message content is required",
        });
      }

      const result = await MessageService.broadcastMessage({
        senderId: chiefWardenId,
        content: content.trim(),
        targetRole: targetRole as "STUDENT" | "PARENT",
      });

      res.json({
        success: true,
        message: `Broadcast sent to ${targetRole.toLowerCase()}(s)`,
        data: {
          recipientCount: result,
          targetRole: result.targetRole,
        },
      });
    } catch (error: any) {
      console.error("Error broadcasting message:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to broadcast message",
      });
    }
  }
}

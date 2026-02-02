import { Request, Response } from "express";
import { DashboardService } from "../services/dashboardService";

export class DashboardController {
  static async getDashboardStats(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;
      const userRole = (req as any).user?.role;
      const role = (req.query.role as string) || userRole;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const stats = await DashboardService.getDashboardStats(userId, role);

      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // Student Dashboard Methods
  static async getStudentStats(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "STUDENT") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const stats = await DashboardService.getStudentStats(userId);

      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching student stats:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getStudentRecentRequests(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "STUDENT") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const requests = await DashboardService.getStudentRecentRequests(userId);

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching student recent requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getStudentRoomInfo(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "STUDENT") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const roomInfo = await DashboardService.getStudentRoomInfo(userId);

      res.json({
        success: true,
        data: roomInfo,
      });
    } catch (error) {
      console.error("Error fetching student room info:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // Parent Dashboard Methods
  static async getParentStats(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "PARENT") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const stats = await DashboardService.getParentStats(userId);

      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching parent stats:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getParentChildren(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "PARENT") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const children = await DashboardService.getParentChildren(userId);

      res.json({
        success: true,
        data: children,
      });
    } catch (error) {
      console.error("Error fetching parent children:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getParentRecentRequests(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "PARENT") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const requests = await DashboardService.getParentRecentRequests(userId);

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching parent recent requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // Warden Dashboard Methods
  static async getWardenStats(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (
        !userId ||
        !["WARDEN", "CHIEF_WARDEN"].includes((req as any).user?.role)
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const stats = await DashboardService.getWardenStats(userId);

      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching warden stats:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getWardenPendingRequests(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (
        !userId ||
        !["WARDEN", "CHIEF_WARDEN"].includes((req as any).user?.role)
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const requests = await DashboardService.getWardenPendingRequests(userId);

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching warden pending requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getWardenRecentActivities(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (
        !userId ||
        !["WARDEN", "CHIEF_WARDEN"].includes((req as any).user?.role)
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const activities = await DashboardService.getWardenRecentActivities(
        userId
      );

      res.json({
        success: true,
        data: activities,
      });
    } catch (error) {
      console.error("Error fetching warden recent activities:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getWardenStudents(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (
        !userId ||
        !["WARDEN", "CHIEF_WARDEN"].includes((req as any).user?.role)
      ) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const students = await DashboardService.getWardenStudents(userId);

      res.json({
        success: true,
        data: students,
      });
    } catch (error) {
      console.error("Error fetching warden students:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  // Chief Warden Dashboard Methods
  static async getChiefWardenStats(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "CHIEF_WARDEN") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const stats = await DashboardService.getChiefWardenStats(userId);

      res.json({
        success: true,
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching chief warden stats:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getChiefWardenSystemOverview(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "CHIEF_WARDEN") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const overview = await DashboardService.getChiefWardenSystemOverview(
        userId
      );

      res.json({
        success: true,
        data: overview,
      });
    } catch (error) {
      console.error("Error fetching chief warden system overview:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getChiefWardenWardens(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "CHIEF_WARDEN") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const wardens = await DashboardService.getChiefWardenWardens(userId);

      res.json({
        success: true,
        data: wardens,
      });
    } catch (error) {
      console.error("Error fetching chief warden wardens:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getChiefWardenCriticalAlerts(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId || (req as any).user?.role !== "CHIEF_WARDEN") {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      const alerts = await DashboardService.getChiefWardenCriticalAlerts(
        userId
      );

      res.json({
        success: true,
        data: alerts,
      });
    } catch (error) {
      console.error("Error fetching chief warden critical alerts:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

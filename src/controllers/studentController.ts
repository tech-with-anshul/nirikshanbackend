import { Request, Response } from "express";
import { RequestType } from "../../generated/prisma";
import { AuthService } from "../services/authService";
import { DashboardService } from "../services/dashboardService";
import { PDFService } from "../services/pdfService";
import { RequestService } from "../services/requestService";

const authService = new AuthService();

export class StudentController {
  // Student Dashboard
  static async getDashboard(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const [stats, recentRequests, roomInfo] = await Promise.all([
        DashboardService.getStudentStats(userId),
        DashboardService.getStudentRecentRequests(userId),
        DashboardService.getStudentRoomInfo(userId),
      ]);

      res.json({
        success: true,
        data: {
          stats,
          recentRequests,
          roomInfo,
        },
      });
    } catch (error) {
      console.error("Error loading student dashboard:", error);
      res.status(500).json({
        success: false,
        message: "Failed to load dashboard data",
      });
    }
  }

  // Get Student Profile
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

  // Get Student Room Info
  static async getRoomInfo(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const roomInfo = await DashboardService.getStudentRoomInfo(userId);

      res.json({
        success: true,
        data: roomInfo,
      });
    } catch (error) {
      console.error("Error fetching room info:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch room information",
      });
    }
  }

  // Create Student Request
  static async createRequest(req: Request, res: Response) {
    try {
      const { type, reason, expectedBack, parentId, verificationPhoto, location } = req.body;
      const studentId = (req as any).user.id;

      const requestData = {
        type: type as RequestType,
        reason,
        expectedBack: expectedBack ? new Date(expectedBack) : undefined,
        studentId,
        parentId,
        verificationPhoto,
        location,
      };

      const request = await RequestService.createRequest(requestData);

      res.status(201).json({
        success: true,
        message: "Request created successfully",
        data: request,
      });
    } catch (error: any) {
      console.error("Error creating request:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to create request",
      });
    }
  }

  // Get Student Requests
  static async getRequests(req: Request, res: Response) {
    try {
      const studentId = (req as any).user.id;
      const includeHistory = (req.query as any).history === "true";

      const requests = await RequestService.getRequestsByStudent(
        studentId,
        includeHistory
      );

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching student requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch requests",
      });
    }
  }

  // Get Specific Request Details
  static async getRequestById(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const studentId = (req as any).user.id;

      const request = await RequestService.getRequestById(requestId);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Verify this student can access this request
      if (request.studentId !== studentId) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
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

  // Download Gate Pass PDF for Approved Request
  static async downloadGatePass(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const studentId = (req as any).user.id;

      const request = await RequestService.getRequestById(requestId);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Verify this student can access this request
      if (request.studentId !== studentId) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      // Check if request is fully approved
      if (!PDFService.isRequestFullyApproved(request)) {
        return res.status(400).json({
          success: false,
          message: "Request is not fully approved. Gate pass can only be downloaded for fully approved requests.",
        });
      }

      // Generate PDF
      const pdfBuffer = await PDFService.generateGatePassPDF(request);

      // Set response headers for PDF download
      const filename = `gate_pass_${request.student.firstName}_${request.student.lastName}_${new Date().toISOString().split("T")[0]}.pdf`;
      
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
      res.setHeader("Content-Length", pdfBuffer.length);

      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating gate pass PDF:", error);
      res.status(500).json({
        success: false,
        message: "Failed to generate gate pass PDF",
      });
    }
  }
}

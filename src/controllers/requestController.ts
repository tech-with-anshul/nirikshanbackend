import { Request, Response } from "express";
import { RequestStatus, RequestType } from "../../generated/prisma";
import {
    validateBody,
    validateParams,
    validateQuery,
} from "../middleware/validation";
import {
    CreateRequestSchema,
    RequestIdParamSchema,
    StudentRequestQuerySchema,
    UpdateRequestStatusSchema,
} from "../schemas/requestSchemas";
import {
    CreateRequestDto,
    RequestService,
    UpdateRequestStatusDto,
} from "../services/requestService";

export class RequestController {
  static async createRequest(req: Request, res: Response) {
    try {
      const { type, reason, expectedBack, parentId, verificationPhoto, location } = req.body;
      const studentId = (req as any).user?.id;

      if (!studentId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Only students can create requests
      if ((req as any).user?.role !== "STUDENT") {
        return res.status(403).json({
          success: false,
          message: "Only students can create requests",
        });
      }

      const requestData: CreateRequestDto = {
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
    } catch (error) {
      console.error("Error creating request:", error);
      res.status(500).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      });
    }
  }

  static async getStudentRequests(req: Request, res: Response) {
    try {
      const studentId = (req as any).user?.id;
      const includeHistory = (req.query as any).history;

      if (!studentId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Only students can view their own requests
      if ((req as any).user?.role !== "STUDENT") {
        return res.status(403).json({
          success: false,
          message: "Only students can view their requests",
        });
      }

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
        message: "Internal server error",
      });
    }
  }

  static async getParentRequests(req: Request, res: Response) {
    try {
      const parentId = (req as any).user?.id;

      if (!parentId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Only parents can view their requests
      if ((req as any).user?.role !== "PARENT") {
        return res.status(403).json({
          success: false,
          message: "Only parents can view their requests",
        });
      }

      const requests = await RequestService.getRequestsByParent(parentId);

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching parent requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async updateRequestStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const userId = (req as any).user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Only parents and wardens can update request status
      if (
        !["PARENT", "WARDEN", "CHIEF_WARDEN"].includes(
          (req as any).user?.role || ""
        )
      ) {
        return res.status(403).json({
          success: false,
          message: "Insufficient permissions",
        });
      }

      // First check if the request exists and if the user has permission to update it
      const existingRequest = await RequestService.getRequestById(id);

      if (!existingRequest) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Parents can only approve/reject requests for their children
      if (
        (req as any).user?.role === "PARENT" &&
        existingRequest.parentId !== userId
      ) {
        return res.status(403).json({
          success: false,
          message: "You can only update requests for your children",
        });
      }

      const updateData: UpdateRequestStatusDto = {
        status: status as RequestStatus,
        approvedBy: userId,
      };

      const updatedRequest = await RequestService.updateRequestStatus(
        id,
        updateData
      );

      res.json({
        success: true,
        message: `Request ${status.toLowerCase()} successfully`,
        data: updatedRequest,
      });
    } catch (error) {
      console.error("Error updating request status:", error);
      res.status(500).json({
        success: false,
        message:
          error instanceof Error ? error.message : "Internal server error",
      });
    }
  }

  static async getAllRequests(req: Request, res: Response) {
    try {
      const userId = (req as any).user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Only wardens and chief wardens can view all requests
      if (!["WARDEN", "CHIEF_WARDEN"].includes((req as any).user?.role || "")) {
        return res.status(403).json({
          success: false,
          message: "Insufficient permissions",
        });
      }

      const requests = await RequestService.getAllRequests();

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching all requests:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  static async getRequestById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userId = (req as any).user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const request = await RequestService.getRequestById(id);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Check if user has permission to view this request
      const canView =
        request.studentId === userId || // Student can view their own requests
        request.parentId === userId || // Parent can view their child's requests
        ["WARDEN", "CHIEF_WARDEN"].includes((req as any).user?.role || ""); // Wardens can view all

      if (!canView) {
        return res.status(403).json({
          success: false,
          message: "Insufficient permissions",
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
        message: "Internal server error",
      });
    }
  }
}

// Export validation middleware
export const validateCreateRequest = validateBody(CreateRequestSchema);
export const validateUpdateRequestStatus = validateBody(
  UpdateRequestStatusSchema
);
export const validateRequestId = validateParams(RequestIdParamSchema);
export const validateStudentRequestQuery = validateQuery(
  StudentRequestQuerySchema
);

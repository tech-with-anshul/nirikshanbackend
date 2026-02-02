import { Request, Response } from "express";
import { RequestStatus } from "../../generated/prisma";
import { prisma } from "../config/database";
import { AuthService } from "../services/authService";
import { DashboardService } from "../services/dashboardService";
import { RequestService } from "../services/requestService";

const authService = new AuthService();

export class ParentController {
  // Parent Dashboard
  static async getDashboard(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const [stats, children, recentRequests] = await Promise.all([
        DashboardService.getParentStats(userId),
        DashboardService.getParentChildren(userId),
        DashboardService.getParentRecentRequests(userId),
      ]);

      res.json({
        success: true,
        data: {
          stats,
          children,
          recentRequests,
        },
      });
    } catch (error) {
      console.error("Error loading parent dashboard:", error);
      res.status(500).json({
        success: false,
        message: "Failed to load dashboard data",
      });
    }
  }

  // Get Parent Profile
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

  // Get Parent's Children
  static async getChildren(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const children = await DashboardService.getParentChildren(userId);

      res.json({
        success: true,
        data: children,
      });
    } catch (error) {
      console.error("Error fetching children:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch children data",
      });
    }
  }

  // Get Child Requests
  static async getRequests(req: Request, res: Response) {
    try {
      const parentId = (req as any).user.id;
      const requests = await RequestService.getRequestsByParent(parentId);

      res.json({
        success: true,
        data: requests,
      });
    } catch (error) {
      console.error("Error fetching parent requests:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch requests",
      });
    }
  }

  // Approve/Reject Child Request
  static async updateRequestStatus(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const parentId = (req as any).user.id;
      const { status, location } = req.body;

      // Validate status
      if (!["APPROVED", "REJECTED"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Status must be either APPROVED or REJECTED",
        });
      }

      // For approval, location should be provided
      if (status === "APPROVED" && !location) {
        console.warn(`⚠️ Parent ${parentId} approving without location`);
      }

      const updatedRequest = await RequestService.updateRequestStatusByParent(
        requestId,
        parentId,
        {
          status: status as RequestStatus,
          location: location, // Pass parent's location
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

  // Get Specific Request Details
  static async getRequestById(req: Request, res: Response) {
    try {
      const { requestId } = req.params;
      const parentId = (req as any).user.id;

      const request = await RequestService.getRequestById(requestId);

      if (!request) {
        return res.status(404).json({
          success: false,
          message: "Request not found",
        });
      }

      // Verify this parent can access this request
      if (request.parentId !== parentId) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }

      res.json({
        success: true,
        data: request,
      });
    } catch (error: any) {
      console.error("Error fetching request details:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to fetch request details",
      });
    }
  }

  // Create Arrival Confirmation Request (Parent initiates for their child)
  static async createArrivalConfirmation(req: Request, res: Response) {
    try {
      const parentId = (req as any).user.id;
      let { studentId } = req.body;

      // If no studentId provided, try to find the parent's child automatically
      if (!studentId) {
        const parent = await prisma.user.findUnique({
          where: { id: parentId },
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
                      },
                    },
                  },
                },
                childrenAsFather: {
                  include: {
                    user: {
                      select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });
        console.log(`👨‍👩‍👧‍👦 Parent ${parentId} profile:`, parent);

        // Combine children from both mother and father relations
        const allChildren = [
          ...(parent?.parentProfile?.childrenAsMother || []),
          ...(parent?.parentProfile?.childrenAsFather || []),
        ];

        if (allChildren.length === 0) {
          return res.status(400).json({
            success: false,
            message: "No children found for this parent. Please contact administration.",
          });
        }

        // If parent has only one child, use that automatically
        if (allChildren.length === 1) {
          studentId = allChildren[0].userId;
          console.log(`📋 Auto-selected child for parent ${parentId}: ${studentId}`);
        } else {
          return res.status(400).json({
            success: false,
            message: "Parent has multiple children. Please specify studentId.",
          });
        }
      }

      const request = await RequestService.createArrivalConfirmationRequest({
        studentId,
        parentId,
      });

      res.status(201).json({
        success: true,
        message: "Arrival confirmation request created successfully",
        data: request,
      });
    } catch (error: any) {
      console.error("Error creating arrival confirmation:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to create arrival confirmation request",
      });
    }
  }
}

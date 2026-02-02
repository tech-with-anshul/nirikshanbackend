import { Request, Response } from "express";
import { BuildingService } from "../services/buildingService";

export class BuildingController {
  static async getBuildings(req: Request, res: Response) {
    try {
      const buildings = await BuildingService.getAllBuildings();

      res.status(200).json({
        success: true,
        data: buildings,
        message: "Buildings retrieved successfully",
      });
    } catch (error) {
      console.error("Error getting buildings:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve buildings",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  static async getBuildingStats(req: Request, res: Response) {
    try {
      const stats = await BuildingService.getBuildingStatistics();

      res.status(200).json({
        success: true,
        data: stats,
        message: "Building statistics retrieved successfully",
      });
    } catch (error) {
      console.error("Error getting building stats:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve building statistics",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get students in a specific building
  static async getStudentsInBuilding(req: Request, res: Response) {
    try {
      const { building } = req.params;

      if (!building) {
        return res.status(400).json({
          success: false,
          message: "Building parameter is required",
        });
      }

      const students = await BuildingService.getStudentsInBuilding(building);

      res.status(200).json({
        success: true,
        data: students,
        message: `Students in building ${building} retrieved successfully`,
      });
    } catch (error) {
      console.error("Error getting students in building:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve students in building",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get rooms in a specific building
  static async getRoomsInBuilding(req: Request, res: Response) {
    try {
      const { building } = req.params;

      if (!building) {
        return res.status(400).json({
          success: false,
          message: "Building parameter is required",
        });
      }

      const rooms = await BuildingService.getRoomsInBuilding(building);

      res.status(200).json({
        success: true,
        data: rooms,
        message: `Rooms in building ${building} retrieved successfully`,
      });
    } catch (error) {
      console.error("Error getting rooms in building:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve rooms in building",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get building summary
  static async getBuildingSummary(req: Request, res: Response) {
    try {
      const { building } = req.params;

      if (!building) {
        return res.status(400).json({
          success: false,
          message: "Building parameter is required",
        });
      }

      const summary = await BuildingService.getBuildingSummary(building);

      res.status(200).json({
        success: true,
        data: summary,
        message: `Building ${building} summary retrieved successfully`,
      });
    } catch (error) {
      console.error("Error getting building summary:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve building summary",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Assign warden to building
  static async assignWardenToBuilding(req: Request, res: Response) {
    try {
      const { userId, building } = req.body;

      // Validate required fields
      if (!userId || !building) {
        return res.status(400).json({
          success: false,
          message: "User ID and building are required",
        });
      }

      const result = await BuildingService.assignWardenToBuilding(
        userId,
        building
      );

      res.status(200).json({
        success: true,
        data: result,
        message: result.message,
      });
    } catch (error) {
      console.error("Error assigning warden to building:", error);
      res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Failed to assign warden to building",
      });
    }
  }
}

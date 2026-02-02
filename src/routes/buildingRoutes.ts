import { Router } from "express";
import { BuildingController } from "../controllers/buildingController";
import { authenticateToken, requireChiefWarden, requireWardenOrChief } from "../middleware/auth";

const router = Router();

// Apply authentication to all building routes
router.use(authenticateToken);

// GET /buildings - Get all available buildings (accessible to wardens and above)
router.get("/", requireWardenOrChief, BuildingController.getBuildings);

// Apply chief warden authorization to remaining building routes
router.use(requireChiefWarden);

// GET /buildings/stats - Get building statistics
router.get("/stats", BuildingController.getBuildingStats);

// GET /buildings/:building/summary - Get building summary
router.get("/:building/summary", BuildingController.getBuildingSummary);

// GET /buildings/:building/students - Get students in specific building
router.get("/:building/students", BuildingController.getStudentsInBuilding);

// GET /buildings/:building/rooms - Get rooms in specific building
router.get("/:building/rooms", BuildingController.getRoomsInBuilding);

// POST /buildings/assign-warden - Assign warden to building
router.post("/assign-warden", BuildingController.assignWardenToBuilding);

export default router;

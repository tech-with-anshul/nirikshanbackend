import express from "express";
import { authenticateToken } from "../middleware/auth";
import { requireChiefWarden } from "../middleware/roleAuth";
import { ChiefWardenController } from "../controllers/chiefWardenController";
import { upload } from "../config/multer";

const router = express.Router();

// Apply authentication and role protection to all chief warden routes
router.use(authenticateToken);
router.use(requireChiefWarden as any);

// Chief Warden Dashboard
router.get("/dashboard", ChiefWardenController.getDashboard);

// Get Chief Warden Profile
router.get("/profile", ChiefWardenController.getProfile);

// Update Chief Warden Profile (with optional profile picture upload)
router.put("/profile", upload.single("profilePicture"), ChiefWardenController.updateProfile);

// Get System Overview
router.get("/system-overview", ChiefWardenController.getSystemOverview);

// Get All Wardens
router.get("/wardens", ChiefWardenController.getWardens);

// Get Warden Details
router.get("/wardens/:wardenId", ChiefWardenController.getWardenById);

// Get All System Requests (Admin View)
router.get("/requests", ChiefWardenController.getRequests);

// Override Request Status (Chief Warden Authority)
router.put(
  "/requests/:requestId/status",
  ChiefWardenController.updateRequestStatus
);

// Scaled Up Requests Management
router.get("/scaled-up-requests", ChiefWardenController.getScaledUpRequests);
router.get(
  "/all-scaled-up-requests",
  ChiefWardenController.getAllScaledUpRequests
);
router.put(
  "/scaled-up-requests/:requestId/status",
  ChiefWardenController.updateScaledUpRequestStatus
);

// Arrival Confirmation
router.get("/arrival-confirmations", ChiefWardenController.getArrivalConfirmationRequests);
router.post("/arrival-confirmations/:requestId/confirm", ChiefWardenController.confirmArrival);

// Get All Students (System View)
router.get("/students", ChiefWardenController.getStudents);

// Get Critical Alerts
router.get("/alerts", ChiefWardenController.getAlerts);

// Get System Statistics
router.get("/statistics", ChiefWardenController.getStatistics);

// Broadcast Message
router.post("/broadcast", ChiefWardenController.broadcastMessage);

export default router;

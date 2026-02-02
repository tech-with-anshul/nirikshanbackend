import express from "express";
import { ParentController } from "../controllers/parentController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Parent Dashboard
router.get("/dashboard", ParentController.getDashboard);

// Get Parent Profile
router.get("/profile", ParentController.getProfile);

// Parent Requests
router.get("/requests", ParentController.getRequests);
router.put("/requests/:requestId/status", ParentController.updateRequestStatus);

// Create Arrival Confirmation Request
router.post("/arrival-confirmation", ParentController.createArrivalConfirmation);

export default router;

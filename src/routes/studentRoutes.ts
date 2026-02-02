import express from "express";
import { StudentController } from "../controllers/studentController";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

// Apply authentication middleware to all routes
router.use(authenticateToken);

// Student Dashboard
router.get("/dashboard", StudentController.getDashboard);

// Get Student Profile
router.get("/profile", StudentController.getProfile);

// Student Requests
router.get("/requests", StudentController.getRequests);
router.post("/requests", StudentController.createRequest);

// Get Specific Request Details
router.get("/requests/:requestId", StudentController.getRequestById);

// Download Gate Pass PDF for Approved Request
router.get("/requests/:requestId/gate-pass", StudentController.downloadGatePass);

export default router;

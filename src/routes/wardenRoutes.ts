import express from "express";
import { authenticateToken } from "../middleware/auth";
import { requireWarden, requireWardenOrChief } from "../middleware/roleAuth";
import { WardenController } from "../controllers/wardenController";
import { upload } from "../config/multer";

const router = express.Router();

// Apply authentication to all warden routes
router.use(authenticateToken);

// Warden Dashboard (Warden only)
router.get("/dashboard", requireWarden as any, WardenController.getDashboard);

// Get Warden Profile (Warden only)
router.get("/profile", requireWarden as any, WardenController.getProfile);

// Update Warden Profile (Warden only, with optional profile picture upload)
router.put("/profile", requireWarden as any, upload.single("profilePicture"), WardenController.updateProfile);

// Request Management (Warden only)
router.get("/requests", requireWarden as any, WardenController.getRequests);
router.put("/requests/:requestId/status", requireWarden as any, WardenController.updateRequestStatus);
router.post("/requests/:requestId/scale-up", requireWarden as any, WardenController.scaleUpRequest);
router.get("/requests/:requestId", requireWarden as any, WardenController.getRequestById);

// Arrival Confirmation (Warden only)
router.get("/arrival-confirmations", requireWarden as any, WardenController.getArrivalConfirmationRequests);
router.post("/arrival-confirmations/:requestId/confirm", requireWarden as any, WardenController.confirmArrival);

// Student Management (Allow both Warden and Chief Warden)
router.get("/students", requireWardenOrChief as any, WardenController.getStudents);
router.get("/students/:studentId", requireWardenOrChief as any, WardenController.getStudentById);
router.get(
  "/students/:studentId/requests",
  requireWardenOrChief as any,
  WardenController.getStudentRequests
);

// User Creation and Management (Allow both Warden and Chief Warden)
router.post("/create-student", requireWardenOrChief as any, upload.single("profilePicture"), WardenController.createStudent);
router.put("/students/:studentId", requireWardenOrChief as any, upload.single("profilePicture"), WardenController.updateStudent);
router.delete("/students/:studentId", requireWardenOrChief as any, WardenController.deleteStudent);
router.post("/students/:studentId/change-password", requireWardenOrChief as any, WardenController.changeStudentPassword);
router.post("/create-parent", requireWardenOrChief as any, WardenController.createParent);
router.post("/link-student-parent", requireWardenOrChief as any, WardenController.linkStudentToParent);

// Parent Management (Allow both Warden and Chief Warden)
router.get("/parents", requireWardenOrChief as any, WardenController.getParents);
router.get("/parents/:parentId", requireWardenOrChief as any, WardenController.getParentById);
router.post("/parents/:parentId/change-password", requireWardenOrChief as any, WardenController.changeParentPassword);

export default router;

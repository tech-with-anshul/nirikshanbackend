import express from "express";
import { authenticateToken } from "../middleware/auth";
import { requireMatron } from "../middleware/roleAuth";
import { MatronController } from "../controllers/matronController";
import { upload } from "../config/multer";

const router = express.Router();

// Apply authentication and role protection to all matron routes
router.use(authenticateToken);
router.use(requireMatron as any);

// Matron Dashboard
router.get("/dashboard", MatronController.getDashboard);

// Get Matron Profile
router.get("/profile", MatronController.getProfile);

// Update Matron Profile (with optional profile picture upload)
router.put("/profile", upload.single("profilePicture"), MatronController.updateProfile);

// Student Management (Matron oversees all buildings)
router.get("/students", MatronController.getStudents);
router.get("/students/:studentId", MatronController.getStudentById);
router.post("/create-student", upload.single("profilePicture"), MatronController.createStudent);
router.put("/students/:studentId", upload.single("profilePicture"), MatronController.updateStudent);
router.delete("/students/:studentId", MatronController.deleteStudent);
router.post("/students/:studentId/change-password", MatronController.changeStudentPassword);

// Parent Management
router.get("/parents/:parentId", MatronController.getParentById);
router.post("/parents/:parentId/change-password", MatronController.changeParentPassword);

export default router;
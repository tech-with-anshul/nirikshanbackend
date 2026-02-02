import { Request, Response } from "express";
import { DashboardService } from "../services/dashboardService";
import { AuthService } from "../services/authService";
import { prisma } from "../config/database";
import { deleteOldProfilePicture } from "../config/multer";

const authService = new AuthService();

export class MatronController {
  // Matron Dashboard
  static async getDashboard(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;

      const matronProfile = await prisma.matronProfile.findUnique({
        where: { userId },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true,
            },
          },
        },
      });

      if (!matronProfile) {
        return res.status(404).json({
          success: false,
          message: "Matron profile not found",
        });
      }

      // Get statistics for all buildings (Matron oversees all)
      const totalStudents = await prisma.studentProfile.count();
      const presentStudents = await prisma.studentProfile.count({
        where: { isAtHostel: true },
      });
      const absentStudents = await prisma.studentProfile.count({
        where: { isAtHostel: false },
      });

      const stats = {
        totalStudents,
        presentStudents,
        absentStudents,
        totalBuildings: await prisma.building.count(),
        totalWardens: await prisma.wardenProfile.count(),
        shiftHours: `${matronProfile.shiftStartTime} - ${matronProfile.shiftEndTime}`,
      };

      res.json({
        success: true,
        data: {
          profile: matronProfile,
          stats,
        },
      });
    } catch (error) {
      console.error("Error loading matron dashboard:", error);
      res.status(500).json({
        success: false,
        message: "Failed to load dashboard data",
      });
    }
  }

  // Get Matron Profile
  static async getProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const user = await authService.getUserById(userId);

      if (!user || !user.matronProfile) {
        return res.status(404).json({
          success: false,
          message: "Matron profile not found",
        });
      }

      res.json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error("Error fetching matron profile:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch profile",
      });
    }
  }

  // Update Matron Profile
  static async updateProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).user.id;
      const {
        firstName,
        lastName,
        phone,
        department,
        responsibilities,
        shiftHours,
      } = req.body;

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        // Construct the public URL for the uploaded file
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;

        // Get current profile to delete old picture
        const currentProfile = await prisma.matronProfile.findUnique({
          where: { userId },
        });

        if (currentProfile?.profilePicture) {
          deleteOldProfilePicture(currentProfile.profilePicture);
        }
      }

      // Update user basic info
      const updatedUser = await authService.updateUser(userId, {
        firstName,
        lastName,
        phone,
      });

      // Update matron profile
      await prisma.matronProfile.update({
        where: { userId },
        data: {
          ...(department && { department }),
          ...(responsibilities && { responsibilities }),
          ...(shiftHours && { shiftHours }),
          ...(profilePictureUrl && { profilePicture: profilePictureUrl }),
        },
      });

      // Fetch complete user data with profile
      const completeUser = await authService.getUserById(userId);

      res.json({
        success: true,
        message: "Profile updated successfully",
        data: completeUser,
      });
    } catch (error: any) {
      console.error("Error updating matron profile:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to update profile",
      });
    }
  }

  // Get All Students (Matron oversees all buildings)
  static async getStudents(req: Request, res: Response) {
    try {
      const students = await prisma.user.findMany({
        where: {
          role: "STUDENT",
        },
        include: {
          studentProfile: {
            include: {
              room: true,
              motherProfile: {
                include: {
                  user: {
                    select: {
                      id: true,
                      phone: true,
                      firstName: true,
                      lastName: true,
                      email: true,
                    },
                  },
                },
              },
              fatherProfile: {
                include: {
                  user: {
                    select: {
                      id: true,
                      phone: true,
                      firstName: true,
                      lastName: true,
                      email: true,
                    },
                  },
                },
              },
            },
          },
        },
        orderBy: { firstName: "asc" },
      });

      res.json({
        success: true,
        data: students,
      });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch students",
      });
    }
  }

  // Get Student by ID
  static async getStudentById(req: Request, res: Response) {
    try {
      const { studentId } = req.params;

      const student = await authService.getUserById(studentId);

      if (!student || student.role !== "STUDENT") {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      res.json({
        success: true,
        data: student,
      });
    } catch (error) {
      console.error("Error fetching student:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch student",
      });
    }
  }

  // Get Parent by ID
  static async getParentById(req: Request, res: Response) {
    try {
      const { parentId } = req.params;

      const parent = await authService.getUserById(parentId);

      if (!parent || parent.role !== "PARENT") {
        return res.status(404).json({
          success: false,
          message: "Parent not found",
        });
      }

      res.json({
        success: true,
        data: parent,
      });
    } catch (error) {
      console.error("Error fetching parent:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch parent",
      });
    }
  }

  // Create Student (Matron Authority)
  static async createStudent(req: Request, res: Response) {
    try {
      console.log("ni");
      const wardenId = (req as any).user.id;

      // Get warden's assigned building first
      // const wardenProfile = await authService.getWardenProfile(wardenId);
      // if (!wardenProfile?.assignedBuilding) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "Warden has no assigned building. Cannot create students.",
      //   });
      // }

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        // Construct the public URL for the uploaded file
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;
      }

      const {
        email,
        firstName,
        lastName,
        phone,
        username,
        studentId,
        roomNumber,
        floorNumber,
        building, // Now accept building from request
        emergencyContact,
        medicalInfo,
        // Mother fields
        motherEmail,
        motherFirstName,
        motherLastName,
        motherPhone,
        motherAddress,
        motherEmergencyContact,
        // Father fields
        fatherEmail,
        fatherFirstName,
        fatherLastName,
        fatherPhone,
        fatherAddress,
        fatherEmergencyContact,
      } = req.body;
      console.log("Creating student with data:", req.body);

      // Validate required fields
      if (!email || !firstName || !lastName || !username || !studentId || !roomNumber || !floorNumber || !building) {
        return res.status(400).json({
          success: false,
          message: "Email, first name, last name, username, student ID, room number, floor number, and building are required",
        });
      }

      const studentData: any = {
        email,
        firstName,
        lastName,
        role: "STUDENT" as const,
        phone,
        username,
        studentId,
        roomNumber,
        floorNumber,
        building, // Use provided building instead of auto-assigning
        emergencyContact,
        medicalInfo,
        ...(profilePictureUrl && { profilePicture: profilePictureUrl }), // Add profile picture if uploaded
      };

      // Add mother data if provided
      if (motherEmail && motherFirstName && motherLastName) {
        studentData.motherEmail = motherEmail;
        studentData.motherFirstName = motherFirstName;
        studentData.motherLastName = motherLastName;
        studentData.motherPhone = motherPhone;
        studentData.motherAddress = motherAddress;
        studentData.motherEmergencyContact = motherEmergencyContact;
      }

      // Add father data if provided
      if (fatherEmail && fatherFirstName && fatherLastName) {
        studentData.fatherEmail = fatherEmail;
        studentData.fatherFirstName = fatherFirstName;
        studentData.fatherLastName = fatherLastName;
        studentData.fatherPhone = fatherPhone;
        studentData.fatherAddress = fatherAddress;
        studentData.fatherEmergencyContact = fatherEmergencyContact;
      }

      const result = await authService.createUserByWarden(
        studentData,
        wardenId
      );

      res.status(201).json({
        success: true,
        message: result.message,
        data: result.user,
      });
    } catch (error: any) {
      console.error("Error creating student:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to create student",
      });
    }
  }

  // Update Student (Matron Authority)
  static async updateStudent(req: Request, res: Response) {
    try {
      const matronId = (req as any).user.id;
      const { studentId } = req.params;

      // Handle profile picture upload
      let profilePictureUrl: string | undefined;
      if (req.file) {
        const baseUrl = `${req.protocol}://${req.get("host")}`;
        profilePictureUrl = `${baseUrl}/uploads/profile-pictures/${req.file.filename}`;

        // Get current profile to delete old picture
        const currentStudent = await prisma.user.findUnique({
          where: { id: studentId },
          include: { studentProfile: true },
        });

        if (currentStudent?.studentProfile?.profilePicture) {
          deleteOldProfilePicture(currentStudent.studentProfile.profilePicture);
        }
      }

      const {
        email,
        firstName,
        lastName,
        phone,
        username,
        studentIdNumber,
        roomNumber,
        floorNumber,
        building,
        emergencyContact,
        medicalInfo,
        isAtHostel,
        mother, // Nested mother object (from JSON)
        father, // Nested father object (from JSON)
        // FormData mother fields
        motherEmail,
        motherFirstName,
        motherLastName,
        motherPhone,
        motherAddress,
        motherEmergencyContact,
        // FormData father fields
        fatherEmail,
        fatherFirstName,
        fatherLastName,
        fatherPhone,
        fatherAddress,
        fatherEmergencyContact,
      } = req.body;

      if (!email || !firstName || !lastName) {
        return res.status(400).json({
          success: false,
          message: "Email, first name, and last name are required",
        });
      }

      // Build mother object from FormData fields if they exist
      let motherData = mother;
      if (motherEmail && motherFirstName && motherLastName) {
        motherData = {
          email: motherEmail,
          firstName: motherFirstName,
          lastName: motherLastName,
          phone: motherPhone,
          address: motherAddress,
          emergencyContact: motherEmergencyContact,
        };
      }

      // Build father object from FormData fields if they exist
      let fatherData = father;
      if (fatherEmail && fatherFirstName && fatherLastName) {
        fatherData = {
          email: fatherEmail,
          firstName: fatherFirstName,
          lastName: fatherLastName,
          phone: fatherPhone,
          address: fatherAddress,
          emergencyContact: fatherEmergencyContact,
        };
      }

      const result = await authService.updateStudentByWarden(
        studentId,
        {
          email,
          firstName,
          lastName,
          phone,
          username,
          studentIdNumber,
          roomNumber,
          floorNumber,
          building,
          emergencyContact,
          medicalInfo,
          isAtHostel: isAtHostel === "true" || isAtHostel === true,
          mother: motherData,
          father: fatherData,
          ...(profilePictureUrl && { profilePicture: profilePictureUrl }),
        },
        matronId
      );

      res.json({
        success: true,
        message: result.message,
        data: result.user,
      });
    } catch (error: any) {
      console.error("Error updating student:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to update student",
      });
    }
  }

  // Delete Student (Matron Authority)
  static async deleteStudent(req: Request, res: Response) {
    try {
      const matronId = (req as any).user.id;
      const { studentId } = req.params;

      await authService.deleteStudentByWarden(studentId, matronId);

      res.json({
        success: true,
        message: "Student deleted successfully",
      });
    } catch (error: any) {
      console.error("Error deleting student:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to delete student",
      });
    }
  }

  // Change Student Password (Matron Authority)
  static async changeStudentPassword(req: Request, res: Response) {
    try {
      const matronId = (req as any).user.id;
      const { studentId } = req.params;
      const { newPassword } = req.body;

      if (!newPassword) {
        return res.status(400).json({
          success: false,
          message: "New password is required",
        });
      }

      const result = await authService.changeStudentPasswordByWarden(
        studentId,
        newPassword,
        matronId
      );

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      console.error("Error changing student password:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to change student password",
      });
    }
  }

  // Change Parent Password (Matron Authority)
  static async changeParentPassword(req: Request, res: Response) {
    try {
      const matronId = (req as any).user.id;
      const { parentId } = req.params;
      const { newPassword } = req.body;

      if (!newPassword) {
        return res.status(400).json({
          success: false,
          message: "New password is required",
        });
      }

      const result = await authService.changeParentPasswordByWarden(
        parentId,
        newPassword,
        matronId
      );

      res.json({
        success: true,
        message: result.message,
      });
    } catch (error: any) {
      console.error("Error changing parent password:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to change parent password",
      });
    }
  }
}
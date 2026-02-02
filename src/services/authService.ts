import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../config/database";
import { UserRole, Building } from "../../generated/prisma";
import { EmailService } from "./emailService";
import { JWT_CONFIG } from "../config";

export interface RegisterDto {
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  username?: string;
}

export interface SendOTPDto {
  email: string;
}

export interface VerifyOTPDto {
  email: string;
  otp: string;
}

export interface LoginDto {
  email?: string;
  username?: string;
  phone?: string;
  password: string;
  role: UserRole;
}

export interface CreateUserDto extends RegisterDto {
  // Legacy parent fields (backward compatibility)
  parentEmail?: string;
  parentFirstName?: string;
  parentLastName?: string;
  parentPhone?: string;
  parentAddress?: string;
  parentRelationship?: string;
  parentEmergencyContact?: string;

  // Mother fields
  motherEmail?: string;
  motherFirstName?: string;
  motherLastName?: string;
  motherPhone?: string;
  motherAddress?: string;
  motherEmergencyContact?: string;

  // Father fields
  fatherEmail?: string;
  fatherFirstName?: string;
  fatherLastName?: string;
  fatherPhone?: string;
  fatherAddress?: string;
  fatherEmergencyContact?: string;

  // Student specific fields
  studentId?: string;
  roomNumber?: string;
  floorNumber?: string;
  building?: string;
  emergencyContact?: string;
  medicalInfo?: string;
  profilePicture?: string;
}

export class AuthService {
  private static JWT_SECRET = JWT_CONFIG.secret;

  async sendOTP(data: SendOTPDto) {
    const { email } = data;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Log for security monitoring but don't reveal user existence
      console.log(`🔒 OTP requested for non-existent user: ${email}`);

      // Always return same response to prevent user enumeration
      return {
        message: "If the email exists, an OTP has been sent",
        email: email,
      };
    }

    // Generate OTP
    const otp = EmailService.generateOTP();
    const otpExpiresAt = EmailService.getOTPExpiration();

    // Update user with new OTP
    await prisma.user.update({
      where: { id: user.id },
      data: {
        otp,
        otpExpiresAt,
      },
    });

    // Send OTP email
    const emailSent = await EmailService.sendOTP(email, otp, user.firstName);

    if (!emailSent) {
      throw new Error("Failed to send OTP email");
    }

    // Log successful OTP send for security monitoring
    console.log(`📧 OTP sent successfully to: ${email}`);

    return {
      message: "If the email exists, an OTP has been sent",
      email: email,
    };
  }

  async verifyOTP(data: VerifyOTPDto) {
    const { email, otp } = data;

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        studentProfile: true,
        parentProfile: {
          include: {
            childrenAsMother: {
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
            },
            childrenAsFather: {
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
            },
          },
        },
        wardenProfile: true,
        chiefWardenProfile: true,
        matronProfile: true,
      },
    });

    // Hide user existence - return same error for non-existent users and invalid OTPs
    if (!user) {
      // Log for security monitoring but don't reveal user existence
      console.log(
        `🔒 OTP verification attempted for non-existent user: ${email}`
      );
      throw new Error("Invalid OTP or email");
    }

    if (user.otp !== otp) {
      // Log failed OTP attempt for security monitoring
      console.log(`🔒 Invalid OTP attempt for user: ${email}`);
      throw new Error("Invalid OTP or email");
    }

    if (!EmailService.isOTPValid(user.otpExpiresAt)) {
      // Log expired OTP attempt for security monitoring
      console.log(`🔒 Expired OTP attempt for user: ${email}`);
      throw new Error("OTP has expired. Please request a new one.");
    }

    // Clear OTP and mark as verified, update last login
    await prisma.user.update({
      where: { id: user.id },
      data: {
        otp: null,
        otpExpiresAt: null,
        isVerified: true,
        lastLoginAt: new Date(),
      },
    });

    // Log successful login for security monitoring
    console.log(`✅ Successful OTP verification for user: ${email}`);

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      AuthService.JWT_SECRET,
      { expiresIn: "7d" }
    );

    const { otp: _, otpExpiresAt: __, ...userWithoutOTP } = user;

    return {
      token,
      user: userWithoutOTP,
    };
  }

  async register(data: RegisterDto) {
    const { email, firstName, lastName, role, phone } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Create user without password
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        role,
        phone,
        isVerified: false,
      },
    });

    // Create role-specific profile
    await this.createRoleProfile(user.id, role);

    // Send welcome email
    await EmailService.sendWelcomeEmail(
      email,
      firstName,
      role,
      "System Administrator"
    );

    return {
      message: "User registered successfully",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  }

  // New method for wardens and chief wardens to create users
  async createUserByWarden(data: CreateUserDto, wardenId: string) {
    const creator = await prisma.user.findUnique({
      where: { id: wardenId },
    });

    if (!creator || (creator.role !== "WARDEN" && creator.role !== "CHIEF_WARDEN" && creator.role !== "MATRON")) {
      throw new Error("Only wardens, chief wardens, and matrons can create users");
    }

    const { email, firstName, lastName, role, phone, username } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // Check if username already exists in StudentProfile (if provided)
    if (username && role === "STUDENT") {
      const existingUsername = await prisma.studentProfile.findUnique({
        where: { username },
      });

      if (existingUsername) {
        throw new Error("Username already exists");
      }
    }

    // Create user (username is NOT part of User model)
    // Hash password for parent and student roles - use first name as password
    let hashedPassword: string | undefined;
    if (role === "PARENT" || role === "STUDENT") {
      hashedPassword = await bcrypt.hash(firstName, 12);
    }

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        ...(hashedPassword && { password: hashedPassword }),
        role,
        phone,
        isVerified: false,
      },
    });

    // Create role-specific profile with additional data
    if (role === "STUDENT") {
      // Create mother and father if provided
      let motherProfileId: string | undefined;
      let fatherProfileId: string | undefined;

      // Create mother if provided
      if (data.motherEmail && data.motherFirstName && data.motherLastName) {
        motherProfileId = await this.createOrGetParent({
          parentEmail: data.motherEmail,
          parentFirstName: data.motherFirstName,
          parentLastName: data.motherLastName,
          parentPhone: data.motherPhone,
          parentAddress: data.motherAddress,
          parentRelationship: "Mother",
          parentEmergencyContact: data.motherEmergencyContact,
        } as CreateUserDto, wardenId);
      }

      // Create father if provided
      if (data.fatherEmail && data.fatherFirstName && data.fatherLastName) {
        fatherProfileId = await this.createOrGetParent({
          parentEmail: data.fatherEmail,
          parentFirstName: data.fatherFirstName,
          parentLastName: data.fatherLastName,
          parentPhone: data.fatherPhone,
          parentAddress: data.fatherAddress,
          parentRelationship: "Father",
          parentEmergencyContact: data.fatherEmergencyContact,
        } as CreateUserDto, wardenId);
      }

      // Create student profile with both parent links
      await this.createStudentProfileWithBothParents(user.id, data, motherProfileId, fatherProfileId);
      console.log(`   ✅ Created Student: ${firstName} ${lastName} (password: ${firstName})`);
    } else if (role === "PARENT") {
      await this.createParentProfile(user.id, data);
      console.log(`   ✅ Created Parent: ${firstName} ${lastName} (password: ${firstName})`);
    } else {
      await this.createRoleProfile(user.id, role);
    }

    // Send welcome email
    const roleName = creator.role === "CHIEF_WARDEN" ? "Chief Warden" : "Warden";
    await EmailService.sendWelcomeEmail(
      email,
      firstName,
      role,
      `${creator.firstName} ${creator.lastName} (${roleName})`
    );

    return {
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    };
  }

  // Update student by warden or chief warden
  async updateStudentByWarden(
    studentUserId: string,
    data: {
      email?: string;
      firstName?: string;
      lastName?: string;
      phone?: string;
      username?: string;
      studentIdNumber?: string;
      roomNumber?: string;
      floorNumber?: string;
      building?: string;
      emergencyContact?: string;
      medicalInfo?: string;
      isAtHostel?: boolean;
      profilePicture?: string;
      mother?: {
        email: string;
        firstName: string;
        lastName: string;
        phone?: string;
        address?: string;
        emergencyContact?: string;
      };
      father?: {
        email: string;
        firstName: string;
        lastName: string;
        phone?: string;
        address?: string;
        emergencyContact?: string;
      };
    },
    wardenId: string
  ) {
    const user = await prisma.user.findUnique({
      where: { id: wardenId },
    });

    if (!user || (user.role !== "WARDEN" && user.role !== "CHIEF_WARDEN" && user.role !== "MATRON")) {
      throw new Error("Only wardens, chief wardens, and matrons can update students");
    }

    // Check if student exists
    const existingUser = await prisma.user.findUnique({
      where: { id: studentUserId },
      include: {
        studentProfile: {
          include: {
            motherProfile: {
              include: {
                user: true,
              },
            },
            fatherProfile: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!existingUser || existingUser.role !== "STUDENT") {
      throw new Error("Student not found");
    }

    // Check if username already exists (if being changed)
    if (data.username && data.username !== existingUser.studentProfile?.username) {
      const existingUsername = await prisma.studentProfile.findUnique({
        where: { username: data.username },
      });

      if (existingUsername) {
        throw new Error("Username already exists");
      }
    }

    // Update user basic info
    const updatedUser = await prisma.user.update({
      where: { id: studentUserId },
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
      },
    });

    // Update student profile
    if (existingUser.studentProfile) {
      await prisma.studentProfile.update({
        where: { userId: studentUserId },
        data: {
          studentId: data.studentIdNumber,
          username: data.username,
          roomNumber: data.roomNumber,
          floorNumber: data.floorNumber,
          building: data.building,
          emergencyContact: data.emergencyContact,
          medicalInfo: data.medicalInfo,
          isAtHostel: data.isAtHostel,
          ...(data.profilePicture && { profilePicture: data.profilePicture }),
        },
      });
    }

    // Handle mother update/create
    if (data.mother && data.mother.email && data.mother.firstName && data.mother.lastName) {
      const existingMother = existingUser.studentProfile?.motherProfile?.user;

      if (existingMother) {
        // Update existing mother
        await prisma.user.update({
          where: { id: existingMother.id },
          data: {
            email: data.mother.email,
            firstName: data.mother.firstName,
            lastName: data.mother.lastName,
            phone: data.mother.phone,
          },
        });

        // Update mother profile
        await prisma.parentProfile.update({
          where: { userId: existingMother.id },
          data: {
            address: data.mother.address,
            relationship: 'Mother',
            emergencyContact: data.mother.emergencyContact,
          },
        });
      } else {
        // Create new mother if doesn't exist
        const motherProfileId = await this.createOrGetParent(
          {
            parentEmail: data.mother.email,
            parentFirstName: data.mother.firstName,
            parentLastName: data.mother.lastName,
            parentPhone: data.mother.phone,
            parentAddress: data.mother.address,
            parentRelationship: 'Mother',
            parentEmergencyContact: data.mother.emergencyContact,
          } as CreateUserDto,
          wardenId
        );

        // Link student to mother
        await prisma.studentProfile.update({
          where: { userId: studentUserId },
          data: { motherProfileId: motherProfileId },
        });
      }
    }

    // Handle father update/create
    if (data.father && data.father.email && data.father.firstName && data.father.lastName) {
      const existingFather = existingUser.studentProfile?.fatherProfile?.user;

      if (existingFather) {
        // Update existing father
        await prisma.user.update({
          where: { id: existingFather.id },
          data: {
            email: data.father.email,
            firstName: data.father.firstName,
            lastName: data.father.lastName,
            phone: data.father.phone,
          },
        });

        // Update father profile
        await prisma.parentProfile.update({
          where: { userId: existingFather.id },
          data: {
            address: data.father.address,
            relationship: 'Father',
            emergencyContact: data.father.emergencyContact,
          },
        });
      } else {
        // Create new father if doesn't exist
        const fatherProfileId = await this.createOrGetParent(
          {
            parentEmail: data.father.email,
            parentFirstName: data.father.firstName,
            parentLastName: data.father.lastName,
            parentPhone: data.father.phone,
            parentAddress: data.father.address,
            parentRelationship: 'Father',
            parentEmergencyContact: data.father.emergencyContact,
          } as CreateUserDto,
          wardenId
        );

        // Link student to father
        await prisma.studentProfile.update({
          where: { userId: studentUserId },
          data: { fatherProfileId: fatherProfileId },
        });
      }
    }

    return {
      message: "Student updated successfully",
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        role: updatedUser.role,
      },
    };
  }

  // Delete student by warden or chief warden
  async deleteStudentByWarden(studentUserId: string, wardenId: string) {
    const user = await prisma.user.findUnique({
      where: { id: wardenId },
    });

    if (!user || (user.role !== "WARDEN" && user.role !== "CHIEF_WARDEN" && user.role !== "MATRON")) {
      throw new Error("Only wardens, chief wardens, and matrons can delete students");
    }

    // Check if student exists and get parent info
    const existingUser = await prisma.user.findUnique({
      where: { id: studentUserId },
      include: {
        studentProfile: {
          include: {
            motherProfile: {
              include: {
                user: true,
              },
            },
            fatherProfile: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    if (!existingUser || existingUser.role !== "STUDENT") {
      throw new Error("Student not found");
    }

    // Store parent IDs before deleting student
    const motherProfileId = existingUser.studentProfile?.motherProfileId;
    const fatherProfileId = existingUser.studentProfile?.fatherProfileId;

    // Delete profile picture if it exists
    if (existingUser.studentProfile?.profilePicture) {
      const { deleteOldProfilePicture } = await import("../config/multer");
      deleteOldProfilePicture(existingUser.studentProfile.profilePicture);
    }

    // Delete user (cascade will delete student profile and related data)
    await prisma.user.delete({
      where: { id: studentUserId },
    });

    console.log(`✅ Student deleted: ${existingUser.firstName} ${existingUser.lastName}`);

    // Check and delete orphaned mother
    if (motherProfileId) {
      const motherProfile = await prisma.parentProfile.findUnique({
        where: { id: motherProfileId },
        include: {
          childrenAsMother: true,
          childrenAsFather: true,
        },
      });

      // If mother has no other children, delete her account
      if (motherProfile &&
          motherProfile.childrenAsMother.length === 0 &&
          motherProfile.childrenAsFather.length === 0) {
        const motherUser = await prisma.user.findUnique({
          where: { id: motherProfile.userId },
        });

        await prisma.user.delete({
          where: { id: motherProfile.userId },
        });

        console.log(`✅ Orphaned mother deleted: ${motherUser?.firstName} ${motherUser?.lastName}`);
      }
    }

    // Check and delete orphaned father
    if (fatherProfileId) {
      const fatherProfile = await prisma.parentProfile.findUnique({
        where: { id: fatherProfileId },
        include: {
          childrenAsMother: true,
          childrenAsFather: true,
        },
      });

      // If father has no other children, delete his account
      if (fatherProfile &&
          fatherProfile.childrenAsMother.length === 0 &&
          fatherProfile.childrenAsFather.length === 0) {
        const fatherUser = await prisma.user.findUnique({
          where: { id: fatherProfile.userId },
        });

        await prisma.user.delete({
          where: { id: fatherProfile.userId },
        });

        console.log(`✅ Orphaned father deleted: ${fatherUser?.firstName} ${fatherUser?.lastName}`);
      }
    }
  }

  // Change student password by warden or chief warden
  async changeStudentPasswordByWarden(
    studentUserId: string,
    newPassword: string,
    wardenId: string
  ) {
    const warden = await prisma.user.findUnique({
      where: { id: wardenId },
    });

    if (!warden || (warden.role !== "WARDEN" && warden.role !== "CHIEF_WARDEN" && warden.role !== "MATRON")) {
      throw new Error("Only wardens, chief wardens, and matrons can change student passwords");
    }

    // Check if student exists
    const student = await prisma.user.findUnique({
      where: { id: studentUserId },
    });

    if (!student || student.role !== "STUDENT") {
      throw new Error("Student not found");
    }

    // Validate password
    if (!newPassword || newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }
    // console.log(newPassword);

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    // console.log(hashedPassword);

    // Update password
    await prisma.user.update({
      where: { id: studentUserId },
      data: { password: hashedPassword },
    });

    console.log(`✅ Student password changed: ${student.firstName} ${student.lastName}`);

    return {
      message: "Student password changed successfully",
    };
  }

  // Change parent password by warden or chief warden
  async changeParentPasswordByWarden(
    parentUserId: string,
    newPassword: string,
    wardenId: string
  ) {
    const warden = await prisma.user.findUnique({
      where: { id: wardenId },
    });

    if (!warden || (warden.role !== "WARDEN" && warden.role !== "CHIEF_WARDEN" && warden.role !== "MATRON")) {
      throw new Error("Only wardens, chief wardens, and matrons can change parent passwords");
    }

    // Check if parent exists
    const parent = await prisma.user.findUnique({
      where: { id: parentUserId },
    });

    if (!parent || parent.role !== "PARENT") {
      throw new Error("Parent not found");
    }

    // Validate password
    if (!newPassword || newPassword.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    // Update password
    await prisma.user.update({
      where: { id: parentUserId },
      data: { password: hashedPassword },
    });

    console.log(`✅ Parent password changed: ${parent.firstName} ${parent.lastName}`);

    return {
      message: "Parent password changed successfully",
    };
  }

  private async createOrGetParent(data: CreateUserDto, wardenId: string): Promise<string> {
    // Check if parent already exists
    let parentUser = await prisma.user.findUnique({
      where: { email: data.parentEmail },
      include: { parentProfile: true },
    });

    if (parentUser) {
      console.log(`   ℹ️  Parent "${data.parentEmail}" already exists. Using existing parent.`);
      return parentUser.parentProfile!.id;
    }

    // Hash parent's first name as password
    const hashedPassword = await bcrypt.hash(data.parentFirstName!, 12);

    // Create new parent user
    parentUser = await prisma.user.create({
      data: {
        email: data.parentEmail!,
        firstName: data.parentFirstName!,
        lastName: data.parentLastName!,
        password: hashedPassword,
        role: UserRole.PARENT,
        phone: data.parentPhone,
        isVerified: false,
        parentProfile: {
          create: {
            address: data.parentAddress,
            relationship: data.parentRelationship,
            emergencyContact: data.parentEmergencyContact,
          },
        },
      },
      include: {
        parentProfile: true,
      },
    });

    console.log(`   ✅ Created Parent: ${data.parentFirstName} ${data.parentLastName} (password: ${data.parentFirstName})`);

    return parentUser.parentProfile!.id;
  }

  private async createStudentProfile(userId: string, data: CreateUserDto, parentProfileId?: string) {
    // Determine if parent is mother or father based on relationship
    const relationship = data.parentRelationship?.toLowerCase();
    const isMother = relationship === 'mother';
    const isFather = relationship === 'father';

    const profileData: any = {
      userId,
      studentId: data.studentId || `STU${Date.now()}`,
      username: data.username, // Add username to StudentProfile
      roomNumber: data.roomNumber,
      floorNumber: data.floorNumber,
      building: data.building,
      emergencyContact: data.emergencyContact,
      medicalInfo: data.medicalInfo,
      isAtHostel: true,
      checkInDate: new Date(),
      ...(data.profilePicture && { profilePicture: data.profilePicture }), // Add profile picture if provided
    };

    // Link to appropriate parent if provided
    if (parentProfileId) {
      if (isMother) {
        profileData.motherProfileId = parentProfileId;
      } else if (isFather) {
        profileData.fatherProfileId = parentProfileId;
      } else {
        // Default to mother if relationship not specified
        profileData.motherProfileId = parentProfileId;
      }
    }

    return await prisma.studentProfile.create({
      data: profileData,
    });
  }

  private async createStudentProfileWithBothParents(
    userId: string,
    data: CreateUserDto,
    motherProfileId?: string,
    fatherProfileId?: string
  ) {
    return await prisma.studentProfile.create({
      data: {
        userId,
        studentId: data.studentId || `STU${Date.now()}`,
        username: data.username,
        roomNumber: data.roomNumber,
        floorNumber: data.floorNumber,
        building: data.building,
        emergencyContact: data.emergencyContact,
        medicalInfo: data.medicalInfo,
        isAtHostel: true,
        checkInDate: new Date(),
        ...(data.profilePicture && { profilePicture: data.profilePicture }),
        ...(motherProfileId && { motherProfileId }),
        ...(fatherProfileId && { fatherProfileId }),
      },
    });
  }

  private async createParentProfile(userId: string, data: CreateUserDto) {
    return await prisma.parentProfile.create({
      data: {
        userId,
        address: data.parentAddress,
        emergencyContact: data.parentEmergencyContact,
        relationship: data.parentRelationship,
      },
    });
  }

  private async createParentForStudent(
    studentUserId: string,
    data: CreateUserDto,
    wardenId: string
  ) {
    if (!data.parentEmail || !data.parentFirstName || !data.parentLastName) {
      return;
    }

    // Check if parent already exists
    let parentUser = await prisma.user.findUnique({
      where: { email: data.parentEmail },
    });

    if (!parentUser) {
      // Hash parent's first name as password
      const hashedPassword = await bcrypt.hash(data.parentFirstName, 12);

      // Create parent user
      parentUser = await prisma.user.create({
        data: {
          email: data.parentEmail,
          firstName: data.parentFirstName,
          lastName: data.parentLastName,
          password: hashedPassword,
          role: UserRole.PARENT,
          phone: data.parentPhone,
          isVerified: false,
        },
      });

      // Create parent profile
      await this.createParentProfile(parentUser.id, data);

      // Send welcome email to parent
      const warden = await prisma.user.findUnique({ where: { id: wardenId } });
      await EmailService.sendWelcomeEmail(
        data.parentEmail,
        data.parentFirstName,
        "PARENT",
        `${warden?.firstName} ${warden?.lastName} (Warden)`
      );
    }

    // Link student to parent
    const parentProfile = await prisma.parentProfile.findUnique({
      where: { userId: parentUser.id },
    });

    if (parentProfile) {
      const relationship = data.parentRelationship?.toLowerCase();
      const updateData: any = {};

      if (relationship === 'mother') {
        updateData.motherProfileId = parentProfile.id;
      } else if (relationship === 'father') {
        updateData.fatherProfileId = parentProfile.id;
      } else {
        // Default to mother if not specified
        updateData.motherProfileId = parentProfile.id;
      }

      await prisma.studentProfile.update({
        where: { userId: studentUserId },
        data: updateData,
      });
    }
  }

  private async createRoleProfile(userId: string, role: UserRole) {
    switch (role) {
      case UserRole.STUDENT:
        return await prisma.studentProfile.create({
          data: {
            userId,
            studentId: `STU${Date.now()}`,
            checkInDate: new Date(),
          },
        });
      case UserRole.PARENT:
        return await prisma.parentProfile.create({
          data: { userId },
        });
      case UserRole.WARDEN:
        return await prisma.wardenProfile.create({
          data: { userId },
        });
      case UserRole.CHIEF_WARDEN:
        return await prisma.chiefWardenProfile.create({
          data: { userId },
        });
      default:
        throw new Error("Invalid role");
    }
  }

  async getUserById(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        studentProfile: {
          include: {
            motherProfile: {
              include: {
                user: {
                  select: {
                    id: true,
                    email: true,
                    phone: true,
                    firstName: true,
                    lastName: true,
                  },
                },
              },
            },
            fatherProfile: {
              include: {
                user: {
                  select: {
                    id: true,
                    email: true,
                    phone: true,
                    firstName: true,
                    lastName: true,
                  },
                },
              },
            },
          },
        },
        parentProfile: {
          include: {
            childrenAsMother: {
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
            },
            childrenAsFather: {
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
            },
          },
        },
        wardenProfile: true,
        chiefWardenProfile: true,
        matronProfile: true,
      },
    });
  }

  async getUserByParentProfileId(parentProfileId: string) {
    return await prisma.user.findFirst({
      where: {
        parentProfile: {
          id: parentProfileId,
        },
      },
      include: {
        studentProfile: true,
        parentProfile: true,
        wardenProfile: true,
        chiefWardenProfile: true,
        matronProfile: true,
      },
    });
  }

  async updateUser(userId: string, data: any) {
    return await prisma.user.update({
      where: { id: userId },
      data,
    });
  }

  async getWardenProfile(userId: string) {
    return await prisma.wardenProfile.findUnique({
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
  }

  static async linkStudentToParent(studentEmail: string, parentEmail: string) {
    const student = await prisma.user.findUnique({
      where: { email: studentEmail },
      include: { studentProfile: true },
    });

    const parent = await prisma.user.findUnique({
      where: { email: parentEmail },
      include: { parentProfile: true },
    });

    if (!student || student.role !== "STUDENT") {
      throw new Error("Student not found");
    }

    if (!parent || parent.role !== "PARENT") {
      throw new Error("Parent not found");
    }

    if (!student.studentProfile || !parent.parentProfile) {
      throw new Error("Profile not found");
    }

    // Determine if parent is mother or father based on relationship field
    const isMother = parent.parentProfile.relationship?.toLowerCase() === "mother";

    await prisma.studentProfile.update({
      where: { id: student.studentProfile.id },
      data: isMother
        ? { motherProfileId: parent.parentProfile.id }
        : { fatherProfileId: parent.parentProfile.id },
    });

    return {
      message: "Student linked to parent successfully",
    };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    // Get user with current password
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        password: true,
        role: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.password) {
      throw new Error("Password not set. Please contact administrator.");
    }

    // Verify current password
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      throw new Error("Current password is incorrect");
    }

    // Hash new password
    const saltRounds = 12;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Update password in database
    await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedNewPassword,
      },
    });

    // Log password change for security monitoring
    console.log(`🔒 Password changed successfully for user: ${user.email}`);

    return {
      message: "Password changed successfully",
    };
  }

  async login(data: LoginDto) {
    const { email, username, phone, password, role } = data;
    console.log(data);

    let user;

    // For students, find by username in studentProfile
    if (role === "STUDENT" && username) {
      const studentProfile = await prisma.studentProfile.findUnique({
        where: { username },
        include: {
          user: {
            include: {
              studentProfile: true,
              parentProfile: true,
              wardenProfile: true,
              chiefWardenProfile: true,
              matronProfile: true,
            },
          },
        },
      });

      if (!studentProfile || studentProfile.user.role !== "STUDENT") {
        throw new Error("Invalid username or password");
      }

      user = studentProfile.user;
    } else if ((role === "WARDEN" || role === "CHIEF_WARDEN" || role === "PARENT" || role === "MATRON") && phone) {
      // For WARDEN, CHIEF_WARDEN, PARENT, MATRON - find by phone
      user = await prisma.user.findFirst({
        where: {
          phone,
          role
        },
        include: {
          studentProfile: true,
          parentProfile: true,
          wardenProfile: true,
          chiefWardenProfile: true,
          matronProfile: true,
        },
      });

      if (!user || user.role !== role) {
        throw new Error("Invalid phone number or password");
      }
    } else {
      // For other cases, find by email
      if (!email) {
        throw new Error("Email is required for this role");
      }

      user = await prisma.user.findUnique({
        where: { email },
        include: {
          studentProfile: true,
          parentProfile: true,
          wardenProfile: true,
          chiefWardenProfile: true,
          matronProfile: true,
        },
      });

      if (!user || user.role !== role) {
        throw new Error("Invalid email or password");
      }
    }

    // Verify password
    if (!user.password) {
      throw new Error("Password not set. Please contact administrator.");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Log successful login
    console.log(`✅ Successful login for ${role}: ${email || username || phone}`);

    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      AuthService.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Remove sensitive data
    const { password: _, otp: __, otpExpiresAt: ___, ...userWithoutSensitive } = user;

    return {
      token,
      user: userWithoutSensitive,
    };
  }
}
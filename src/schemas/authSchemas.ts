import { z } from "zod";

// User role enum
export const UserRoleSchema = z.enum([
  "STUDENT",
  "PARENT",
  "WARDEN",
  "CHIEF_WARDEN",
  "MATRON",
]);

// Register schema
export const RegisterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  role: UserRoleSchema,
  phone: z
    .string()
    .optional()
    .refine(
      (phone) => !phone || /^[\+]?[1-9][\d]{0,15}$/.test(phone),
      "Please enter a valid phone number"
    ),
});

// Login schema for email-based roles
export const LoginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  role: UserRoleSchema,
});

// Phone-based login schema for WARDEN, CHIEF_WARDEN, PARENT, MATRON
export const PhoneLoginSchema = z.object({
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["WARDEN", "CHIEF_WARDEN", "PARENT", "MATRON"]),
});

// Student login schema (username-based)
export const StudentLoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  role: z.literal("STUDENT"),
});

export const SendOTPSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(254, "Email address too long")
    .toLowerCase()
    .trim(),
});

export const VerifyOTPSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .max(254, "Email address too long")
    .toLowerCase()
    .trim(),
  otp: z
    .string()
    .min(1, "OTP is required")
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d{6}$/, "OTP must contain only digits"),
});

// Change password schema
export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z
    .string()
    .min(6, "New password must be at least 6 characters long")
    .max(128, "Password too long"),
  confirmPassword: z.string().min(1, "Please confirm your new password"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "New password and confirm password don't match",
  path: ["confirmPassword"],
});

// Export types
export type RegisterData = z.infer<typeof RegisterSchema>;
export type LoginData = z.infer<typeof LoginSchema>;
export type PhoneLoginData = z.infer<typeof PhoneLoginSchema>;
export type StudentLoginData = z.infer<typeof StudentLoginSchema>;
export type ChangePasswordData = z.infer<typeof ChangePasswordSchema>;
export type UserRole = z.infer<typeof UserRoleSchema>;

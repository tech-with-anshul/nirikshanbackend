import express from "express";
import rateLimit from "express-rate-limit";
import { AuthController } from "../controllers/authController";
import { SendOTPSchema, VerifyOTPSchema, LoginSchema, StudentLoginSchema, PhoneLoginSchema, ChangePasswordSchema } from "../schemas/authSchemas";
import { validateBody } from "../middleware/validation";
import { authenticateToken } from "../middleware/auth";

const router = express.Router();

// OTP-specific rate limiting - Backend enforcement
const otpSendLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 OTP requests per 15 minutes (20 per hour)
  message: {
    success: false,
    message:
      "Too many OTP requests from this IP. Please try again after 15 minutes.",
    retryAfter: 15 * 60, // 15 minutes in seconds
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const otpVerifyLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 verification attempts per 15 minutes (20 per hour)
  message: {
    success: false,
    message:
      "Too many verification attempts from this IP. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Login rate limiter
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // 10 login attempts per 15 minutes
  message: {
    success: false,
    message: "Too many login attempts from this IP. Please try again after 15 minutes.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Unified login validation middleware
const validateLogin = (req: any, res: any, next: any) => {
  const { role } = req.body;

  if (role === "STUDENT") {
    return validateBody(StudentLoginSchema)(req, res, next);
  } else if (["WARDEN", "CHIEF_WARDEN", "PARENT", "MATRON"].includes(role)) {
    return validateBody(PhoneLoginSchema)(req, res, next);
  } else {
    return validateBody(LoginSchema)(req, res, next);
  }
};

// Authentication endpoints with rate limiting and validation
router.post(
  "/login",
  loginLimiter,
  validateLogin,
  AuthController.login
);

// OTP Authentication endpoints with rate limiting and validation
router.post(
  "/send-otp",
  otpSendLimiter,
  validateBody(SendOTPSchema),
  AuthController.sendOTP
);
router.post(
  "/verify-otp",
  otpVerifyLimiter,
  validateBody(VerifyOTPSchema),
  AuthController.verifyOTP
);

// Password change endpoint (requires authentication)
router.put(
  "/change-password",
  authenticateToken,
  validateBody(ChangePasswordSchema),
  AuthController.changePassword
);

export default router;

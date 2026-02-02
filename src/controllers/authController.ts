import { Request, Response } from "express";
import { AuthService } from "../services/authService";
const authService = new AuthService();

export class AuthController {
  // Login with credentials (email/username/phone + password)
  static async login(req: Request, res: Response) {
    try {
      const { email, username, phone, password, role } = req.body;

      const result = await authService.login({ email, username, phone, password, role });

      res.json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (error: any) {
      console.error("Login error:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Login failed",
      });
    }
  }

  // Send OTP to user's email
  static async sendOTP(req: Request, res: Response) {
    try {
      const { email } = req.body;

      // Validation is handled by middleware, so we can trust the data
      const result = await authService.sendOTP({ email });

      res.json({
        success: true,
        message: result.message,
        data: { email: result.email },
      });
    } catch (error: any) {
      console.error("Send OTP error:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to send OTP",
      });
    }
  }

  static async verifyOTP(req: Request, res: Response) {
    try {
      const { email, otp } = req.body;

      // Validation is handled by middleware, so we can trust the data
      const result = await authService.verifyOTP({ email, otp });

      res.json({
        success: true,
        message: "OTP verified successfully",
        data: result,
      });
    } catch (error: any) {
      console.error("Verify OTP error:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to verify OTP",
      });
    }
  }

  // Change password for authenticated users
  static async changePassword(req: Request, res: Response) {
    try {
      const { currentPassword, newPassword } = req.body;
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "User not authenticated",
        });
      }

      await authService.changePassword(userId, currentPassword, newPassword);

      res.json({
        success: true,
        message: "Password changed successfully",
      });
    } catch (error: any) {
      console.error("Change password error:", error);
      res.status(400).json({
        success: false,
        message: error.message || "Failed to change password",
      });
    }
  }
}

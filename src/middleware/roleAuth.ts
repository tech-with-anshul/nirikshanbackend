import { UserRole } from "../schemas/authSchemas";
import { Request, Response, NextFunction } from "express";
export interface AuthenticatedRequest extends Request {
  user: {
    id: string;
    email: string;
    role: UserRole;
  };
}

export const requireRole = (allowedRoles: UserRole[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;

    if (!userRole) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: `Access denied. Required roles: ${allowedRoles.join(", ")}`,
      });
    }

    next();
  };
};

export const requireStudent = requireRole(["STUDENT"]);
export const requireParent = requireRole(["PARENT"]);
export const requireWarden = requireRole(["WARDEN"]);
export const requireChiefWarden = requireRole(["CHIEF_WARDEN"]);
export const requireMatron = requireRole(["MATRON"]);
export const requireWardenOrChief = requireRole(["WARDEN", "CHIEF_WARDEN"]);
export const requireAnyStaff = requireRole(["WARDEN", "CHIEF_WARDEN", "MATRON"]);

import { z } from "zod";

// Request enums
export const RequestTypeSchema = z.enum(["LATE", "GO_HOME"]);
export const RequestStatusSchema = z.enum(["PENDING", "APPROVED", "REJECTED"]);

// Location data schema
export const LocationDataSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  accuracy: z.number().nullable().optional(),
  address: z.string().optional(),
  timestamp: z.number(),
});

// Create request schema
export const CreateRequestSchema = z.object({
  type: RequestTypeSchema,
  reason: z
    .string()
    .min(1, "Reason is required")
    .max(500, "Reason must be less than 500 characters"),
  expectedBack: z.string().datetime().optional(),
  parentId: z.string().uuid().optional(),
  // Verification data
  verificationPhoto: z.string().nullable().optional(), // Base64 encoded image
  location: LocationDataSchema.optional(),
});

// Update request status schema
export const UpdateRequestStatusSchema = z.object({
  status: RequestStatusSchema.exclude(["PENDING"]), // Can only update to APPROVED or REJECTED
});

// Parent update request status schema (includes location)
export const ParentUpdateRequestStatusSchema = z.object({
  status: RequestStatusSchema.exclude(["PENDING"]), // Can only update to APPROVED or REJECTED
  location: LocationDataSchema.optional(), // Parent's location when approving
});

// Request ID param schema
export const RequestIdParamSchema = z.object({
  id: z.string().uuid("Invalid request ID"),
});

// Query schemas
export const StudentRequestQuerySchema = z.object({
  history: z
    .string()
    .optional()
    .transform((val) => val === "true"),
});

// Export types
export type CreateRequestData = z.infer<typeof CreateRequestSchema>;
export type UpdateRequestStatusData = z.infer<typeof UpdateRequestStatusSchema>;
export type RequestIdParam = z.infer<typeof RequestIdParamSchema>;
export type StudentRequestQuery = z.infer<typeof StudentRequestQuerySchema>;
export type RequestType = z.infer<typeof RequestTypeSchema>;
export type RequestStatus = z.infer<typeof RequestStatusSchema>;

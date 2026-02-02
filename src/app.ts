import express, { Request, Response, NextFunction } from "express";
import path from "path";
import { configureMiddleware } from "./config/middlewareConfig";
import { SERVER_CONFIG, APP_CONFIG, validateConfig } from "./config";

// Import routes
import authRoutes from "./routes/authRoutes";
import parentRoutes from "./routes/parentRoutes";
import studentRoutes from "./routes/studentRoutes";
import wardenRoutes from "./routes/wardenRoutes";
import chiefWardenRoutes from "./routes/chiefWardenRoutes";
import matronRoutes from "./routes/matronRoutes";
import buildingRoutes from "./routes/buildingRoutes";
import messageRoutes from "./routes/messageRoutes";

// Validate configuration before starting
validateConfig();

// Create Express application
const app = express();

// Configure middleware
configureMiddleware(app);

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Health check endpoint
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: `${APP_CONFIG.name} is running`,
    version: APP_CONFIG.version,
    environment: SERVER_CONFIG.nodeEnv,
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/parent", parentRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/warden", wardenRoutes);
app.use("/api/chiefWarden", chiefWardenRoutes);
app.use("/api/matron", matronRoutes);
app.use("/api/buildings", buildingRoutes);
app.use("/api/messages", messageRoutes);

// 404 handler
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found",
    path: req.originalUrl,
  });
});

// Global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", error);

  if (error.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      errors: error.errors,
    });
  }

  if (error.name === "UnauthorizedError") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
    ...(SERVER_CONFIG.isDevelopment && { error: error.message }),
  });
});

export default app;

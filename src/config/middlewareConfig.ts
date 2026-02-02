import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import "express-async-errors";

import { CORS_CONFIG, RATE_LIMIT_CONFIG, LOGGING_CONFIG } from "./index";

export function configureMiddleware(app: Application): void {
  // Security middleware with relaxed content security policy for images
  app.use(
    helmet({
      crossOriginResourcePolicy: { policy: "cross-origin" },
    })
  );
  app.use(cors(CORS_CONFIG));

  // Rate limiting
  const limiter = rateLimit({
    windowMs: RATE_LIMIT_CONFIG.windowMs,
    max: RATE_LIMIT_CONFIG.maxRequests,
    message: RATE_LIMIT_CONFIG.message,
    standardHeaders: RATE_LIMIT_CONFIG.standardHeaders,
    legacyHeaders: RATE_LIMIT_CONFIG.legacyHeaders,
  });
  app.use("/api/", limiter);

  // Body parsing middleware
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true }));

  // Compression middleware
  app.use(compression());

  // Logging middleware
  app.use(morgan(LOGGING_CONFIG.format));
}

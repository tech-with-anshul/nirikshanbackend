import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// JWT Configuration
export const JWT_CONFIG = {
  secret:
    process.env.JWT_SECRET ||
    "your-super-secret-jwt-key-change-this-in-production",
  expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  issuer: process.env.JWT_ISSUER || "nirikshan-dorm-manager",
  audience: process.env.JWT_AUDIENCE || "nirikshan-users",
} as const;

// Server Configuration
export const SERVER_CONFIG = {
  port: parseInt(process.env.PORT || "3000"),
  nodeEnv: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
} as const;

// Database Configuration
export const DATABASE_CONFIG = {
  url:
    process.env.DATABASE_URL ||
    "postgresql://username:password@localhost:5432/nirikshan_db",
} as const;

// CORS Configuration
export const CORS_CONFIG = {
  origin: process.env.FRONTEND_URL === "*" ? "*" : (process.env.FRONTEND_URL || "http://localhost:3000"),
  credentials: process.env.FRONTEND_URL === "*" ? false : true,
  optionsSuccessStatus: 200, // For legacy browser support
} as const;

// Email Configuration (SMTP)
export const EMAIL_CONFIG = {
  from: process.env.EMAIL_FROM || "noreply@nirikshan.com",
  smtpHost: process.env.SMTP_HOST || "smtp.gmail.com",
  smtpPort: parseInt(process.env.SMTP_PORT || "587"),
  smtpUser: process.env.SMTP_USER,
  smtpPassword: process.env.SMTP_PASS,
  enableSsl: process.env.SMTP_SSL === "true",
  retryAttempts: 3,
  retryDelay: 5000, // 5 seconds
  templates: {
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:3000",
  },
  otp: {
    expirationMinutes: parseInt(process.env.OTP_EXPIRATION_MINUTES || "10"),
    length: parseInt(process.env.OTP_LENGTH || "6"),
    devOtp: process.env.DEV_OTP || "123456", // Fixed OTP for development
  },
} as const;

// Rate Limiting Configuration
export const RATE_LIMIT_CONFIG = {
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes
  maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "500"),
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
} as const;

// Security Configuration
export const SECURITY_CONFIG = {
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS || "12"),
  sessionTimeout: parseInt(process.env.SESSION_TIMEOUT || "86400000"), // 24 hours in ms
  maxLoginAttempts: parseInt(process.env.MAX_LOGIN_ATTEMPTS || "5"),
  lockoutTime: parseInt(process.env.LOCKOUT_TIME || "900000"), // 15 minutes in ms
} as const;

// Application Configuration
export const APP_CONFIG = {
  name: "Nirikshan Dormitory Management System",
  version: process.env.APP_VERSION || "1.0.0",
  description: "A comprehensive dormitory management system",
  maintainer: process.env.APP_MAINTAINER || "Nirikshan Team",
} as const;

// Logging Configuration
export const LOGGING_CONFIG = {
  level: process.env.LOG_LEVEL || "info",
  format: process.env.LOG_FORMAT || "combined", // morgan format
  enableConsole: process.env.ENABLE_CONSOLE_LOGS !== "false",
  enableFile: process.env.ENABLE_FILE_LOGS === "true",
  filePath: process.env.LOG_FILE_PATH || "./logs/app.log",
} as const;

// File Upload Configuration
export const UPLOAD_CONFIG = {
  maxFileSize: parseInt(process.env.MAX_FILE_SIZE || "10485760"), // 10MB
  allowedMimeTypes: process.env.ALLOWED_MIME_TYPES?.split(",") || [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "text/plain",
  ],
  uploadPath: process.env.UPLOAD_PATH || "./uploads",
} as const;

// Late Request Cutoff Configuration
export const LATE_REQUEST_CONFIG = {
  cutoffHour: parseInt(process.env.LATE_REQUEST_CUTOFF_HOUR || "22"), // 22 = 10pm
} as const;

// Validation function to check if all required environment variables are set
export function validateConfig(): void {
  const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET"];

  const missing = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missing.length > 0) {
    console.error("❌ Missing required environment variables:", missing);
    console.error(
      "💡 Please check your .env file and ensure all required variables are set."
    );
    process.exit(1);
  }

  // Warn about development settings in production
  if (SERVER_CONFIG.isProduction) {
    if (
      JWT_CONFIG.secret ===
      "your-super-secret-jwt-key-change-this-in-production"
    ) {
      console.warn("⚠️  WARNING: Using default JWT secret in production!");
    }
  }

  console.log("✅ Configuration validated successfully");
  console.log(`🌍 Environment: ${SERVER_CONFIG.nodeEnv}`);
  console.log(`🚀 Server will run on port: ${SERVER_CONFIG.port}`);
}

// Export all configs as a single object for convenience
export const CONFIG = {
  JWT: JWT_CONFIG,
  SERVER: SERVER_CONFIG,
  DATABASE: DATABASE_CONFIG,
  CORS: CORS_CONFIG,
  EMAIL: EMAIL_CONFIG,
  RATE_LIMIT: RATE_LIMIT_CONFIG,
  SECURITY: SECURITY_CONFIG,
  APP: APP_CONFIG,
  LOGGING: LOGGING_CONFIG,
  UPLOAD: UPLOAD_CONFIG,
  LATE_REQUEST: LATE_REQUEST_CONFIG,
} as const;

export default CONFIG;

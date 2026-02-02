# Nirikshan Configuration Guide

## Overview

The Nirikshan Dormitory Management System now uses a centralized configuration system that organizes all environment variables into logical groups and provides better type safety and validation.

## Key Improvements

### 1. Centralized Configuration System (`src/config/index.ts`)

All configuration is now managed through a single configuration file that:

- Imports and validates all environment variables
- Organizes settings into logical groups (JWT, Email, Database, etc.)
- Provides TypeScript type safety
- Includes configuration validation on startup
- Offers detailed documentation for each setting

### 2. OTP-Based Authentication

The system has been upgraded from password-based to OTP-based authentication:

- **Development**: Fixed OTP `123456` for easy testing
- **Production**: Random 6-digit OTPs sent via email
- **Configurable**: OTP length and expiration time can be adjusted
- **Secure**: No passwords stored in database

### 3. Optimized Form State Management

The user creation form (`client/app/(dashboard)/warden/create-user.tsx`) now uses:

- Single `formData` object instead of multiple `useState` hooks
- Type-safe form interface
- Cleaner state management
- Better performance and maintainability

### 4. Updated Database Seeding

The seed script has been completely updated for OTP authentication:

- Removes bcrypt password hashing
- Creates users with `isVerified: true` for demo purposes
- Includes comprehensive sample data
- Provides clear login instructions

## Configuration Categories

### JWT Configuration

```typescript
export const JWT_CONFIG = {
  secret: string, // JWT signing secret
  expiresIn: string, // Token expiration (e.g., "7d")
  issuer: string, // Token issuer
  audience: string, // Token audience
};
```

### Server Configuration

```typescript
export const SERVER_CONFIG = {
  port: number, // Server port
  nodeEnv: string, // Environment (development/production)
  isProduction: boolean, // Computed production flag
  isDevelopment: boolean, // Computed development flag
};
```

### Email Configuration

```typescript
export const EMAIL_CONFIG = {
  smtp: {
    host: string, // SMTP server host
    port: number, // SMTP server port
    secure: boolean, // Use TLS/SSL
    auth: {
      user: string, // SMTP username
      pass: string, // SMTP password
    },
  },
  from: string, // From email address
  templates: {
    frontendUrl: string, // Frontend URL for email links
  },
  otp: {
    expirationMinutes: number, // OTP validity period
    length: number, // OTP length (digits)
    devOtp: string, // Fixed OTP for development
  },
};
```

### Database Configuration

```typescript
export const DATABASE_CONFIG = {
  url: string, // PostgreSQL connection string
};
```

## Environment Variables

### Required Variables

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/nirikshan_db"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
```

### Optional Variables (with defaults)

```bash
# Server
PORT=3000
NODE_ENV="development"

# JWT
JWT_EXPIRES_IN="7d"
JWT_ISSUER="nirikshan-dorm-manager"
JWT_AUDIENCE="nirikshan-users"

# Frontend
FRONTEND_URL="http://localhost:3000"

# Email
SMTP_HOST="smtp.ethereal.email"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="ethereal.user@ethereal.email"
SMTP_PASS="ethereal.pass"
FROM_EMAIL="noreply@nirikshan.com"

# OTP
OTP_EXPIRATION_MINUTES=10
OTP_LENGTH=6
DEV_OTP="123456"

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Usage Examples

### Importing Configuration

```typescript
// Import specific configs
import { JWT_CONFIG, EMAIL_CONFIG } from "../config";

// Import all configs
import { CONFIG } from "../config";

// Use in your code
const secret = JWT_CONFIG.secret;
const isDev = SERVER_CONFIG.isDevelopment;
```

### Configuration Validation

The system automatically validates configuration on startup:

```typescript
import { validateConfig } from "../config";

// Call during application startup
validateConfig();
```

## OTP Authentication Flow

### 1. Send OTP Request

```bash
POST /api/auth/send-otp
Content-Type: application/json

{
  "email": "student@nirikshan.com"
}
```

### 2. Verify OTP and Login

```bash
POST /api/auth/verify-otp
Content-Type: application/json

{
  "email": "student@nirikshan.com",
  "otp": "123456"
}
```

### 3. Use JWT Token

The verify endpoint returns a JWT token that should be included in subsequent requests:

```bash
Authorization: Bearer <jwt-token>
```

## Development Setup

### 1. Environment Configuration

```bash
# Copy example environment file
cp env.example .env

# Edit with your settings
nano .env
```

### 2. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed
```

### 3. Start Development Server

```bash
npm run dev
```

## Production Deployment

### 1. Environment Variables

Ensure all required environment variables are set:

```bash
NODE_ENV="production"
JWT_SECRET="your-production-jwt-secret-32-characters-or-more"
DATABASE_URL="postgresql://prod_user:prod_pass@prod_host:5432/nirikshan_prod"
FRONTEND_URL="https://your-domain.com"

# Email configuration
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT=587
SMTP_USER="apikey"
SMTP_PASS="your-sendgrid-api-key"
FROM_EMAIL="noreply@your-domain.com"
```

### 2. Security Considerations

- Use a strong, random JWT secret (minimum 32 characters)
- Configure proper email service (not Ethereal)
- Set appropriate rate limiting values
- Enable file logging in production
- Use HTTPS in production

## Form State Management

### Old Approach (Multiple useState)

```typescript
const [email, setEmail] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
// ... many more useState hooks
```

### New Approach (Single formData Object)

```typescript
interface FormData {
  userType: UserType;
  email: string;
  firstName: string;
  lastName: string;
  // ... all form fields
}

const [formData, setFormData] = useState<FormData>(initialFormData);

const updateFormData = (field: keyof FormData, value: string | boolean) => {
  setFormData((prev) => ({ ...prev, [field]: value }));
};
```

## Demo Accounts

After running the seed script, you can login with these accounts using OTP `123456`:

### Users

- **Chief Warden**: `chief.warden@nirikshan.com`
- **Warden**: `warden@nirikshan.com`
- **Parent 1**: `parent@example.com`
- **Parent 2**: `parent2@example.com`
- **Student 1**: `student@nirikshan.com` (linked to Parent 1)
- **Student 2**: `student2@nirikshan.com` (linked to Parent 2)
- **Student 3**: `student3@nirikshan.com` (no parent link)

### Sample Data Included

- 5 rooms across 3 buildings
- Users with proper role-based profiles
- Parent-child relationships
- Sample requests (pending, approved, rejected)
- Inter-user messages

## Migration from Old System

### Code Changes Required

1. Replace `process.env.X` with imports from `../config`
2. Update any password-related code to use OTP
3. Update form components to use centralized state management
4. Run new seed script to populate database

### Database Changes

- Users no longer have password fields
- Users have OTP-related fields (`otp`, `otpExpiresAt`, `isVerified`)
- All demo users are pre-verified

## Troubleshooting

### Configuration Issues

- Run `validateConfig()` to check for missing required variables
- Check console output for configuration warnings
- Ensure `.env` file exists and is properly formatted

### OTP Issues

- In development, always use OTP `123456`
- Check email configuration for production
- Verify OTP expiration time settings

### Form Issues

- Ensure proper TypeScript interfaces are defined
- Check that `updateFormData` function is used consistently
- Verify form validation logic

## Support

For issues or questions:

1. Check configuration validation output
2. Review environment variable settings
3. Verify database connection and seeding
4. Check application logs for detailed error messages

## Future Enhancements

- Configuration management UI
- Environment-specific config files
- Advanced OTP features (SMS, custom templates)
- Configuration hot-reloading
- Enhanced form validation

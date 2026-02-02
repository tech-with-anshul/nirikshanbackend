import nodemailer from "nodemailer";
import { EMAIL_CONFIG, SERVER_CONFIG } from "../config";
import { EmailType, EmailStatus } from "../../generated/prisma";
import { prisma } from "../config/database";

interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

interface SendEmailOptions {
  to: string;
  type: EmailType;
  templateData?: Record<string, any>;
  relatedMessageId?: string;
  relatedRequestId?: string;
  relatedUserId?: string;
}

export class EmailService {
  // Remove printSmtpConfig and any logging of SMTP credentials
  private static transporter = (() => {
    return nodemailer.createTransport({
      host: EMAIL_CONFIG.smtpHost,
      port: EMAIL_CONFIG.smtpPort,
      secure: EMAIL_CONFIG.enableSsl,
      auth: {
        user: EMAIL_CONFIG.smtpUser,
        pass: EMAIL_CONFIG.smtpPassword,
      },
    });
  })();

  // Email templates
  private static templates: Record<EmailType, (data: any) => EmailTemplate> = {
    MESSAGE_NOTIFICATION: (data) => ({
      subject: `New Message: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Message Received</h2>
          <p>Hello ${data.receiverName},</p>
          <p>You have received a new message from <strong>${data.senderName}</strong>:</p>
          
          <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #7c3aed; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0;">${data.subject}</h3>
            <p style="margin: 0;">${data.content}</p>
          </div>
          
          <p>Please log into the Nirikshan app to reply.</p>
          <p>Best regards,<br>Nirikshan Team</p>
        </div>
      `,
      text: `New Message from ${data.senderName}: ${data.subject}\n\n${data.content}\n\nPlease log into the Nirikshan app to reply.`,
    }),

    REQUEST_STATUS_UPDATE: (data) => ({
      subject: `Request ${data.status}: ${data.requestType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Request Status Update</h2>
          <p>Hello ${data.userName},</p>
          <p>Your ${
            data.requestType
          } request has been <strong>${data.status.toLowerCase()}</strong>.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #7c3aed; margin: 20px 0;">
            <p><strong>Request Type:</strong> ${data.requestType}</p>
            <p><strong>Status:</strong> ${data.status}</p>
            <p><strong>Reason:</strong> ${data.reason || "N/A"}</p>
            ${
              data.expectedBack
                ? `<p><strong>Expected Back:</strong> ${data.expectedBack}</p>`
                : ""
            }
          </div>
          
          <p>Please check the app for more details.</p>
          <p>Best regards,<br>Nirikshan Team</p>
        </div>
      `,
    }),

    WELCOME: (data) => ({
      subject: "Welcome to Nirikshan",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Welcome to Nirikshan</h2>
          <p>Hello ${data.firstName},</p>
          <p>Welcome to the Nirikshan Dormitory Management System!</p>
          <p>Your account has been created by ${data.createdBy}.</p>
          <p>You can now log in to the app using your email address.</p>
          <p>Best regards,<br>Nirikshan Team</p>
        </div>
      `,
    }),

    OTP_VERIFICATION: (data) => ({
      subject: "Your Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">Verification Code</h2>
          <p>Hello ${data.firstName},</p>
          <p>Your verification code is:</p>
          <div style="background: #f8fafc; padding: 20px; text-align: center; margin: 20px 0;">
            <h1 style="color: #7c3aed; margin: 0; font-size: 32px; letter-spacing: 4px;">${data.otp}</h1>
          </div>
          <p>This code will expire in 10 minutes.</p>
          <p>Best regards,<br>Nirikshan Team</p>
        </div>
      `,
    }),

    SYSTEM_ALERT: (data) => ({
      subject: `System Alert: ${data.alertType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">System Alert</h2>
          <p>Hello ${data.recipientName},</p>
          <p>${data.message}</p>
          <p>Best regards,<br>Nirikshan Team</p>
        </div>
      `,
    }),
  };

  // Send email with database tracking
  static async sendEmail(options: SendEmailOptions): Promise<boolean> {
    try {
      // Get template
      const template = this.templates[options.type](options.templateData || {});

      // Create email notification record
      const emailNotification = await prisma.emailNotification.create({
        data: {
          to: options.to,
          subject: template.subject,
          content: template.html,
          type: options.type,
          status: EmailStatus.PENDING,
          relatedMessageId: options.relatedMessageId,
          relatedRequestId: options.relatedRequestId,
          relatedUserId: options.relatedUserId,
        },
      });

      // Send email
      await this.transporter.sendMail({
        from: EMAIL_CONFIG.from,
        to: options.to,
        subject: template.subject,
        html: template.html,
        text: template.text,
      });

      // Update status to sent
      await prisma.emailNotification.update({
        where: { id: emailNotification.id },
        data: {
          status: EmailStatus.SENT,
          sentAt: new Date(),
        },
      });

      console.log(`✅ Email sent successfully to ${options.to}`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to send email to ${options.to}:`, error);
      return false;
    }
  }

  // Retry failed emails
  static async retryFailedEmails(): Promise<void> {
    try {
      const failedEmails = await prisma.emailNotification.findMany({
        where: {
          status: EmailStatus.FAILED,
          retryCount: { lt: 3 }, // Less than max retries
        },
        orderBy: { createdAt: "asc" },
        take: 10, // Process 10 at a time
      });

      for (const email of failedEmails) {
        try {
          await this.transporter.sendMail({
            from: EMAIL_CONFIG.from,
            to: email.to,
            subject: email.subject,
            html: email.content,
          });

          await prisma.emailNotification.update({
            where: { id: email.id },
            data: {
              status: EmailStatus.SENT,
              sentAt: new Date(),
              retryCount: email.retryCount + 1,
            },
          });

          console.log(`✅ Retry successful for email ${email.id}`);
        } catch (retryError) {
          await prisma.emailNotification.update({
            where: { id: email.id },
            data: {
              status: EmailStatus.FAILED,
              retryCount: email.retryCount + 1,
              failureReason: (retryError as Error).message,
            },
          });

          console.error(`❌ Retry failed for email ${email.id}:`, retryError);
        }
      }
    } catch (error) {
      console.error("❌ Error in retry failed emails:", error);
    }
  }

  // Get email statistics
  static async getEmailStats(): Promise<{
    pending: number;
    sent: number;
    failed: number;
    retrying: number;
  }> {
    const [pending, sent, failed, retrying] = await Promise.all([
      prisma.emailNotification.count({
        where: { status: EmailStatus.PENDING },
      }),
      prisma.emailNotification.count({ where: { status: EmailStatus.SENT } }),
      prisma.emailNotification.count({ where: { status: EmailStatus.FAILED } }),
      prisma.emailNotification.count({
        where: { status: EmailStatus.RETRYING },
      }),
    ]);

    return { pending, sent, failed, retrying };
  }

  // Send message notification email
  static async sendMessageNotification(
    receiverEmail: string,
    receiverName: string,
    senderName: string,
    subject: string,
    content: string,
    messageId: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: receiverEmail,
      type: EmailType.MESSAGE_NOTIFICATION,
      templateData: {
        receiverName,
        senderName,
        subject,
        content,
      },
      relatedMessageId: messageId,
    });
  }

  // Send request status update email
  static async sendRequestStatusUpdate(
    userEmail: string,
    userName: string,
    requestType: string,
    status: string,
    reason?: string,
    expectedBack?: string,
    requestId?: string
  ): Promise<boolean> {
    return this.sendEmail({
      to: userEmail,
      type: EmailType.REQUEST_STATUS_UPDATE,
      templateData: {
        userName,
        requestType,
        status,
        reason,
        expectedBack,
      },
      relatedRequestId: requestId,
    });
  }

  static async sendOTP(
    email: string,
    otp: string,
    firstName: string
  ): Promise<boolean> {
    try {
      // For development, always return true and log the OTP
      if (SERVER_CONFIG.isDevelopment) {
        console.log(`🔐 OTP for ${email}: ${otp}`);
        console.log(`📧 Simulated email sent to ${firstName} (${email})`);
        return true;
      }

      const mailOptions = {
        from: EMAIL_CONFIG.from,
        to: email,
        subject: "Nirikshan - Your Login OTP",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
              <h1>Nirikshan Dormitory Management</h1>
            </div>
            <div style="padding: 30px; background-color: #f8fafc;">
              <h2>Hello ${firstName},</h2>
              <p>Your login OTP for Nirikshan Dormitory Management System is:</p>
              <div style="background-color: white; border: 2px solid #2563eb; border-radius: 8px; padding: 20px; text-align: center; margin: 20px 0;">
                <h1 style="color: #2563eb; font-size: 32px; margin: 0; letter-spacing: 8px;">${otp}</h1>
              </div>
              <p style="color: #64748b;">This OTP is valid for ${EMAIL_CONFIG.otp.expirationMinutes} minutes. Please do not share it with anyone.</p>
              <p style="color: #64748b;">If you didn't request this OTP, please ignore this email.</p>
            </div>
            <div style="background-color: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 12px;">
              <p>&copy; 2024 Nirikshan Dormitory Management System. All rights reserved.</p>
            </div>
          </div>
        `,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log(`📧 OTP email sent to ${email}:`, info.messageId);

      return true;
    } catch (error) {
      console.error("❌ Failed to send OTP email:", error);

      // In development, still return true even if email fails
      if (SERVER_CONFIG.isDevelopment) {
        console.log(`🔐 Development mode - OTP for ${email}: ${otp}`);
        return true;
      }

      return false;
    }
  }

  static async sendWelcomeEmail(
    email: string,
    firstName: string,
    role: string,
    createdBy: string
  ): Promise<boolean> {
    try {
      const mailOptions = {
        from: EMAIL_CONFIG.from,
        to: email,
        subject: "Welcome to Nirikshan Dormitory Management",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
              <h1>Welcome to Nirikshan</h1>
            </div>
            <div style="padding: 30px; background-color: #f8fafc;">
              <h2>Hello ${firstName},</h2>
              <p>Your account has been created by ${createdBy} in the Nirikshan Dormitory Management System.</p>
              <div style="background-color: white; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0;">
                <h3 style="color: #059669; margin-top: 0;">Account Details:</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Login Method:</strong> OTP-based authentication</p>
              </div>
              <p>To log in, simply enter your email address and we'll send you a secure OTP.</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${EMAIL_CONFIG.templates.frontendUrl}" 
                   style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                  Access Nirikshan Portal
                </a>
              </div>
            </div>
            <div style="background-color: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 12px;">
              <p>&copy; 2024 Nirikshan Dormitory Management System. All rights reserved.</p>
            </div>
          </div>
        `,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log(`📧 Welcome email sent to ${email}:`, info.messageId);

      return true;
    } catch (error) {
      console.error("❌ Failed to send welcome email:", error);
      return false;
    }
  }

  // Generate a 6-digit OTP
  static generateOTP(): string {
    // Use fixed OTP in development for easier testing
    if (SERVER_CONFIG.isDevelopment) {
      return EMAIL_CONFIG.otp.devOtp;
    }
    const otpLength = EMAIL_CONFIG.otp.length;
    const min = Math.pow(10, otpLength - 1);
    const max = Math.pow(10, otpLength) - 1;
    return Math.floor(min + Math.random() * (max - min + 1)).toString();
  }

  // Check if OTP is valid (not expired)
  static isOTPValid(otpExpiresAt: Date | null): boolean {
    if (!otpExpiresAt) return false;
    return new Date() < otpExpiresAt;
  }

  // Get OTP expiration time (configurable minutes from now)
  static getOTPExpiration(): Date {
    const expiration = new Date();
    expiration.setMinutes(
      expiration.getMinutes() + EMAIL_CONFIG.otp.expirationMinutes
    );
    return expiration;
  }
}

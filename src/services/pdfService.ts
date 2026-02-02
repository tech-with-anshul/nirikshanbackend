import PDFDocument from "pdfkit";
import { Request as PrismaRequest } from "../../generated/prisma";

interface RequestWithRelations extends PrismaRequest {
  student: {
    id: string;
    firstName: string;
    lastName: string;
    email: string | null;
    studentProfile?: {
      studentId: string;
      roomNumber: string | null;
      floorNumber: string | null;
      building: string | null;
      emergencyContact: string | null;
    } | null;
  };
  parent?: {
    id: string;
    firstName: string;
    lastName: string;
    email: string | null;
    parentProfile?: {
      relationship: string | null;
      emergencyContact: string | null;
    } | null;
  } | null;
}

export class PDFService {
  /**
   * Generate a gate pass PDF for a fully approved request
   */
  static async generateGatePassPDF(request: RequestWithRelations): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      try {
        const doc = new PDFDocument({
          size: "A4",
          margin: 50,
          info: {
            Title: `Gate Pass - ${request.student.firstName} ${request.student.lastName}`,
            Author: "Nirikshan - Hostel Management System",
            Subject: "Gate Pass Confirmation",
          },
        });

        const buffers: Buffer[] = [];
        doc.on("data", (chunk) => buffers.push(chunk));
        doc.on("end", () => resolve(Buffer.concat(buffers)));
        doc.on("error", reject);

        // Helper functions
        const drawLine = (y: number) => {
          doc
            .strokeColor("#e5e7eb")
            .lineWidth(1)
            .moveTo(50, y)
            .lineTo(545, y)
            .stroke();
        };

        const formatDate = (date: Date | string | null): string => {
          if (!date) return "N/A";
          return new Date(date).toLocaleString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });
        };

        const formatDateOnly = (date: Date | string | null): string => {
          if (!date) return "N/A";
          return new Date(date).toLocaleDateString("en-IN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        };

        const getRequestTypeText = (type: string): string => {
          switch (type) {
            case "LATE":
              return "Late Return Permission";
            case "GO_HOME":
              return "Home Visit Permission";
            case "ARRIVAL_CONFIRMATION":
              return "Arrival Confirmation";
            default:
              return type;
          }
        };

        // =====================================================
        // HEADER SECTION
        // =====================================================
        
        // University/Institution Logo Area (placeholder)
        doc
          .rect(50, 40, 60, 60)
          .fillAndStroke("#f3f4f6", "#d1d5db");
        
        doc
          .fontSize(10)
          .fillColor("#6b7280")
          .text("LOGO", 65, 65);

        // Title
        doc
          .fontSize(22)
          .fillColor("#1e3a5f")
          .font("Helvetica-Bold")
          .text("NIRIKSHAN", 130, 45, { align: "left" });

        doc
          .fontSize(10)
          .fillColor("#4b5563")
          .font("Helvetica")
          .text("Hostel Management System", 130, 70);

        // Gate Pass Badge
        doc
          .roundedRect(420, 45, 125, 35, 5)
          .fillAndStroke("#10b981", "#059669");

        doc
          .fontSize(14)
          .fillColor("white")
          .font("Helvetica-Bold")
          .text("GATE PASS", 420, 55, { width: 125, align: "center" });

        // Document ID
        doc
          .fontSize(8)
          .fillColor("#6b7280")
          .font("Helvetica")
          .text(`Pass ID: ${request.id.substring(0, 12).toUpperCase()}`, 50, 115);

        doc
          .fontSize(8)
          .text(`Generated: ${formatDate(new Date())}`, 350, 115, { align: "right" });

        drawLine(130);

        // =====================================================
        // STUDENT INFORMATION SECTION
        // =====================================================
        
        doc
          .fontSize(14)
          .fillColor("#1e3a5f")
          .font("Helvetica-Bold")
          .text("STUDENT INFORMATION", 50, 145);

        const studentInfo = [
          ["Name", `${request.student.firstName} ${request.student.lastName}`],
          ["Student ID", request.student.studentProfile?.studentId || "N/A"],
          ["Room Number", request.student.studentProfile?.roomNumber || "N/A"],
          ["Floor", request.student.studentProfile?.floorNumber || "N/A"],
          ["Building/Hostel", request.student.studentProfile?.building || "N/A"],
          ["Emergency Contact", request.student.studentProfile?.emergencyContact || "N/A"],
        ];

        let yPos = 170;
        doc.font("Helvetica");
        
        studentInfo.forEach(([label, value]) => {
          doc
            .fontSize(10)
            .fillColor("#6b7280")
            .text(label + ":", 50, yPos, { continued: false });
          
          doc
            .fontSize(10)
            .fillColor("#1f2937")
            .font("Helvetica-Bold")
            .text(String(value), 200, yPos);
          
          doc.font("Helvetica");
          yPos += 20;
        });

        drawLine(yPos + 10);

        // =====================================================
        // REQUEST DETAILS SECTION
        // =====================================================
        
        yPos += 25;
        doc
          .fontSize(14)
          .fillColor("#1e3a5f")
          .font("Helvetica-Bold")
          .text("REQUEST DETAILS", 50, yPos);

        yPos += 25;
        
        const requestInfo = [
          ["Request Type", getRequestTypeText(request.type)],
          ["Requested On", formatDate(request.requestedAt)],
          ["Expected Return", formatDate(request.expectedBack)],
          ["Reason", request.reason || "Not specified"],
        ];

        doc.font("Helvetica");
        
        requestInfo.forEach(([label, value]) => {
          doc
            .fontSize(10)
            .fillColor("#6b7280")
            .text(label + ":", 50, yPos);
          
          if (label === "Reason") {
            doc
              .fontSize(10)
              .fillColor("#1f2937")
              .text(String(value), 200, yPos, { width: 340 });
            yPos += Math.ceil(String(value).length / 50) * 15 + 5;
          } else {
            doc
              .fontSize(10)
              .fillColor("#1f2937")
              .text(String(value), 200, yPos);
            yPos += 20;
          }
        });

        drawLine(yPos + 10);

        // =====================================================
        // APPROVAL CHAIN SECTION
        // =====================================================
        
        yPos += 25;
        doc
          .fontSize(14)
          .fillColor("#1e3a5f")
          .font("Helvetica-Bold")
          .text("APPROVAL STATUS", 50, yPos);

        yPos += 25;

        // Parent Approval
        const parentStatus = request.parentStatus || "PENDING";
        const parentStatusColor = parentStatus === "APPROVED" ? "#10b981" : 
                                  parentStatus === "REJECTED" ? "#ef4444" : "#f59e0b";
        
        doc
          .fontSize(10)
          .fillColor("#6b7280")
          .font("Helvetica")
          .text("Parent Approval:", 50, yPos);

        doc
          .fontSize(10)
          .fillColor(parentStatusColor)
          .font("Helvetica-Bold")
          .text(parentStatus, 200, yPos);

        if (request.parent) {
          doc
            .fontSize(9)
            .fillColor("#6b7280")
            .font("Helvetica")
            .text(
              `(${request.parent.firstName} ${request.parent.lastName}${
                request.parent.parentProfile?.relationship 
                  ? ` - ${request.parent.parentProfile.relationship}` 
                  : ""
              })`,
              280,
              yPos
            );
        }

        if (request.parentApprovedAt) {
          yPos += 15;
          doc
            .fontSize(9)
            .fillColor("#6b7280")
            .text(`Approved on: ${formatDate(request.parentApprovedAt)}`, 200, yPos);
        }

        yPos += 25;

        // Warden Approval
        const wardenStatus = request.status || "PENDING";
        const wardenStatusColor = wardenStatus === "APPROVED" ? "#10b981" : 
                                  wardenStatus === "REJECTED" ? "#ef4444" : "#f59e0b";
        
        doc
          .fontSize(10)
          .fillColor("#6b7280")
          .font("Helvetica")
          .text("Warden Approval:", 50, yPos);

        doc
          .fontSize(10)
          .fillColor(wardenStatusColor)
          .font("Helvetica-Bold")
          .text(wardenStatus, 200, yPos);

        if (request.approvedAt) {
          yPos += 15;
          doc
            .fontSize(9)
            .fillColor("#6b7280")
            .font("Helvetica")
            .text(`Approved on: ${formatDate(request.approvedAt)}`, 200, yPos);
        }

        yPos += 25;

        // Chief Warden Approval (if scaled up)
        if (request.isScaledUp && request.chiefWardenStatus) {
          const cwStatus = request.chiefWardenStatus || "PENDING";
          const cwStatusColor = cwStatus === "APPROVED" ? "#10b981" : 
                                cwStatus === "REJECTED" ? "#ef4444" : "#f59e0b";
          
          doc
            .fontSize(10)
            .fillColor("#6b7280")
            .font("Helvetica")
            .text("Chief Warden Approval:", 50, yPos);

          doc
            .fontSize(10)
            .fillColor(cwStatusColor)
            .font("Helvetica-Bold")
            .text(cwStatus, 200, yPos);

          if (request.chiefWardenApprovedAt) {
            yPos += 15;
            doc
              .fontSize(9)
              .fillColor("#6b7280")
              .font("Helvetica")
              .text(`Approved on: ${formatDate(request.chiefWardenApprovedAt)}`, 200, yPos);
          }

          if (request.chiefWardenMessage) {
            yPos += 15;
            doc
              .fontSize(9)
              .fillColor("#4b5563")
              .font("Helvetica-Oblique")
              .text(`Message: "${request.chiefWardenMessage}"`, 200, yPos, { width: 340 });
          }

          yPos += 20;
        }

        drawLine(yPos + 10);

        // =====================================================
        // VALIDITY SECTION
        // =====================================================
        
        yPos += 25;
        
        // Validity Box
        doc
          .roundedRect(50, yPos, 495, 60, 5)
          .fillAndStroke("#f0fdf4", "#86efac");

        doc
          .fontSize(12)
          .fillColor("#166534")
          .font("Helvetica-Bold")
          .text("VALID FOR GATE EXIT", 60, yPos + 10, { width: 475, align: "center" });

        doc
          .fontSize(10)
          .fillColor("#15803d")
          .font("Helvetica")
          .text(
            `This pass is valid from ${formatDate(request.requestedAt)} until ${formatDate(request.expectedBack)}`,
            60,
            yPos + 30,
            { width: 475, align: "center" }
          );

        yPos += 80;

        // =====================================================
        // INSTRUCTIONS SECTION
        // =====================================================
        
        doc
          .fontSize(11)
          .fillColor("#1e3a5f")
          .font("Helvetica-Bold")
          .text("INSTRUCTIONS:", 50, yPos);

        yPos += 20;

        const instructions = [
          "1. Present this pass to the security personnel at the gate.",
          "2. This pass is non-transferable and valid only for the student mentioned above.",
          "3. Please return to the hostel before the expected return time.",
          "4. In case of emergency, contact the hostel warden immediately.",
          "5. Keep this pass safe; it may be required for re-entry verification.",
        ];

        doc.font("Helvetica").fontSize(9).fillColor("#4b5563");
        
        instructions.forEach((instruction) => {
          doc.text(instruction, 50, yPos, { width: 495 });
          yPos += 15;
        });

        // =====================================================
        // FOOTER SECTION
        // =====================================================
        
        yPos = 750;
        drawLine(yPos);

        doc
          .fontSize(8)
          .fillColor("#9ca3af")
          .text(
            "This is a computer-generated document. No signature is required.",
            50,
            yPos + 10,
            { align: "center", width: 495 }
          );

        doc
          .fontSize(8)
          .text(
            "© Nirikshan Hostel Management System | For any queries, contact the hostel administration.",
            50,
            yPos + 25,
            { align: "center", width: 495 }
          );

        // QR Code placeholder (for future enhancement)
        doc
          .rect(480, yPos - 60, 60, 60)
          .fillAndStroke("#f9fafb", "#e5e7eb");
        
        doc
          .fontSize(7)
          .fillColor("#9ca3af")
          .text("QR", 500, yPos - 40);

        // Finalize the PDF
        doc.end();
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Check if a request is fully approved and eligible for PDF generation
   */
  static isRequestFullyApproved(request: RequestWithRelations): boolean {
    // Parent must approve
    if (request.parentStatus !== "APPROVED") {
      return false;
    }

    // If scaled up, chief warden must approve
    if (request.isScaledUp) {
      return request.chiefWardenStatus === "APPROVED";
    }

    // Otherwise, warden must approve
    return request.status === "APPROVED";
  }
}

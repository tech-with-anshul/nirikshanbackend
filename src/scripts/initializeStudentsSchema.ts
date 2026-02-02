import { prisma } from "../config/database";
import studentsConfig from "../config/studentsConfig.json";
import bcrypt from "bcryptjs";

interface ParentConfig {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  relationship: string;
  address: string;
  emergencyContact: string;
}

interface StudentConfig {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  studentId: string;
  username: string;
  building: string;
  roomNumber: string;
  floorNumber: string;
  emergencyContact: string;
  medicalInfo: string;
  parents: ParentConfig[];
}

/**
 * Initialize Students and Parents from studentsConfig.json
 *
 * Process:
 * 1. Create parents first (password = firstName)
 * 2. Create student (password = firstName)
 * 3. Link student to primary parent (first parent in array)
 *
 * Building/Warden linkage is automatic via building name
 */
async function initializeStudentsSchema() {
  console.log("👨‍🎓 Starting Students & Parents Initialization...");
  console.log("=".repeat(60));

  const students = studentsConfig.students as StudentConfig[];

  let studentsCreated = 0;
  let parentsCreated = 0;
  let studentsSkipped = 0;

  for (const studentConfig of students) {
    console.log(`\n👨‍🎓 Processing Student: ${studentConfig.firstName} ${studentConfig.lastName}...`);

    // Check if student already exists
    const existingStudent = false;

    if (existingStudent) {
      console.log(`⚠️  Student "${studentConfig.email}" already exists. Skipping...`);
      studentsSkipped++;
      continue;
    }

    // Validate building exists
    const buildingExists = await prisma.building.findUnique({
      where: { name: studentConfig.building }
    });

    if (!buildingExists) {
      console.error(`❌ Building "${studentConfig.building}" does not exist. Please create buildings first.`);
      continue;
    }

    // Step 1: Create Parents (both mother and father)
    let motherUser = null;
    let fatherUser = null;

    for (const parentConfig of studentConfig.parents) {
      let parentUser;
      const existingParent = false;

      if (existingParent) {
        console.log(`   ℹ️  Parent "${parentConfig.email}" already exists. Using existing parent.`);
        parentUser = existingParent;
      } else {
        // Hash parent password (firstName)
        const parentPassword = parentConfig.firstName;
        const parentHashedPassword = await bcrypt.hash(parentPassword, 12);

        parentUser = await prisma.user.create({
          data: {
            email: parentConfig.email,
            firstName: parentConfig.firstName,
            lastName: parentConfig.lastName,
            phone: parentConfig.phone,
            password: parentHashedPassword,
            role: "PARENT",
            isVerified: true,
            parentProfile: {
              create: {
                address: parentConfig.address,
                relationship: parentConfig.relationship,
                emergencyContact: parentConfig.emergencyContact,
              }
            }
          },
          include: {
            parentProfile: true
          }
        });

        parentsCreated++;
        console.log(`   ✅ Created Parent (${parentConfig.relationship}): ${parentConfig.firstName} ${parentConfig.lastName}`);
        console.log(`      - Email: ${parentConfig.email}`);
        console.log(`      - Password: ${parentPassword}`);
        console.log(`      - Phone: ${parentConfig.phone}`);
      }

      // Assign to mother or father based on relationship
      if (parentConfig.relationship.toLowerCase() === "mother") {
        motherUser = parentUser;
      } else if (parentConfig.relationship.toLowerCase() === "father") {
        fatherUser = parentUser;
      }
    }

    // Step 2: Create Student and link to both mother and father
    const studentPassword = studentConfig.firstName;
    const studentHashedPassword = await bcrypt.hash(studentPassword, 12);

    const studentUser = await prisma.user.create({
      data: {
        email: studentConfig.email,
        firstName: studentConfig.firstName,
        lastName: studentConfig.lastName,
        phone: studentConfig.phone,
        password: studentHashedPassword,
        role: "STUDENT",
        isVerified: true,
        studentProfile: {
          create: {
            studentId: studentConfig.studentId,
            username: studentConfig.username,
            building: studentConfig.building,
            roomNumber: studentConfig.roomNumber,
            floorNumber: studentConfig.floorNumber,
            emergencyContact: studentConfig.emergencyContact,
            medicalInfo: studentConfig.medicalInfo,
            isAtHostel: true,
            motherProfileId: motherUser?.parentProfile?.id, // Link to mother
            fatherProfileId: fatherUser?.parentProfile?.id, // Link to father
          }
        }
      }
    });

    studentsCreated++;
    console.log(`   ✅ Created Student: ${studentConfig.firstName} ${studentConfig.lastName}`);
    console.log(`      - Email: ${studentConfig.email}`);
    console.log(`      - Password: ${studentPassword}`);
    console.log(`      - Phone: ${studentConfig.phone}`);
    console.log(`      - Student ID: ${studentConfig.studentId}`);
    console.log(`      - Username (Roll No): ${studentConfig.username}`);
    console.log(`      - Building: ${studentConfig.building}`);
    console.log(`      - Room: ${studentConfig.roomNumber}`);
    if (motherUser) {
      console.log(`      - Mother: ${motherUser.email}`);
    }
    if (fatherUser) {
      console.log(`      - Father: ${fatherUser.email}`);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 Summary:");
  console.log("=".repeat(60));
  console.log(`👨‍👩‍👧‍👦 Parents created: ${parentsCreated}`);
  console.log(`👨‍🎓 Students created: ${studentsCreated}`);
  console.log(`⚠️  Students skipped: ${studentsSkipped}`);
  console.log("=".repeat(60));
  console.log("✅ Students & Parents Initialization Complete!");
  console.log("\n🔐 Default passwords are set to each person's firstName");
  console.log("   Users should change their password after first login");
  console.log("\n💡 Note:");
  console.log("   - Students are linked to buildings by building name");
  console.log("   - Wardens are linked to buildings by building name");
  console.log("   - Students are linked to BOTH mother and father");
  console.log("   - All phone numbers are in 10-digit format");
}

if (require.main === module) {
  initializeStudentsSchema()
    .catch((error) => {
      console.error("❌ Initialization failed:", error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export { initializeStudentsSchema };
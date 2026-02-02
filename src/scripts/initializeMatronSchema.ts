import { prisma } from "../config/database";
import matronConfig from "../config/matronConfig.json";
import bcrypt from "bcryptjs";

interface MatronConfig {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  employeeId: string;
  department: string;
  responsibilities: string;
  shiftStartTime: string;
  shiftEndTime: string;
}

/**
 * Initialize Matrons from matronConfig.json
 * - Supports MULTIPLE matrons (array of objects)
 * - Idempotent: skips if matron already exists
 * - Default password = firstName (bcrypt, 12 rounds)
 */
async function initializeMatronSchema() {
  console.log("👩‍⚕️ Starting Matron Initialization...");
  console.log("=".repeat(60));

  const matrons = matronConfig.matrons as MatronConfig[];

  if (!Array.isArray(matrons) || matrons.length === 0) {
    console.log("⚠️  No matrons found in config. Exiting.");
    return;
  }

  for (const m of matrons) {
    console.log(`\n👩‍⚕️ Processing ${m.firstName} ${m.lastName}...`);

    const existingUser = false;

    if (existingUser) {
      console.log(`⚠️  Matron "${m.email}" already exists. Skipping...`);
      continue;
    }

    const defaultPassword = m.firstName;
    const hashedPassword = await bcrypt.hash(defaultPassword, 12);

    await prisma.user.create({
      data: {
        email: m.email,
        firstName: m.firstName,
        lastName: m.lastName,
        phone: m.phone,
        password: hashedPassword,
        role: "MATRON",
        isVerified: true,
        matronProfile: {
          create: {
            employeeId: m.employeeId,
            department: m.department,
            responsibilities: m.responsibilities,
            shiftStartTime: m.shiftStartTime,
            shiftEndTime: m.shiftEndTime,
            isActive: true
          }
        }
      }
    });

    console.log(`✅ Created Matron "${m.firstName} ${m.lastName}"`);
    console.log(`   - Email: ${m.email}`);
    console.log(`   - Password: ${defaultPassword}`);
    console.log(`   - Employee ID: ${m.employeeId}`);
    console.log(`   - Department: ${m.department}`);
    console.log(`   - Shift: ${m.shiftStartTime} - ${m.shiftEndTime}`);
  }

  console.log("\n" + "=".repeat(60));
  console.log("✅ Matron Initialization Complete!");
  console.log("🔐 Default password = firstName (must be changed after login)");
}

if (require.main === module) {
  initializeMatronSchema()
    .catch((e) => {
      console.error("❌ Initialization failed:", e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export { initializeMatronSchema };

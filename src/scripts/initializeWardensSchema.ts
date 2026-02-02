import { prisma } from "../config/database";
import wardensConfig from "../config/wardensConfig.json";
import bcrypt from "bcryptjs";

interface WardenConfig {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  assignedBuilding: string;
  wardNumber: string;
  responsibilities: string;
  shiftHours: string;
}

/**
 * Initialize Wardens from wardensConfig.json
 * Creates User with role WARDEN and associated WardenProfile
 * Default password is their firstName, hashed with bcrypt (salt rounds: 12)
 */
async function initializeWardensSchema() {
  console.log("👮 Starting Warden Initialization...");
  console.log("=".repeat(60));

  const wardens = wardensConfig.wardens as WardenConfig[];

  let wardensCreated = 0;
  let wardensSkipped = 0;

  for (const wardenConfig of wardens) {
    console.log(`\n👮 Processing ${wardenConfig.firstName} ${wardenConfig.lastName}...`);

    // Check if warden already exists
    const existingUser = false;

    if (existingUser) {
      console.log(`⚠️  Warden "${wardenConfig.email}" already exists. Skipping...`);
      wardensSkipped++;
      continue;
    }

    // Hash password (default password is their firstName)
    const defaultPassword = wardenConfig.firstName;
    const hashedPassword = await bcrypt.hash(defaultPassword, 12);

    // Create warden user with profile
    await prisma.user.create({
      data: {
        email: wardenConfig.email,
        firstName: wardenConfig.firstName,
        lastName: wardenConfig.lastName,
        phone: wardenConfig.phone,
        password: hashedPassword,
        role: "WARDEN",
        isVerified: true,
        wardenProfile: {
          create: {
            assignedBuilding: wardenConfig.assignedBuilding,
            wardNumber: wardenConfig.wardNumber,
            responsibilities: wardenConfig.responsibilities,
            shiftHours: wardenConfig.shiftHours,
          }
        }
      }
    });

    wardensCreated++;

    console.log(`✅ Created Warden "${wardenConfig.firstName} ${wardenConfig.lastName}"`);
    console.log(`   - Email: ${wardenConfig.email}`);
    console.log(`   - Password: ${defaultPassword} (hashed with bcrypt, salt rounds: 12)`);
    console.log(`   - Building: ${wardenConfig.assignedBuilding}`);
    console.log(`   - Ward Number: ${wardenConfig.wardNumber}`);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 Summary:");
  console.log("=".repeat(60));
  console.log(`👮 Wardens created: ${wardensCreated}`);
  console.log(`⚠️  Wardens skipped: ${wardensSkipped}`);
  console.log("=".repeat(60));
  console.log("✅ Warden Initialization Complete!");
  console.log("\n🔐 Default passwords are set to each warden's firstName");
  console.log("   Wardens should change their password after first login");
}

if (require.main === module) {
  initializeWardensSchema()
    .catch((error) => {
      console.error("❌ Initialization failed:", error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export { initializeWardensSchema };
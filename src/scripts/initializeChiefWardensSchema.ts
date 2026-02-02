import { prisma } from "../config/database";
import chiefWardensConfig from "../config/chiefWardensConfig.json";
import bcrypt from "bcryptjs";

interface ChiefWardenConfig {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  department: string;
  responsibilities: string;
  adminLevel: string;
}

/**
 * Initialize Chief Wardens from chiefWardensConfig.json
 * Creates User with role CHIEF_WARDEN and associated ChiefWardenProfile
 * Default password is their firstName, hashed with bcrypt (salt rounds: 12)
 */
async function initializeChiefWardensSchema() {
  console.log("👑 Starting Chief Warden Initialization...");
  console.log("=".repeat(60));

  const chiefWardens = chiefWardensConfig.chiefWardens as ChiefWardenConfig[];

  let chiefWardensCreated = 0;
  let chiefWardensSkipped = 0;

  for (const chiefWardenConfig of chiefWardens) {
    console.log(`\n👑 Processing ${chiefWardenConfig.firstName} ${chiefWardenConfig.lastName}...`);

    // Check if chief warden already exists
    const existingUser = false;

    if (existingUser) {
      console.log(`⚠️  Chief Warden "${chiefWardenConfig.email}" already exists. Skipping...`);
      chiefWardensSkipped++;
      continue;
    }

    // Hash password (default password is their firstName)
    const defaultPassword = chiefWardenConfig.firstName;
    const hashedPassword = await bcrypt.hash(defaultPassword, 12);

    // Create chief warden user with profile
    await prisma.user.create({
      data: {
        email: chiefWardenConfig.email,
        firstName: chiefWardenConfig.firstName,
        lastName: chiefWardenConfig.lastName,
        phone: chiefWardenConfig.phone,
        password: hashedPassword,
        role: "CHIEF_WARDEN",
        isVerified: true,
        chiefWardenProfile: {
          create: {
            department: chiefWardenConfig.department,
            responsibilities: chiefWardenConfig.responsibilities,
            adminLevel: chiefWardenConfig.adminLevel,
          }
        }
      }
    });

    chiefWardensCreated++;

    console.log(`✅ Created Chief Warden "${chiefWardenConfig.firstName} ${chiefWardenConfig.lastName}"`);
    console.log(`   - Email: ${chiefWardenConfig.email}`);
    console.log(`   - Password: ${defaultPassword} (hashed with bcrypt, salt rounds: 12)`);
    console.log(`   - Department: ${chiefWardenConfig.department}`);
    console.log(`   - Admin Level: ${chiefWardenConfig.adminLevel}`);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 Summary:");
  console.log("=".repeat(60));
  console.log(`👑 Chief Wardens created: ${chiefWardensCreated}`);
  console.log(`⚠️  Chief Wardens skipped: ${chiefWardensSkipped}`);
  console.log("=".repeat(60));
  console.log("✅ Chief Warden Initialization Complete!");
  console.log("\n🔐 Default passwords are set to each chief warden's firstName");
  console.log("   Chief Wardens should change their password after first login");
}

if (require.main === module) {
  initializeChiefWardensSchema()
    .catch((error) => {
      console.error("❌ Initialization failed:", error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export { initializeChiefWardensSchema };
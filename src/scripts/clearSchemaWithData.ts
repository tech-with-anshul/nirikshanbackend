import { prisma } from "../config/database";

/**
 * Clear ALL data and reset database schema
 *
 * This script will:
 * 1. Delete all data from all tables
 * 2. Reset the database schema
 *
 * WARNING: This will delete EVERYTHING!
 * Use only when you want a completely fresh start
 */
async function clearSchemaWithData() {
  console.log("⚠️  WARNING: CLEARING ALL DATA AND RESETTING SCHEMA...");
  console.log("=".repeat(60));

  try {
    // Delete all data in proper order (respecting foreign keys)
    console.log("🗑️  Deleting all data...");

    await prisma.emailNotification.deleteMany();
    console.log("   ✅ Cleared email notifications");

    await prisma.request.deleteMany();
    console.log("   ✅ Cleared requests");

    await prisma.message.deleteMany();
    console.log("   ✅ Cleared messages");

    await prisma.messageThread.deleteMany();
    console.log("   ✅ Cleared message threads");

    await prisma.room.deleteMany();
    console.log("   ✅ Cleared rooms");

    await prisma.building.deleteMany();
    console.log("   ✅ Cleared buildings");

    await prisma.studentProfile.deleteMany();
    console.log("   ✅ Cleared student profiles");

    await prisma.parentProfile.deleteMany();
    console.log("   ✅ Cleared parent profiles");

    await prisma.wardenProfile.deleteMany();
    console.log("   ✅ Cleared warden profiles");

    await prisma.chiefWardenProfile.deleteMany();
    console.log("   ✅ Cleared chief warden profiles");

    await prisma.matronProfile.deleteMany();
    console.log("   ✅ Cleared matron profiles");

    await prisma.user.deleteMany();
    console.log("   ✅ Cleared users");

    console.log("\n" + "=".repeat(60));
    console.log("✅ ALL DATA CLEARED SUCCESSFULLY!");
    console.log("=".repeat(60));
    console.log("\n💡 Next Steps:");
    console.log("   1. Run: npx prisma db push --force-reset (to reset schema)");
    console.log("   2. Run: npm run db:init-buildings");
    console.log("   3. Run: npm run db:init-chief-wardens");
    console.log("   4. Run: npm run db:init-wardens");
    console.log("   5. Run: npm run db:init-matron");
    console.log("   6. Run: npm run db:init-students");
    console.log("\nDatabase is now completely clean! 🎉");

  } catch (error) {
    console.error("❌ Error clearing data:", error);
    throw error;
  }
}

if (require.main === module) {
  clearSchemaWithData()
    .catch((error) => {
      console.error("❌ Clear schema failed:", error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export { clearSchemaWithData };
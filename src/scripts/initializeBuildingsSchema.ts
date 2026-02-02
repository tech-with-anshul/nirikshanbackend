import { prisma } from "../config/database";
import buildingsConfig from "../config/buildingsConfig.json";

interface BuildingConfig {
  name: string;
  displayName: string;
  totalCapacity: number;
  currentOccupancy: number;
  floors: number;
  roomsPerFloor: number;
  studentsPerRoom: number;
  description: string;
  facilities: string[];
  wardenOffice: string;
}

/**
 * Initialize Buildings Schema
 * This script creates Building entries in the database from buildingsConfig.json
 * Run this when deploying to create the initial building structure
 *
 * Note: This only creates Building entries, NOT rooms
 */
async function initializeBuildingsSchema() {
  console.log("🏗️  Starting Building Schema Initialization...");
  console.log("=".repeat(60));

  const buildings = buildingsConfig.buildings as BuildingConfig[];

  // Summary stats
  let buildingsCreated = 0;
  let buildingsSkipped = 0;
  let totalCapacity = 0;

  for (const buildingConfig of buildings) {
    console.log(`\n🏢 Processing ${buildingConfig.displayName}...`);

    const buildingName = buildingConfig.name;

    // Validate building name (must not be empty)
    if (!buildingName || buildingName.trim() === "") {
      console.error(`❌ Invalid building name: "${buildingName}"`);
      continue;
    }

    // Check if building already exists
    const existingBuilding = await prisma.building.findUnique({
      where: { name: buildingName }
    });

    if (existingBuilding) {
      console.log(`⚠️  Building "${buildingName}" already exists. Skipping...`);
      buildingsSkipped++;
      continue;
    }

    // Create building entry
    await prisma.building.create({
      data: {
        name: buildingConfig.name,
        displayName: buildingConfig.displayName,
        totalCapacity: buildingConfig.totalCapacity,
        currentOccupancy: buildingConfig.currentOccupancy,
        floors: buildingConfig.floors,
        roomsPerFloor: buildingConfig.roomsPerFloor,
        studentsPerRoom: buildingConfig.studentsPerRoom,
        description: buildingConfig.description,
        facilities: JSON.stringify(buildingConfig.facilities),
        wardenOffice: buildingConfig.wardenOffice,
        isActive: true,
      }
    });

    buildingsCreated++;
    totalCapacity += buildingConfig.totalCapacity;

    console.log(`✅ Created Building "${buildingName}"`);
    console.log(`   - Display Name: ${buildingConfig.displayName}`);
    console.log(`   - Floors: ${buildingConfig.floors}`);
    console.log(`   - Rooms per floor: ${buildingConfig.roomsPerFloor}`);
    console.log(`   - Capacity per room: ${buildingConfig.studentsPerRoom}`);
    console.log(`   - Total capacity: ${buildingConfig.totalCapacity} students`);
    console.log(`   - Facilities: ${buildingConfig.facilities.join(", ")}`);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 Initialization Summary:");
  console.log("=".repeat(60));
  console.log(`🏢 Buildings created: ${buildingsCreated}`);
  console.log(`⚠️  Buildings skipped: ${buildingsSkipped}`);
  console.log(`👥 Total capacity: ${totalCapacity} students`);
  console.log("=".repeat(60));
  console.log("✅ Building Schema Initialization Complete!");
  console.log("\n💡 Note: This only creates Building entries.");
  console.log("   Rooms will be created separately when needed.");
}

// Execute if run directly
if (require.main === module) {
  initializeBuildingsSchema()
    .catch((error) => {
      console.error("❌ Initialization failed:", error);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

export { initializeBuildingsSchema, BuildingConfig };
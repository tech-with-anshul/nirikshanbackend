/*
  Warnings:

  - You are about to drop the column `buildingName` on the `rooms` table. All the data in the column will be lost.
  - You are about to drop the column `buildingName` on the `student_profiles` table. All the data in the column will be lost.
  - Added the required column `building` to the `rooms` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Building" AS ENUM ('A', 'B', 'C', 'D', 'E', 'F');

-- Step 1: Add new building columns with default value temporarily
ALTER TABLE "rooms" ADD COLUMN "building" "Building" DEFAULT 'A';
ALTER TABLE "student_profiles" ADD COLUMN "building" "Building";
ALTER TABLE "warden_profiles" ADD COLUMN "assignedBuilding" "Building";

-- Step 2: Migrate existing data from buildingName to building enum
-- Map existing building names to enum values
UPDATE "rooms" SET "building" = 
  CASE 
    WHEN "buildingName" = 'A' THEN 'A'::"Building"
    WHEN "buildingName" = 'B' THEN 'B'::"Building"
    WHEN "buildingName" = 'C' THEN 'C'::"Building"
    WHEN "buildingName" = 'D' THEN 'D'::"Building"
    WHEN "buildingName" = 'E' THEN 'E'::"Building"
    WHEN "buildingName" = 'F' THEN 'F'::"Building"
    ELSE 'A'::"Building"  -- Default fallback
  END;

UPDATE "student_profiles" SET "building" = 
  CASE 
    WHEN "buildingName" = 'A' THEN 'A'::"Building"
    WHEN "buildingName" = 'B' THEN 'B'::"Building"
    WHEN "buildingName" = 'C' THEN 'C'::"Building"
    WHEN "buildingName" = 'D' THEN 'D'::"Building"
    WHEN "buildingName" = 'E' THEN 'E'::"Building"
    WHEN "buildingName" = 'F' THEN 'F'::"Building"
    ELSE NULL  -- Allow NULL for student profiles
  END
  WHERE "buildingName" IS NOT NULL;

-- Step 3: Remove default from rooms building column and make it required
ALTER TABLE "rooms" ALTER COLUMN "building" DROP DEFAULT;
ALTER TABLE "rooms" ALTER COLUMN "building" SET NOT NULL;

-- Step 4: Drop old buildingName columns
ALTER TABLE "rooms" DROP COLUMN "buildingName";
ALTER TABLE "student_profiles" DROP COLUMN "buildingName";

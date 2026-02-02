/*
  Warnings:

  - You are about to drop the column `parentId` on the `student_profiles` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "MessageType" ADD VALUE 'CHIEF_WARDEN_WARDEN';
ALTER TYPE "MessageType" ADD VALUE 'CHIEF_WARDEN_STUDENT';
ALTER TYPE "MessageType" ADD VALUE 'CHIEF_WARDEN_PARENT';

-- AlterEnum
ALTER TYPE "UserRole" ADD VALUE 'CHIEF_WARDEN';

-- DropForeignKey
ALTER TABLE "student_profiles" DROP CONSTRAINT "student_profiles_parentId_fkey";

-- AlterTable
ALTER TABLE "student_profiles" DROP COLUMN "parentId",
ADD COLUMN     "parentProfileId" TEXT;

-- CreateTable
CREATE TABLE "chief_warden_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "department" TEXT,
    "responsibilities" TEXT,
    "adminLevel" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chief_warden_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "chief_warden_profiles_userId_key" ON "chief_warden_profiles"("userId");

-- AddForeignKey
ALTER TABLE "student_profiles" ADD CONSTRAINT "student_profiles_parentProfileId_fkey" FOREIGN KEY ("parentProfileId") REFERENCES "parent_profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chief_warden_profiles" ADD CONSTRAINT "chief_warden_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

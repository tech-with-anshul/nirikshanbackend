-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "chiefWardenApprovedAt" TIMESTAMP(3),
ADD COLUMN     "chiefWardenApprovedBy" TEXT,
ADD COLUMN     "chiefWardenStatus" "RequestStatus",
ADD COLUMN     "isScaledUp" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "scaledUpAt" TIMESTAMP(3),
ADD COLUMN     "scaledUpBy" TEXT;

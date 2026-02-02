-- AlterTable
ALTER TABLE "requests" ADD COLUMN     "parentApprovedAt" TIMESTAMP(3),
ADD COLUMN     "parentStatus" "RequestStatus" NOT NULL DEFAULT 'PENDING';

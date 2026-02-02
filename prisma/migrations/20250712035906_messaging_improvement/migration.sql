/*
  Warnings:

  - You are about to drop the column `subject` on the `message_threads` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `message_threads` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `messages` table. All the data in the column will be lost.
  - Made the column `threadId` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "message_threads" DROP COLUMN "subject",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "priority",
DROP COLUMN "subject",
DROP COLUMN "type",
ALTER COLUMN "threadId" SET NOT NULL;

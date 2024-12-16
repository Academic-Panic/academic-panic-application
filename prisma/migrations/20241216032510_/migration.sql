/*
  Warnings:

  - A unique constraint covering the columns `[owner,date]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "owner" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Session_owner_date_key" ON "Session"("owner", "date");

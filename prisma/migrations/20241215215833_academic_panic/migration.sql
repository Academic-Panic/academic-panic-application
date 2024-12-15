/*
  Warnings:

  - You are about to drop the column `courseID` on the `Session` table. All the data in the column will be lost.
  - Changed the type of `semester` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `courseTitle` to the `Session` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `location` on the `Session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Course" DROP COLUMN "semester",
ADD COLUMN     "semester" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "courseID",
ADD COLUMN     "courseTitle" TEXT NOT NULL,
DROP COLUMN "location",
ADD COLUMN     "location" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Location";

-- DropEnum
DROP TYPE "Semester";

-- CreateIndex
CREATE UNIQUE INDEX "Course_title_section_semester_year_instructor_key" ON "Course"("title", "section", "semester", "year", "instructor");

-- CreateEnum
CREATE TYPE "Location" AS ENUM ('ICSpace', 'POST_2nd_Floor', 'Computer_Lab', 'Hamilton_Library');

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "courseID" INTEGER NOT NULL,
    "location" "Location" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "desc" TEXT NOT NULL,
    "partySize" INTEGER NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SessionToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SessionToUser_AB_unique" ON "_SessionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_SessionToUser_B_index" ON "_SessionToUser"("B");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_courseID_fkey" FOREIGN KEY ("courseID") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SessionToUser" ADD CONSTRAINT "_SessionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SessionToUser" ADD CONSTRAINT "_SessionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

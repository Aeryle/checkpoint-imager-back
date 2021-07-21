/*
  Warnings:

  - You are about to drop the `_ImageToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `uploaderId` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ImageToUser" DROP CONSTRAINT "_ImageToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ImageToUser" DROP CONSTRAINT "_ImageToUser_B_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "uploaderId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_ImageToUser";

-- CreateTable
CREATE TABLE "_favoritedBy" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_favoritedBy_AB_unique" ON "_favoritedBy"("A", "B");

-- CreateIndex
CREATE INDEX "_favoritedBy_B_index" ON "_favoritedBy"("B");

-- AddForeignKey
ALTER TABLE "Image" ADD FOREIGN KEY ("uploaderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favoritedBy" ADD FOREIGN KEY ("A") REFERENCES "Image"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_favoritedBy" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - A unique constraint covering the columns `[chapter,topic]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Chapter_chapter_key";

-- DropIndex
DROP INDEX "Chapter_urlname_key";

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_chapter_topic_key" ON "Chapter"("chapter", "topic");

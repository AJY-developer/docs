-- CreateTable
CREATE TABLE "Chapter" (
    "id" SERIAL NOT NULL,
    "chapter" TEXT NOT NULL,
    "content" TEXT,
    "topic" TEXT NOT NULL,
    "urlname" TEXT NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_chapter_key" ON "Chapter"("chapter");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_urlname_key" ON "Chapter"("urlname");

-- CreateIndex
CREATE INDEX "Chapter_urlname_topic_idx" ON "Chapter"("urlname", "topic");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_urlname_topic_key" ON "Chapter"("urlname", "topic");

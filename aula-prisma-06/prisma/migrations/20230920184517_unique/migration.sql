/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `favorites` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "favorites_url_key" ON "favorites"("url");

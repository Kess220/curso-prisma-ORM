CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"body" TEXT NOT NULL
)

ALTER TABLE "posts" ADD COLUMN "createdAt" DATE;

ALTER TABLE "posts" ALTER COLUMN "createdAt" SET DEFAULT 'new Date()';

UPDATE "posts" SET "createdAt" = to_date("createdAt", 'YYYY/MM/DD') WHERE "createdAt" IS NOT NULL;

ALTER TABLE "posts" RENAME COLUMN "body" TO "content";

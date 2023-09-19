CREATE TABLE "posts" (
	"id" SERIAL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"title" TEXT NOT NULL,
	"body" TEXT NOT NULL
);

ALTER TABLE posts ADD "createdAt" DATE;
ALTER TABLE posts RENAME COLUMN "body" TO "content";

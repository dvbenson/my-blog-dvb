ALTER TABLE "posts" RENAME COLUMN "topics" TO "tags";
ALTER TABLE "posts" ADD COLUMN "subject" text NOT NULL;
ALTER TABLE "posts" ADD COLUMN "author" text NOT NULL;
ALTER TABLE "posts" ADD COLUMN "votes" integer DEFAULT 0 NOT NULL;
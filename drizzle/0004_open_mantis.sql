ALTER TABLE "posts" RENAME COLUMN "author_id" TO "author";
ALTER TABLE "comments" ADD COLUMN "votes" integer DEFAULT 0 NOT NULL;
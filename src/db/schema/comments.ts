import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
// import { sql } from "@vercel/postgres";
// import { drizzle } from "drizzle-orm/vercel-postgres";

export const CommentsTable = pgTable(
  "comments",
  {
    id: serial("id").primaryKey(),
    username: text("username").notNull(),
    body: text("body").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (comments) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(comments.username),
    };
  }
);

export type Comment = InferModel<typeof CommentsTable>;
export type NewComment = InferModel<typeof CommentsTable, "insert">;

// Connect to Vercel Postgres
// export const db = drizzle(sql);

import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

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

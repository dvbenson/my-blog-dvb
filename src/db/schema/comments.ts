import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { InferModel, relations } from "drizzle-orm";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import * as posts from "./posts";

export const commentsTable = pgTable(
  "comments",
  {
    id: serial("id").primaryKey(),
    username: text("username").notNull(),
    body: text("body").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (comments) => {
    return {
      usernameIdx: uniqueIndex("username_idx").on(comments.username),
    };
  }
);

export const commentsRelations = relations(commentsTable, ({ one }) => ({
  posts: one(posts.postsTable, {
    fields: [commentsTable.id],
    references: [posts.postsTable.id],
  }),
}));

export const insertCommentSchema = createInsertSchema(commentsTable, {
  username: z.string().nonempty(),
  body: z.string().nonempty().min(3).max(140),
});

export const selectCommentSchema = createSelectSchema(commentsTable);

export type Comment = InferModel<typeof commentsTable>;
export type NewComment = InferModel<typeof commentsTable, "insert">;

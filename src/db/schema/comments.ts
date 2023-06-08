import {
  integer,
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
import * as users from "./users";

export const commentsTable = pgTable(
  "comments",
  {
    id: serial("id").primaryKey(),
    post_id: integer("post_id").notNull(),
    author_id: integer("author_id").notNull(),
    body: text("body").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (comments) => {
    return {
      usernameIdx: uniqueIndex("username_idx").on(comments.author_id),
    };
  }
);
export const commentsRelations = relations(commentsTable, ({ one }) => ({
  author: one(users.usersTable, {
    fields: [commentsTable.author_id],
    references: [users.usersTable.id],
  }),
  posts: one(posts.postsTable, {
    fields: [commentsTable.post_id],
    references: [posts.postsTable.id],
  }),
}));

export const insertCommentSchema = createInsertSchema(commentsTable, {
  author_id: z.number().int(),
  body: z.string().nonempty().min(3).max(140),
});

export const selectCommentSchema = createSelectSchema(commentsTable);

export type Comment = InferModel<typeof commentsTable>;
export type NewComment = InferModel<typeof commentsTable, "insert">;

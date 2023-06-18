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
import * as users from "./users";
import * as comments from "./comments";
import * as lists from "./lists";

export const postsTable = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    subject: text("subject").notNull(),
    tags: text("tags").array().notNull(),
    image: text("image").notNull(),
    author_id: integer("author").notNull(),
    votes: integer("votes").default(0).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (posts) => {
    return {
      titleIdx: uniqueIndex("title_idx").on(posts.title),
    };
  }
);
//subject and tags will need to reference relation their own tables
export const postsRelations = relations(postsTable, ({ one, many }) => ({
  author: one(users.usersTable, {
    fields: [postsTable.id],
    references: [users.usersTable.id],
  }),
  comments: many(comments.commentsTable),
  postsToTags: many(lists.tagsTable),
  postsToSubjects: many(lists.subjectsTable),
}));

export const insertPostSchema = createInsertSchema(postsTable, {
  title: z.string().nonempty().min(3).max(100),
  subject: z.string().nonempty().min(3).max(100),
  tags: z.string().array(),
  image: z.string().optional(),
  author_id: z.number().int(),
  votes: z.number().int(),
});

export const selectPostSchema = createSelectSchema(postsTable);

export type Post = InferModel<typeof postsTable>;
export type NewPost = InferModel<typeof postsTable, "insert">;
export type PostWithCommentCount = Post & { comment_count: number };

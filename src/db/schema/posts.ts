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

// TODO: Figure out enums later
// TODO: Relations, are they setup correctly. I think so, but not sure

export const postsTable = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    subject: text("subject").notNull(),
    tags: text("tags").array().notNull(), //keep an eye on this, might bug out, doesn't accept default values
    image: text("image").notNull(),
    author: text("author").notNull(),
    votes: integer("votes").default(0).notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (posts) => {
    return {
      titleIdx: uniqueIndex("title_idx").on(posts.title),
    };
  }
);

export const postsRelations = relations(postsTable, ({ one }) => ({
  author: one(users.usersTable, {
    fields: [postsTable.id],
    references: [users.usersTable.id],
  }),
}));

export const insertPostSchema = createInsertSchema(postsTable, {
  title: z.string().nonempty().min(3).max(100),
  subject: z.string().nonempty().min(3).max(100),
  tags: z.string().array(),
  image: z.string().optional(),
  author: z.string().nonempty().min(3).max(100),
  votes: z.number().int(),
});

export const selectPostSchema = createSelectSchema(postsTable);

export type Post = InferModel<typeof postsTable>;
export type NewPost = InferModel<typeof postsTable, "insert">;

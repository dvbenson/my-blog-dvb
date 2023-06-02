import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  PgArray,
} from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";

export const PostsTable = pgTable(
  "posts",
  {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    topics: text("topics").notNull(),
    image: text("image").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (posts) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(posts.title),
    };
  }
);

export type Post = InferModel<typeof PostsTable>;
export type NewPost = InferModel<typeof PostsTable, "insert">;

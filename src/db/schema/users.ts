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

//TODO: Figure out enums later

export const usersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    image: text("image").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
  },
  (users) => {
    return {
      emailIdx: uniqueIndex("email_idx").on(users.email),
    };
  }
);

export const usersRelations = relations(usersTable, ({ many }) => ({
  posts: many(posts.postsTable),
}));

export const insertUserSchema = createInsertSchema(usersTable, {
  name: z.string().nonempty().min(3).max(200),
  email: z.string().email().min(5),
  password: z.string().nonempty().min(8),
  image: z.string().optional(),
});

export const selectUserSchema = createSelectSchema(usersTable);

export type User = InferModel<typeof usersTable>;
export type NewUser = InferModel<typeof usersTable, "insert">;

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

//TAGS
export const tagsTable = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const tagsRelations = relations(tagsTable, ({ many }) => ({
  posts: many(posts.postsTable),
}));

export const insertTagSchema = createInsertSchema(tagsTable, {
  name: z.string().nonempty().min(3).max(200),
});

export const selectTagSchema = createSelectSchema(tagsTable);

export type Tag = InferModel<typeof tagsTable>;
export type NewTag = InferModel<typeof tagsTable, "insert">;

//SUBJECT
export const subjectsTable = pgTable("subjects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const subjectsRelations = relations(subjectsTable, ({ many }) => ({
  posts: many(posts.postsTable),
}));

export const insertSubjectSchema = createInsertSchema(subjectsTable, {
  name: z.string().nonempty().min(3).max(200),
});

export const selectSubjectSchema = createSelectSchema(subjectsTable);

export type Subject = InferModel<typeof subjectsTable>;
export type NewSubject = InferModel<typeof subjectsTable, "insert">;

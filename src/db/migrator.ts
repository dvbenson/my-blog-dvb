import { db } from "./db";
import { migrate as migrateVercel } from "drizzle-orm/vercel-postgres/migrator";
import { migrate as migrateNode } from "drizzle-orm/node-postgres/migrator";

export async function dbMigrate() {
  if (process.env.VERCEL_ENV) {
    await migrateVercel(db, { migrationsFolder: "./drizzle" });
  } else {
    await migrateNode(db, { migrationsFolder: "./drizzle" });
  }
}

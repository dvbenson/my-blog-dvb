import { db } from "./db";
import { migrate } from "drizzle-orm/node-postgres/migrator";

export async function dbMigrate() {
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Migrations complete");
    process.exit(0);
  } catch (e) {
    console.error("Migration error: ", e);
    process.exit(0);
  }
}

dbMigrate();

import { sql as sqlVercel } from "@vercel/postgres";
import { drizzle as drizzleVercel } from "drizzle-orm/vercel-postgres";
import { drizzle as drizzleNode } from "drizzle-orm/node-postgres";

import { Client } from "pg";

export const db = process.env.VERCEL_ENV
  ? drizzleVercel(sqlVercel)
  : drizzleNode(new Client({ connectionString: process.env.DB_NAME }));

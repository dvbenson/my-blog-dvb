import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

//TODO: need to come back to this and establish .env files for prod/dev

const pool = new Pool({
  connectionString:
    "postgres://badsauce:postgres@127.0.0.1:5432/my_special_blog_dvb_dev",
});

export const db = drizzle(pool);

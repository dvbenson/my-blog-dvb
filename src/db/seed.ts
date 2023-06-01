import { sql } from "@vercel/postgres";
import { db } from "./drizzle";
import { UsersTable, User, NewUser } from "./drizzle";

const newUsers: NewUser[] = [
  {
    name: "Daniel Benson",
    email: "danielvb@danielvb.dev",
    password: "password123",
    image: "https://avatars.githubusercontent.com/u/112098121?v=4",
  },
];

export async function seed() {
  // Create table with raw SQL
  const createTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
  console.log(`Created "users" table`);

  const insertedUsers: User[] = await db
    .insert(UsersTable)
    .values(newUsers)
    .returning();
  console.log(`Seeded ${insertedUsers.length} users`);

  return {
    createTable,
    insertedUsers,
  };
}

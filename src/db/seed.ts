import { sql } from "@vercel/postgres";
import { db } from "./drizzle";
import * as PostsSchema from "./schema/posts";
import * as CommentsSchema from "./schema/comments";
import * as UserSchema from "./schema/users";

const newUsers: UserSchema.NewUser[] = [
  {
    name: "Daniel Benson",
    email: "danielvb@danielvb.dev",
    // password: "password123",
    image: "https://avatars.githubusercontent.com/u/112098121?v=4",
  },
];

const newPosts: PostsSchema.NewPost[] = [
  {
    title: "My first post",
    topics: "Things",
    image: "https://cdn-icons-png.flaticon.com/128/4570/4570691.png",
  },
];

const newComments: CommentsSchema.NewComment[] = [
  {
    username: "Daniel Benson",
    body: "Hello World",
  },
];

export async function seed() {
  // Create table with raw SQL
  const createUserTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        
        image VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
  console.log(`Created "users" table`);

  const createPostsTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        topics VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
  console.log(`Created "posts" table`);

  const createCommentsTable = await sql.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        body VARCHAR(255) NOT NULL,
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
  `);
  console.log(`Created "comments" table`);

  const insertedUsers: UserSchema.User[] = await db
    .insert(UserSchema.UsersTable)
    .values(newUsers)
    .returning();
  console.log(`Seeded ${insertedUsers.length} users`);

  const insertedPosts: PostsSchema.Post[] = await db
    .insert(PostsSchema.PostsTable)
    .values(newPosts)
    .returning();
  console.log(`Seeded ${insertedPosts.length} posts`);

  const insertedComments: CommentsSchema.Comment[] = await db
    .insert(CommentsSchema.CommentsTable)
    .values(newComments)
    .returning();
  console.log(`Seeded ${insertedComments.length} comments`);

  return {
    createUserTable,
    createPostsTable,
    createCommentsTable,
    insertedUsers,
    insertedPosts,
    insertedComments,
  };
}

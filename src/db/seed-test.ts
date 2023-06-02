import { sql } from "@vercel/postgres";
import { db } from "./db";
import * as PostsSchema from "./schema/posts";
import * as CommentsSchema from "./schema/comments";
import * as UserSchema from "./schema/users";
import { dbMigrate } from "./migrator";

const newUsers: UserSchema.NewUser[] = [
  {
    name: "Daniel Benson",
    email: "danielvb@danielvb.dev",
    password: "password123",
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

  await dbMigrate();

  return {
    insertedUsers,
    insertedPosts,
    insertedComments,
  };
}

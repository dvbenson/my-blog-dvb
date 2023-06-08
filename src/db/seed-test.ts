import { db } from "./db";
import * as PostsSchema from "./schema/posts";
import * as CommentsSchema from "./schema/comments";
import * as UserSchema from "./schema/users";
import { z } from "zod";

const newUsers: UserSchema.NewUser[] = [
  {
    name: "Buzz Lightyear",
    email: "buzz.ly@spacecommand.star",
    role: "admin",
    password: "zergmustdie123",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/open-uri20150422-20810-a07syh_9331bd0a.jpeg?region=0%2C0%2C450%2C450",
  },
];

UserSchema.insertUserSchema.parse(newUsers);

const newPosts: PostsSchema.NewPost[] = [
  {
    title: "Why the threat of Emperor Zerg is real",
    subject: "Space-Rangers",
    tags: ["Zerg", "Space", "Rangers"],
    image: "https://cdn-icons-png.flaticon.com/128/4570/4570691.png",
    author_id: 1,
  },
];

PostsSchema.insertPostSchema.parse(newPosts);

const newComments: CommentsSchema.NewComment[] = [
  {
    post_id: 1,
    author_id: 1,
    body: "Hello World... RAWR!",
  },
];

CommentsSchema.insertCommentSchema.parse(newComments);

export async function seedTest() {
  const insertedUsers: UserSchema.User[] = await db
    .insert(UserSchema.usersTable)
    .values(newUsers)
    .returning();
  console.log(`Seeded ${insertedUsers.length} users`);

  const insertedPosts: PostsSchema.Post[] = await db
    .insert(PostsSchema.postsTable)
    .values(newPosts)
    .returning();
  console.log(`Seeded ${insertedPosts.length} posts`);

  const insertedComments: CommentsSchema.Comment[] = await db
    .insert(CommentsSchema.commentsTable)
    .values(newComments)
    .returning();
  console.log(`Seeded ${insertedComments.length} comments`);
  console.log("Test Data Seed Complete");
  return {
    insertedUsers,
    insertedPosts,
    insertedComments,
  };
}

seedTest();

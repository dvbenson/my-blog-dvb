import { db } from "./db";
import * as PostsSchema from "./schema/posts";
import * as CommentsSchema from "./schema/comments";
import * as UserSchema from "./schema/users";

// TODO: Zod validations?
// TODO: Figure out how to use zod with drizzle-orm
// TODO: What would it look like with tRPC?
// TODO: Think about ways of making this more dynamic && less verbose
// TODO: process arrays?

const newUser: UserSchema.NewUser = {
  name: "Daniel VB",
  email: "danielvb@danielvb.dev",
  role: "admin",
  password: "password123",
  image: "https://avatars.githubusercontent.com/u/112098121?v=4",
};
//const validatedUser = UserSchema.insertUserSchema.parse(newUser);

const newPost: PostsSchema.NewPost = {
  title: "My first post",
  subject: "Learning",
  tags: ["New things I learned"],
  image: "https://cdn-icons-png.flaticon.com/128/4149/4149646.png",
  author_id: 1,
};

const validatedPost = PostsSchema.insertPostSchema.parse(newPost);

const newComment: CommentsSchema.NewComment = {
  post_id: 1,
  author_id: 1,
  body: "Hello World",
};
////const validatedComment = CommentsSchema.insertCommentSchema.parse(newComment);

export async function seed() {
  const insertedUser: UserSchema.User[] = await db
    .insert(UserSchema.usersTable)
    .values(newUser)
    .returning();
  console.log(`Inserted Users`);

  const insertedPost: PostsSchema.Post[] = await db
    .insert(PostsSchema.postsTable)
    .values(newPost)
    .returning();
  console.log(`Inserted Posts`);

  const insertedComment: CommentsSchema.Comment[] = await db
    .insert(CommentsSchema.commentsTable)
    .values(newComment)
    .returning();
  console.log(`Inserted Comments`);

  console.log("Development Data Seed Complete");

  return {
    insertedUser,
    insertedPost,
    insertedComment,
  };
}

seed();

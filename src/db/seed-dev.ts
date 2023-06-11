import { db } from "./db";
import * as devData from "./data/index";
import * as PostsSchema from "./schema/posts";
import * as CommentsSchema from "./schema/comments";
import * as UserSchema from "./schema/users";
import * as ListsSchema from "./schema/lists";

export async function seed() {
  const insertedUser: UserSchema.User[] = await db
    .insert(UserSchema.usersTable)
    .values(devData.userData)
    .returning();
  console.log(`Inserted Users`);

  const insertedPost: PostsSchema.Post[] = await db
    .insert(PostsSchema.postsTable)
    .values(devData.postData)
    .returning();
  console.log(`Inserted Posts`);

  const insertedComment: CommentsSchema.Comment[] = await db
    .insert(CommentsSchema.commentsTable)
    .values(devData.commentData)
    .returning();
  console.log(`Inserted Comments`);

  const insertedSubject: ListsSchema.Subject[] = await db
    .insert(ListsSchema.subjectsTable)
    .values(devData.subjectsData)
    .returning();
  console.log(`Inserted Subjects`);

  const insertedTag: ListsSchema.Tag[] = await db
    .insert(ListsSchema.tagsTable)
    .values(devData.tagsData)
    .returning();
  console.log(`Inserted Tags`);

  console.log("Development Data Seed Complete");

  return {
    insertedUser,
    insertedPost,
    insertedComment,
    insertedSubject,
    insertedTag,
  };
}

seed();

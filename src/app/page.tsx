import { db } from "#/src/db/db";
import { timeAgo } from "#/src/db/utils";
import Image from "next/image";
import { seed } from "#/src/db/seed-prod";
import * as PostsSchema from "#/src/db/schema/posts";
import * as CommentsSchema from "#/src/db/schema/comments";
import * as UserSchema from "#/src/db/schema/users";
import NavBar from "../ui/NavBar";

export default async function Page() {
  let users;
  let posts;
  let comments;
  let startTime = Date.now();
  try {
    comments = await db.select().from(CommentsSchema.CommentsTable);
    users = await db.select().from(UserSchema.UsersTable);
    posts = await db.select().from(PostsSchema.PostsTable);
  } catch (e: any) {
    if (
      e.message === `relation "users" does not exist` ||
      e.message === `relation "posts" does not exist` ||
      e.message === `relation "comments" does not exist`
    ) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      startTime = Date.now();
      users = await db.select().from(UserSchema.UsersTable);
      posts = await db.select().from(PostsSchema.PostsTable);
      comments = await db.select().from(CommentsSchema.CommentsTable);
    } else {
      throw e;
    }
  }

  const duration = Date.now() - startTime;

  return (
    <>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-center">danielvb.dev BLOG</h1>
          <div className="divide-y divide-gray-900/5">
            {users.map((user) => (
              <div
                key={user.name}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={48}
                    height={48}
                    className="rounded-full ring-1 ring-gray-900/5"
                  />
                  <div className="space-y-1">
                    <p className="font-medium leading-none">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  {timeAgo(user.createdAt)}
                </p>
                <div>{posts[0]}</div>
                <div>{comments[0]}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

import { db } from "#/src/db/drizzle";
import { timeAgo } from "#/src/db/utils";
import Image from "next/image";
import { seed } from "#/src/db/seed";
import * as PostsSchema from "#/src/db/schema/posts";
import * as CommentsSchema from "#/src/db/schema/comments";
import * as UserSchema from "#/src/db/schema/users";

export default async function Page() {
  let users;
  let startTime = Date.now();
  try {
    users = await db.select().from(UserSchema.UsersTable);
  } catch (e: any) {
    if (e.message === `relation "users" does not exist`) {
      console.log(
        "Table does not exist, creating and seeding it with dummy data now..."
      );
      // Table is not created yet
      await seed();
      startTime = Date.now();
      users = await db.select().from(UserSchema.UsersTable);
    } else {
      throw e;
    }
  }

  const duration = Date.now() - startTime;

  return (
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
              <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

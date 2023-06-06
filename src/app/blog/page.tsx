import { db } from "../../db/db";
import { Post, postsTable } from "../../db/schema/posts";
import { Comment, commentsTable } from "../../db/schema/comments";

export default async function Blog() {
  const posts: Post[] = await db.select().from(postsTable);
  const comments: Comment[] = await db.select().from(commentsTable);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid grid-cols-1 place-items-center">
          <h1 className="text-center">DA BLOG</h1>
          <p className="text-center">{posts[0].title}</p>
          <p className="text-center">{comments[0].body}</p>
        </div>
      </main>
    </>
  );
}

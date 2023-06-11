import { sql, eq } from "drizzle-orm";
import { Post, PostWithCommentCount, postsTable } from "#/src/db/schema/posts";
import { db } from "#/src/db/db";
import { NextResponse } from "next/server";
import * as comments from "#/src/db/schema/comments";

//GET ALL POSTS **WORKING**
export async function GET(request: Request) {
  try {
    const posts: PostWithCommentCount[] = await db
      .select({
        id: postsTable.id,
        title: postsTable.title,
        subject: postsTable.subject,
        tags: postsTable.tags,
        image: postsTable.image,
        author_id: postsTable.author_id,
        votes: postsTable.votes,
        createdAt: postsTable.createdAt,
        comment_count: sql<number>`COUNT(${comments.commentsTable.post_id})`.as(
          "comment_count"
        ),
      })
      .from(postsTable)
      .leftJoin(
        comments.commentsTable,
        eq(postsTable.id, comments.commentsTable.post_id)
      )
      .groupBy(postsTable.id);

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//POST NEW POST **WORKING**
export async function POST(request: Request) {
  try {
    const { title, subject, tags, image, author_id }: Post =
      await request.json();

    const newPost = await db
      .insert(postsTable)
      .values({
        title: title,
        subject: subject,
        tags: tags,
        image: image,
        author_id: author_id,
      })
      .returning();

    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

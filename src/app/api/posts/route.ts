import { Post, postsTable } from "#/src/db/schema/posts";
import { db } from "#/src/db/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET ALL POSTS

export async function GET(request: Request) {
  try {
    const posts: Post[] = await db.select().from(postsTable);

    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//POST NEW POST
//TODO: make util that checks all necessary props are present
//Error Handling

export async function POST(request: Request) {
  try {
    const { title, subject, tags, image, author }: Post = await request.json();

    const newPost = await db
      .insert(postsTable)
      .values({
        title: title,
        subject: subject,
        tags: tags,
        image: image,
        author: author,
      })
      .returning();

    return NextResponse.json(newPost);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

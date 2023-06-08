import { Post, postsTable } from "#/src/db/schema/posts";
import { db } from "#/src/db/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET: api/posts/:id/comments
export async function GET(request: Request) {
  try {
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }

    const response: Post[] = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id));

    if (response.length === 0)
      return NextResponse.json({ error: "Post not found" });

    const user = NextResponse.json(response[0]);

    return user;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

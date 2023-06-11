import { Comment, commentsTable } from "#/src/db/schema/comments";
import { db } from "#/src/db/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET: api/posts/:id/comments
export async function GET(request: Request) {
  try {
    const url = request.url;
    const match = url.match(/\/(\d+)\//);
    const id = match ? parseInt(match[1]) : null;

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }

    const response: Comment[] = await db
      .select()
      .from(commentsTable)
      .where(eq(commentsTable.post_id, id));

    if (response.length === 0)
      return NextResponse.json({ error: "Post not found" });

    const user = NextResponse.json(response);

    return user;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

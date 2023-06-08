import { Comment, commentsTable } from "#/src/db/schema/comments";
import { db } from "#/src/db/db";
import { NextResponse } from "next/server";

//GET ALL COMMENTS
//**WORKING**
export async function GET(response: NextResponse) {
  try {
    const comments: Comment[] = await db.select().from(commentsTable);

    return NextResponse.json(comments);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//POST COMMENT
//**WORKING**
//TODO: make util that checks all necessary props are present
export async function POST(request: Request) {
  try {
    const { post_id, author_id, body }: Comment = await request.json();

    const newComment = await db
      .insert(commentsTable)
      .values({
        post_id: post_id,
        author_id: author_id,
        body: body,
      })
      .returning();

    return NextResponse.json(newComment);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

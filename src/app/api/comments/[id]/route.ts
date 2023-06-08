import { Comment, commentsTable } from "#/src/db/schema/comments";
import { db } from "#/src/db/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET COMMENT BY ID
//**WORKING**
export async function GET(request: Request) {
  try {
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }

    const response: Comment[] = await db
      .select()
      .from(commentsTable)
      .where(eq(commentsTable.id, id));

    if (response.length === 0)
      return NextResponse.json({ error: "Comment not found" });

    const user = NextResponse.json(response[0]);

    return user;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//PATCH COMMENT BY ID
//**WORKING**
export async function PATCH(request: Request) {
  try {
    //TODO: make util that checks if user exists
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));
    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }
    //TODO: make util that checks if these args are allowed
    //TODO: error saying "props not here"
    const { body }: Comment = await request.json();

    const updatedComment = await db
      .update(commentsTable)
      .set({
        body: body,
      })
      .where(eq(commentsTable.id, id))
      .returning();

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//DELETE COMMENT BY ID
//**WORKING**
export async function DELETE(request: Request) {
  try {
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }

    const deletedComment = await db
      .delete(commentsTable)
      .where(eq(commentsTable.id, id))
      .returning();

    if (deletedComment.length === 0) {
      return NextResponse.json({ error: "Comment not found" });
    }
    return NextResponse.json({
      message: `Comment deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

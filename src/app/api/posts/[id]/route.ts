import { Post, postsTable } from "#/src/db/schema/posts";
import { db } from "#/src/db/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET POST BY ID

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

//PATCH POST BY ID

export async function PATCH(request: Request) {
  try {
    //TODO: make util that checks if user exists
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));
    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }
    //TODO: make util that checks if these args are allowed
    //TODO: error saying "props not here"
    const { title, subject, tags, image }: Post = await request.json();

    const updatedPost = await db
      .update(postsTable)
      .set({
        title: title,
        subject: subject,
        tags: tags,
        image: image,
      })
      .where(eq(postsTable.id, id))
      .returning({ title: postsTable.title });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//DELETE USER BY ID

export async function DELETE(request: Request) {
  try {
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }

    const deletedUser = await db
      .delete(usersTable)
      .where(eq(usersTable.id, id))
      .returning({ name: usersTable.name });

    if (deletedUser.length === 0) {
      return NextResponse.json({ error: "User not found" });
    }
    return NextResponse.json({
      message: `Deleted successfully`,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

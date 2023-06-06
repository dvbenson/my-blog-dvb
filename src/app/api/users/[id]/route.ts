import { User, usersTable } from "#/src/db/schema/users";
import { db } from "#/src/db/db";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

//GET USER BY ID

export async function GET(request: Request) {
  try {
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }

    const response: User[] = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));

    if (response.length === 0)
      return NextResponse.json({ error: "User not found" });

    const user = NextResponse.json(response[0]);

    return user;
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//PATCH USER BY ID

export async function PATCH(request: Request) {
  try {
    //TODO: make util that checks if user exists
    const id = parseInt(request.url.slice(request.url.lastIndexOf("/") + 1));
    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" });
    }
    //TODO: make util that checks if these args are allowed
    const { name, role, email, password, image }: User = await request.json();

    const updatedUser = await db
      .update(usersTable)
      .set({
        name: name,
        role: role,
        email: email,
        password: password,
        image: image,
      })
      .where(eq(usersTable.id, id))
      .returning();

    return NextResponse.json(updatedUser);
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

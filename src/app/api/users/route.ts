import { User, usersTable } from "#/src/db/schema/users";
import { db } from "#/src/db/db";
import { NextResponse } from "next/server";

//GET ALL USERS
export async function GET(response: NextResponse) {
  try {
    const users: User[] = await db.select().from(usersTable);

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

//POST USER
//TODO: make util that checks all necessary props are present

export async function POST(request: Request) {
  try {
    const { name, role, email, password, image }: User = await request.json();

    const newUser = await db
      .insert(usersTable)
      .values({
        name: name,
        role: role,
        email: email,
        password: password,
        image: image,
      })
      .returning({ name: usersTable.name });

    return NextResponse.json(newUser);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}

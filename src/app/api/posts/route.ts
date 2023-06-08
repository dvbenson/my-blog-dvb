import { Post, postsTable } from "#/src/db/schema/posts";
import { db } from "#/src/db/db";
import { NextResponse } from "next/server";

//GET ALL POSTS
//**WORKING**
//TODO: Error Handling?
//TODO: search by tags, search by topics
//RAW SQL for guide
// if (topic) {
//   queryParams.push(topic);
//   selectQuery += `
//     WHERE topic LIKE $1
//     GROUP BY (articles.article_id)
//     ORDER BY ${sort_by} ${order}
//     `;
//   if (limit && p) {
//     queryParams.push(limit, p);
//     selectQuery += `
//   LIMIT ${limit}
//   OFFSET ${p}
//   `;
//   }
// } else {
//   selectQuery += `
//     GROUP BY (articles.article_id)
//     ORDER BY ${sort_by} ${order}
//     `;
// }
//TODO: COUNT comments.post_id AS comment_count
//RAW SQL for guide
// let selectQuery = `
//     SELECT articles.*,
//     COUNT (comments.article_id) as comment_count
//     FROM articles
//     LEFT JOIN comments
//     ON articles.article_id = comments.article_id
//     `;

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
//**WORKING**
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

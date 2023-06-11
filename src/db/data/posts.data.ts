import { NewPost } from "../schema/posts";

const postData: NewPost[] = [
  {
    title: "My first post",
    subject: "Learning",
    tags: ["Egg, Frog, Dog"],
    image: "https://cdn-icons-png.flaticon.com/128/4149/4149646.png",
    author_id: 1,
  },

  {
    title: "My second post",
    subject: "Thinking",
    tags: ["Dog, Frog"],
    image: "https://cdn-icons-png.flaticon.com/128/4149/4149646.png",
    author_id: 1,
  },

  {
    title: "My third post",
    subject: "Doing",
    tags: ["Egg, Frog, Cat"],
    image: "https://cdn-icons-png.flaticon.com/128/4149/4149646.png",
    author_id: 1,
  },
];

export default postData;

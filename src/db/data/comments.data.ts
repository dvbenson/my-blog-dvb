import { NewComment } from "../schema/comments";

const commentData: NewComment[] = [
  {
    post_id: 1,
    author_id: 1,
    body: "Hello World",
    votes: 5,
  },

  {
    post_id: 1,
    author_id: 1,
    body: "Chao World",
    votes: -2,
  },

  {
    post_id: 1,
    author_id: 1,
    body: "Get Lost World",
    votes: 1,
  },

  {
    post_id: 2,
    author_id: 1,
    body: "No, World",
    votes: 0,
  },

  {
    post_id: 2,
    author_id: 1,
    body: "Howdy, World",
    votes: -10,
  },

  {
    post_id: 3,
    author_id: 1,
    body: "Heya, sup,  World",
    votes: 12,
  },
];

export default commentData;

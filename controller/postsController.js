import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  const posts = await Post.findAll();
  res.json({ posts });
};

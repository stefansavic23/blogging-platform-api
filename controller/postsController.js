import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json({ posts });
  } catch (err) {
    res.json({ message: "No post available." });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const post = await Post.create({ title, content, category, tags });

    res.status(201).json({ message: "Post created successfully!" });
  } catch (err) {
    res.json({ message: "Failed with creating post!" });
  }
};

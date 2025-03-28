import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json({ posts });
  } catch (err) {
    res.json({ message: "No post available" });
  }
};

export const getPostByID = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) return res.status(404).json({ message: "404 Post Not Found" });

    res.status(200).json({ post });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    const post = await Post.create({ title, content, category, tags });

    res.status(201).json({ message: "Post created successfully" });
  } catch (err) {
    res.json({ message: "Failed with creating post" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, tags } = req.body;

    const postToUpdate = await Post.findByPk(id);

    if (!postToUpdate)
      return res.status(404).json({ message: "404 Post Not Found" });

    const updatedPost = await Post.update(
      {
        title,
        content,
        category,
        tags,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const postToDelete = await Post.findByPk(id);

    if (!postToDelete)
      return res.status(404).json({ message: "404 Post Not Found" });

    const deletedPost = await postToDelete.destroy();
    res.status(204).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: "404 Post Not Found" });
  }
};

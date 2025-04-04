import express from "express";

import {
  getPosts,
  getPostByID,
  getPostByTag,
  updatePost,
  createPost,
  deletePost,
} from "../controller/postsController.js";

const router = express.Router();

router.get("/all", getPosts);
router.get("/", getPostByTag);
router.get("/:id", getPostByID);

router.post("/", createPost);

router.put("/:id", updatePost);

router.delete("/:id", deletePost);

export default router;

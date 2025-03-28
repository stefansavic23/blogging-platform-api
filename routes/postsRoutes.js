import express from "express";

import {
  getPosts,
  getPostByID,
  createPost,
  deletePost,
} from "../controller/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostByID);

router.post("/", createPost);

router.delete("/:id", deletePost);

export default router;

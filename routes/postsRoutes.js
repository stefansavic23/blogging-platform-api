import express from "express";

import {
  getPosts,
  getPostByID,
  createPost,
} from "../controller/postsController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostByID);

router.post("/", createPost);

export default router;

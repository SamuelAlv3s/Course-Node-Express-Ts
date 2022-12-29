import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} from "../controllers/blog";

const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/", deleteBlog);

export { router };

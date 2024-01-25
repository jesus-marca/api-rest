import { Router } from "express";
import { deleteBlog, getBlogs, postBlog, updateBlog } from "../controllers/blog";
const router = Router();
export { router };

router.get("/",getBlogs)
router.get("/:id",getBlogs)
router.post("/",postBlog)
router.put("/:id",updateBlog)
router.delete("/:id",deleteBlog)
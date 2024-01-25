import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "err_get_Blog");
  }
};

const getBlogs = (req: Request, res: Response) => {
  try {

  } catch (e) {
    handleHttp(res, "err_get_Blogs");
  }
};

const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "err_update_Blog");
  }
};

const postBlog = ({body}: Request, res: Response) => {
  try {
   
    res.send(body);
    console.log(body)
  } catch (e) {
    handleHttp(res, "err_pos_Blog");
  }
};

const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "err_delete_Blog");
  }
};

export { getBlog, getBlogs, postBlog, deleteBlog, updateBlog };

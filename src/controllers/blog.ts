import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

const createBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Post Blog");
  }
};
const getBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Get Blog");
  }
};
const getBlogs = (req: Request, res: Response) => {
  try {
    res.send("Itens");
  } catch (error) {
    handlerHttp(res, "Error Get Itens");
  }
};
const updateBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Update Blog");
  }
};
const deleteBlog = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Delete Blog");
  }
};

export { createBlog, getBlog, getBlogs, updateBlog, deleteBlog };

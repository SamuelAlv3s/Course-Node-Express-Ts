import { Request, Response } from "express";
import { handlerHttp } from "../utils/error.handler";

const createItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Post Item");
  }
};
const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Get Item");
  }
};
const getItens = (req: Request, res: Response) => {
  try {
    res.send("Itens");
  } catch (error) {
    handlerHttp(res, "Error Get Itens");
  }
};
const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Update Item");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handlerHttp(res, "Error Delete Item");
  }
};

export { createItem, getItem, getItens, updateItem, deleteItem };

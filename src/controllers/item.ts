import { Request, Response } from "express";
import {
  insertCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from "../services/item";
import { handlerHttp } from "../utils/error.handler";

const createItem = async (req: Request, res: Response) => {
  try {
    const response = await insertCar(req.body);
    res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Post Item");
  }
};
const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await getCarById(id);
    res.send(response || { message: "Item not found" });
  } catch (error) {
    handlerHttp(res, "Error Get Item");
  }
};
const getItens = async (req: Request, res: Response) => {
  try {
    const response = await getAllCars();
    res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Get Itens");
  }
};
const updateItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await updateCar(id, req.body);
    res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Update Item");
  }
};
const deleteItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await deleteCar(id);
    res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Delete Item");
  }
};

export { createItem, getItem, getItens, updateItem, deleteItem };

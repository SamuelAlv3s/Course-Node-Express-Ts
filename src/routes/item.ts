import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItens,
  createItem,
  updateItem,
} from "../controllers/item.controller";
import { logMiddleware } from "../middlewares/log";

const router = Router();

router.get("/", getItens);
router.get("/:id", logMiddleware, getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export { router };

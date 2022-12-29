import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItens,
  createItem,
  updateItem,
} from "../controllers/item";

const router = Router();

router.get("/", getItens);
router.get("/:id", getItem);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/", deleteItem);

export { router };

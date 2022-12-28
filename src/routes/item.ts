import { Router } from "express";

const router = Router();

router.get("/items", (req, res) => {
  res.send("Hello World!");
});

export { router };

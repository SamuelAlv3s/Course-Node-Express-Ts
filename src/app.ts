import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./routes";

import db from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(router);

db().then(() => {
  console.log("Connected to MongoDB");
});

app.use(
  cors({
    origin: ["*"],
  })
);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

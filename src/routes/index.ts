import { Router } from "express";
import { readdirSync } from "fs";

const router = Router();

const path = __dirname;

const cleanFilename = (filename: string) => {
  return filename.replace(/\.ts$/, "");
};

readdirSync(path).forEach((file) => {
  const filename = cleanFilename(file);

  if (filename !== "index") {
    import(`./${filename}`).then((module) => {
      router.use(`/${filename}`, module.router);
    });
  }
});

export { router };

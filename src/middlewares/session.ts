import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handler";

const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const jwt = req.headers.authorization || null;

    if (!jwt) throw new Error("No token provided");

    const isValid = verifyToken(jwt);

    if (!isValid) throw new Error("Invalid session");

    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid session" });
  }
};

export { sessionMiddleware };

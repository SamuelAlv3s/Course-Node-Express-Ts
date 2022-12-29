import { Router } from "express";
import { signinCtrl, signupCtrl } from "../controllers/auth.controller";

const router = Router();

router.post("/signin", signinCtrl);
router.post("/signup", signupCtrl);

export { router };

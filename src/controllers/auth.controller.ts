import { Request, Response } from "express";
import { signup } from "../services/auth.service";
import { handlerHttp } from "../utils/error.handler";

const signupCtrl = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const response = await signup({ email, password });
    // const response = await insertCar(req.body);
    // res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Signup");
  }
};

const signinCtrl = async (req: Request, res: Response) => {
  try {
    // const response = await insertCar(req.body);
    // res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Signin");
  }
};

export { signupCtrl, signinCtrl };

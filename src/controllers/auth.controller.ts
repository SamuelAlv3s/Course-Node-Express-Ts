import { Request, Response } from "express";
import { signin, signup } from "../services/auth.service";
import { handlerHttp } from "../utils/error.handler";

const signupCtrl = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const response = await signup({ email, password, name });
    res.send(response);
  } catch (error) {
    handlerHttp(res, "Error Signup");
  }
};

const signinCtrl = async (req: Request, res: Response) => {
  try {
    const response = await signin(req.body);
    res.send(response);
  } catch (error) {
    console.log(error);

    handlerHttp(res, "Error Signin");
  }
};

export { signupCtrl, signinCtrl };

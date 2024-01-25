import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth";

const registerCrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerUser(body);
  res.send(responseUser);
};
const loginCrl = async ({ body }: Request, res: Response) => {
  //   const responseUser = await loginUser();
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "password_incorrect") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerCrl, loginCrl };

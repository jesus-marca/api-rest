import { NextFunction, Request, Response } from "express";

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log("middleware fase1");
  //el middleware permite continuacion para ejecutar el contraolador en las rutas
  const header = req.headers;
  const userAgent = header["user-agent"];
  console.log(userAgent);
  next();
};
export { logMiddleware };

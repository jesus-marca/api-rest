import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jws.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";
// interface RequestExt extends Request {
//   user?: string|JwtPayload;
// }

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop(); //['bearesr','111'] pop toma el ultimo valor
    const isUser = verifyToken(`${jwt}`) as {id:string}; //:) retorna el dato el payload
    if (!isUser) {
      res.status(401);
      res.send("not_jwt_valid");
    } else {
        req.user=isUser
      console.log(isUser);
      console.log({ jwtByUser });
      next();
    }
  } catch (e) {
    console.log(e);
    res.status(400).send("Session_not_valid");
  }
};
export { checkJwt };

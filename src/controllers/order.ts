import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/req-ext";

const getItems = async (req: RequestExt, res: Response) => {
  try {
    res.send({ data: "estos solo lo ven las personas con sesion/jwt valido",user:req?.user });
  } catch (e) {
    handleHttp(res, "err_get_items");
  }
};

export { getItems };

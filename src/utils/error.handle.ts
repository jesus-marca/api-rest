import { Request, Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500).json({
    err: error,
  });
};

export { handleHttp };

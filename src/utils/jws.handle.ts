//se encarga de genera un jwt json web tokken
import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "token123123";
const generateToken = async (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "1h" });
  return jwt;
};
const verifyToken = (jwt: string) => {
  const isOk =  verify(jwt, JWT_SECRET);
  return isOk;
};

export { generateToken, verifyToken };

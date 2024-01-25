import { Request, Response, Router } from "express";
import { registerCrl,loginCrl } from "../controllers/auth";
const router = Router();
/**
 * http://localhost:3002/auth/register [POST]
 */
router.post("/register",registerCrl);
router.post("/login",loginCrl);

export { router };

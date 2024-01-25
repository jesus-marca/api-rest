import { Router } from "express";
import { getFile } from "../controllers/upload"; 
import multerMiddelware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = Router();
router.post("/",checkJwt, multerMiddelware.single("myfile"), getFile);
export { router };

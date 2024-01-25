import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";
/**
 * esta ruta solo pueden acceder que tengan sesion activa osea un jwt valido
 */
const router = Router();
router.get('/',checkJwt,getItems)
export { router };

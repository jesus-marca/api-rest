import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes/";
import db from "./config/mongo";

const app = express();
//los cors permiten consumir la api desde un dominio`
app.use(cors()); //puede ser consumida por cualquier origen
//app.use(cors({})) tambien se puede especificar el dominio
const PORT = process.env.PORT || 3001; //puerto en la variable de entorno PORT o puerto 3001
app.use(express.json());//colocar antes porque se va usar en router
app.use(router);
db().then(() => console.log("conexion lista"));
app.listen(PORT, () => {
  console.log(`listo el puerto ${PORT}`);
});

import { Router } from "express";
import { readdirSync } from "fs";
const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 *
 * index.ts item
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};
//escaner cuantos archivos existen en el directorio actual(rutas) array y luego un filename
readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);
//   console.log(cleanFileName(filename));
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter)=>{
        console.log(cleanFileName(filename));
        router.use(`/${cleanName}`,moduleRouter.router)
    })
    // router.use(`/${cleanName}`)
  }
});

export { router };

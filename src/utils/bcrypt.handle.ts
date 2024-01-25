import { hash, compare } from "bcryptjs";

const encrpyt = async (pass: string) => {
  //primer argunmento la pass plana y el segundo el sal que es la aleteoridad
  const passHash = await hash(pass, 8);
  return passHash;
};
const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};
export { encrpyt, verified };

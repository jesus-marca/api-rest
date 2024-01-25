import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrpyt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jws.handle";



const registerUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALready_user";

  const passHash = await encrpyt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "not_found_user";
  const passwordHash = checkIs.password; //TODO el encriptado
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "password_incorrect";
  const token = generateToken(checkIs.email);
  console.log(token);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};
export { registerUser, loginUser };

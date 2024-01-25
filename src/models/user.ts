import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    description: {
      default:"descripcion general",
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique:true
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const UserModel = model("users", UserSchema);
export default UserModel;

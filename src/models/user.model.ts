import { model, Model, Schema } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const UserModel: Model<User> = model("User", UserSchema);

export { UserModel };

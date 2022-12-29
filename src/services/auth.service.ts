import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import { generateToken } from "../utils/jwt.handler";
import { encryptPassword, verifyPassword } from "../utils/password.handler";

const signup = async ({ email, name, password }: User) => {
  const user = await UserModel.findOne({ email });

  if (user) {
    throw new Error("User already exists");
  }

  const hashedPassword = await encryptPassword(password);
  const newUser = await UserModel.create({
    email,
    name,
    password: hashedPassword,
  });

  return newUser;
};

const signin = async ({ email, password }: Omit<User, "name">) => {
  const user = await UserModel.findOne({ email: email });

  if (!user) {
    throw new Error("User does not exist");
  }

  const isPasswordValid = await verifyPassword(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const token = generateToken(user.email);

  const data = {
    token,
    user,
  };

  return data;
};

export { signup, signin };

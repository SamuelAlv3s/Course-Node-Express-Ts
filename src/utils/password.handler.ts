import { compare, hash } from "bcryptjs";

const encryptPassword = async (password: string) => {
  const passwordHash = await hash(password, 10);

  return passwordHash;
};

const verifyPassword = async (password: string, hash: string) => {
  const isValid = await compare(password, hash);
  return isValid;
};

export { encryptPassword, verifyPassword };

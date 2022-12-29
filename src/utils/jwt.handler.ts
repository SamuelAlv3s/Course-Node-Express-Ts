import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = <string>process.env.JWT_SECRET;

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, { expiresIn: "2h" });
  return jwt;
};

const verifyToken = (token: string) => {
  const tokenWithoutBearer = token.replace("Bearer ", "");
  const jwtValid = verify(tokenWithoutBearer, JWT_SECRET);
  return jwtValid;
};

export { generateToken, verifyToken };

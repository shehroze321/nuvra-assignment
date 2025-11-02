import prisma from "../prisma";
import { hashPassword, comparePassword } from "../utils/hash";
import ErrorHandler from "../utils/errorHandler";
import {
  loginSchemaType,
  registerSchemaType,
} from "../validation/authValidation";

export class AuthService {
  public registerUser = async (data: registerSchemaType) => {
    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existing) {
      throw new ErrorHandler("Email already in use", 400);
    }

    const hashed = await hashPassword(data.password);
    const created = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashed,
      },
    });
    return { id: created.id };
  };
  public loginUser = async (data: loginSchemaType) => {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (!user) {
      throw new ErrorHandler("Invalid credentials", 401);
    }
    const ok = await comparePassword(data.password, user.password);
    if (!ok) {
      throw new ErrorHandler("Invalid credentials", 401);
    }
    return { id: user.id, email: user.email, name: user.name };
  };
}

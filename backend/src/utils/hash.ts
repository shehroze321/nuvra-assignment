import bcrypt from "bcrypt";
import Env from "../env/env";
export async function hashPassword(password: string) {
  const saltRounds = Number(Env.BCRYPT_SALT_ROUNDS);
  return await bcrypt.hash(password, saltRounds);
}
export async function comparePassword(plain: string, hash: string) {
  return await bcrypt.compare(plain, hash);
}

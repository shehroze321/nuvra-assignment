import bcrypt from "bcrypt";
import Env from "../env/env";
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, Env.BCRYPT_SALT_ROUNDS);
}
export async function comparePassword(plain: string, hash: string) {
  return await bcrypt.compare(plain, hash);
}

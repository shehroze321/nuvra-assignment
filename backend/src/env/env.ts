import dotEnv from "dotenv";
dotEnv.config();
class Env {
  static PORT = process.env.PORT;
  static BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS as string;
}
export default Env;

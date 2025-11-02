import express from "express";
import { AuthController } from "../controllers/authController";
import { validator } from "../utils/validate";
import { loginSchema, registerSchema } from "../validation/authValidation";
const authRouter = express.Router();
const authController = new AuthController();
authRouter.post(
  "/register",
  validator(registerSchema),
  authController.registerUser
);
authRouter.post("/login", validator(loginSchema), authController.loginUser);
export default authRouter;

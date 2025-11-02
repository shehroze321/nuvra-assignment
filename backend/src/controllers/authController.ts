import { Request, Response } from "express";
import { AuthService } from "../services/authService";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import {
  loginSchemaType,
  registerSchemaType,
} from "../validation/authValidation";

const authService = new AuthService();
export class AuthController {
  public registerUser = CatchAsyncError(async (req: Request, res: Response) => {
    const result = await authService.registerUser(
      req.body as registerSchemaType
    );
    return res.status(201).json({ status: "success", data: result });
  });
  public loginUser = CatchAsyncError(async (req: Request, res: Response) => {
    const result = await authService.loginUser(req.body as loginSchemaType);
    return res.status(200).json({ status: "success", data: result });
  });
}

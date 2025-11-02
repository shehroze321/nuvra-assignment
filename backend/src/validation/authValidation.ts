import validator from "validator";
import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
});
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type registerSchemaType = z.infer<typeof registerSchema>;
export type loginSchemaType = z.infer<typeof loginSchema>;

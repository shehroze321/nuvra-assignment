import type { RequestHandler } from "express";
import { ZodError, type ZodSchema } from "zod";
import { fromError } from "zod-validation-error";

export const validator = (schema: ZodSchema<any>): RequestHandler => {
  return (req, res, next) => {
    try {
      console.log(req.body);

      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = fromError(error, {
          prefix: "",
          issueSeparator: "|",
          maxIssuesInMessage: 1,
          unionSeparator: "",
          prefixSeparator: "",
        }).toString();
        return res.status(400).json({
          success: false,
          message: errorMessage,
        });
      }
      next(error);
    }
  };
};

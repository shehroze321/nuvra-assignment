import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes";
import { ErrorMiddleware } from "./middleware/error";
const app = express();
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/", routes);

app.get("/test", (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Api is working",
  });
});

app.all("/*", (req: Request, _res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);

export { app };

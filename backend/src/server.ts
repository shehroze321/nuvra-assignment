import { app } from "./app";
import dotenv from "dotenv";
import Env from "./env/env";
dotenv.config();

const PORT = Env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

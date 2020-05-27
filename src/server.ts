import * as dotenv from "dotenv";
import App from "./app";
import UsersController from "./users/user.controller";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = new App(PORT, [new UsersController()]);

app.listen();

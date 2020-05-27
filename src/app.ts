import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";

class App {
  public app: express.Application;

  public port: number;

  constructor(port: number, controllers: Array<any>) {
    this.app = express();
    this.port = port;

    this.initMiddlewares();
    this.initControllers(controllers);
  }

  private initMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private initControllers(controllers: Array<any>) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      // eslint-disable-next-line no-console
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;

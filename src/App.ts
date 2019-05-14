import express = require("express");
import cors = require("cors");
import logger = require("morgan");

import IndexRoute from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(logger("dev"));
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
    this.express.use("/", new IndexRoute().router);
  }
}
export default new App().express;

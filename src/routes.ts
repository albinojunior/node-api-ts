import ExampleRoute from "./routes/example";
import { Router } from "express";
import { name, version } from "../package.json";

export default class IndexRoute {
  public router: Router = Router();

  public constructor() {
    this.initRoutes();
  }

  public initRoutes(): void {
    this.router.use("/example", ExampleRoute);
    this.router.all("/", (req, res): any => res.send(`${name} ${version}`));
  }
}

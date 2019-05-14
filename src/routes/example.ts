import { Router } from "express";
import { Route } from "../common/interfaces/route";
import ExampleController from "../controllers/example";

export class ExampleRoute implements Route {
  public router: Router = Router();
  public controller = ExampleController;

  public constructor() {
    this.init();
  }

  public init(): void {
    this.router.all("/", this.controller.example);
  }
}

export default new ExampleRoute().router;

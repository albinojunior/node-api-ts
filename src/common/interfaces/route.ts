import { Router } from "express";
import HttpController from "../controllers/http";

export declare interface Route {
  router: Router;
  controller?: HttpController;
  init(): void;
}

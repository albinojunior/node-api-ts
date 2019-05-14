import ExampleService from "./../services/example";
import HttpController from "../common/controllers/http";
import { Response, Request } from "express";

export class ExampleController extends HttpController {
  public service = ExampleService;

  public example = async (req: Request, res: Response): Promise<Response> => {
    try {
      return this.returnMessage(res, await this.service.example(req.method));
    } catch (error) {
      return this.processException(res, error);
    }
  };
}

export default new ExampleController();

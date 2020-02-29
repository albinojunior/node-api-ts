import { Response } from "express";
import { ExceptionHandler } from "../handlers/exception";
import { HTTP } from "../constants/http";

export default abstract class HttpController extends ExceptionHandler {
  public return = (
    res: Response,
    data: any = {},
    message: any = null,
    error: boolean = false,
    status: number = HTTP.OK
  ): Response => {
    return res.status(status).send({ message, data, error });
  };

  public returnData = (
    res: Response,
    data: any = {},
    status: number = HTTP.OK
  ): Response => {
    return res.status(status).send(data);
  };

  public returnMessage = (
    res: Response,
    message: string = "",
    status: number = HTTP.OK,
    error: boolean = false
  ): Response => {
    return res.status(status).send({ message, error });
  };

  public returnCreated = (
    res: Response,
    data: any = {},
    message: string = "Created"
  ): Response => {
    return this.return(res, data, message, false, HTTP.CREATED);
  };

  public returnBadRequest = (
    res: Response,
    message: string = "Bad Request"
  ): Response => {
    return this.returnMessage(res, message, HTTP.BAD_REQUEST, true);
  };

  public returnUnauthorized = (
    res: Response,
    message: string = "Unauthorized"
  ): Response => {
    return this.returnMessage(res, message, HTTP.UNAUTHORIZED, true);
  };

  public returnNotFound = (
    res: Response,
    message: string = "Not Found"
  ): Response => {
    return this.returnMessage(res, message, HTTP.NOT_FOUND, true);
  };

  public returnServerError = (
    res: Response,
    message: string = "Internal Server Error"
  ): Response => {
    return this.returnMessage(res, message, HTTP.INTERNAL_SERVER_ERROR, true);
  };

  public returnFile = (
    res: Response,
    content: Buffer | string | any,
    type: string,
    length: string | number
  ): void => {
    const headers = {
      "Content-Type": type,
      "Content-Length": length
    };
    res.writeHead(HTTP.OK, headers);
    return res.end(content);
  };

  public processException = (res: Response, errors: any): Response => {
    const { errorData, statusCode } = this.handleErrors(errors);

    return this.returnData(res, errorData, statusCode);
  };
}

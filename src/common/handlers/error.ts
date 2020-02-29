import chalk from "chalk";
import { HTTP } from "../constants/http";
import { ResponseError } from "../interfaces/response-error";

export abstract class ErrorHandler {
  public handleUnknownError(
    error: Error
  ): { errorData: ResponseError; statusCode: number } {
    console.log(chalk.bgRed(chalk.whiteBright("UNKNOWN ERROR: ")), error);

    return {
      errorData: {
        code: HTTP.INTERNAL_SERVER_ERROR,
        message: error.message
      },
      statusCode: HTTP.INTERNAL_SERVER_ERROR
    };
  }
}

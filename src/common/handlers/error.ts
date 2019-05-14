import chalk from "chalk";
import { HTTP } from "../constants/http";
import { DefaultReturn } from "../interfaces/return";

export abstract class ErrorHandler {
  /**
   * @param error
   *
   */
  public handleUnknownError(
    error: Error
  ): { data: DefaultReturn; statusCode: number } {
    console.log(chalk.bgRed(chalk.whiteBright("UNKNOWN ERROR: ")), error);
    return {
      data: {
        error: true,
        message: error.message
      },
      statusCode: HTTP.INTERNAL_SERVER_ERROR
    };
  }
}

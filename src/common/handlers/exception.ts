import { ErrorHandler } from "./error";

export abstract class ExceptionHandler extends ErrorHandler {
  private _EXCEPTION_TYPES: { type: any; func: Function }[] = [];

  public get EXCEPTION_TYPES(): any {
    return this._EXCEPTION_TYPES;
  }

  public set EXCEPTION_TYPES(value) {
    this._EXCEPTION_TYPES = [...this._EXCEPTION_TYPES, ...value];
  }

  /**
   * @param error
   */
  public getParseFunction = (error: Error): Function => {
    for (let errorItem of this._EXCEPTION_TYPES) {
      if (error instanceof errorItem.type) {
        return errorItem.func;
      }
    }

    return this.handleUnknownError;
  };

  /**
   * @param error
   */
  public handleErrors = (error: Error): any => {
    const handleFunction = this.getParseFunction(error);
    return handleFunction(error);
  };
}

import { NextFunction, Request, Response } from "express";

class Log {
  public generateLog(request: Request, response: Response, next: NextFunction) {
    console.log(`${request.method} - ${request.originalUrl}`);
    next();
  }
}

export default new Log();

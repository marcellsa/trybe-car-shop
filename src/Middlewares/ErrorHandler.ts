import { NextFunction, Request, Response } from 'express';
import GenerateError from '../utils/GenerateError';

class ErrorHandler {
  public static handle(
    error: Error & GenerateError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.statusCode || 500).json({ message: error.message });
    next();
  }
}
export default ErrorHandler;
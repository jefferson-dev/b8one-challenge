import { Request, Response, NextFunction } from 'express';

import AppError from './AppError';
import ValidationError from './ValidationError';

export default function GlobalError(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'Error',
      message: err.message,
    });
  }

  if (err instanceof ValidationError) {
    return response.status(err.statusCode).json({
      name: err.name,
      message: err.message,
      fields: err.fields,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 'Error',
    message: 'Internal Error Server.',
  });
}

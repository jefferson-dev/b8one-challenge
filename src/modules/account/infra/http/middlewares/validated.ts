import { Request, Response, NextFunction } from 'express';
import { AnyObjectSchema } from 'yup';

import ValidationError from '@infra/errors/ValidationError';

export const validate =
  (resourceSchema: AnyObjectSchema) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await resourceSchema.validate(request.body, { abortEarly: false });

      next();
    } catch (e: any) {
      const schemaErrors = e.inner.map(err => {
        return { field: err.path, message: err.message };
      });

      throw new ValidationError(schemaErrors);
    }
  };

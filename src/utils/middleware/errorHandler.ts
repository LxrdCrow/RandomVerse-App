import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  if (err instanceof AppError) {
    const payload: any = { error: err.message };
    if (err.details) payload.details = err.details;
    return res.status(err.statusCode || 500).json(payload);
  }

  const isDev = process.env.NODE_ENV !== 'production';
  if (isDev) {
    return res.status(500).json({ error: err?.message || 'Internal Server Error', stack: err?.stack });
  }
  return res.status(500).json({ error: 'Internal Server Error' });
};



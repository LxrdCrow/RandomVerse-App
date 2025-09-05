import { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";

declare module "express-serve-static-core" {
  interface Request {
    id?: string;
  }
}

export const requestId = (req: Request, _res: Response, next: NextFunction) => {
  req.id = randomUUID(); 
  next();
};

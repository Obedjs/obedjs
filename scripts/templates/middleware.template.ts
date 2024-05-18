export const middlewareTemplate = (name: string) => `
import { Request, Response, NextFunction } from 'express';

export const ${name}Middleware = (req: Request, res: Response, next: NextFunction) => {
  // Your middleware logic here
  next();
}
`;

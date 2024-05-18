export const controllerTemplate = (name: string) => `
import { Request, Response } from 'express';

export class ${name}Controller {
  public async get(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async create(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async update(req: Request, res: Response): Promise<void> {
    // Your logic here
  }

  public async delete(req: Request, res: Response): Promise<void> {
    // Your logic here
  }
}
`;

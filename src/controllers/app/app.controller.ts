
import { Request, Response } from 'express';
import { AppService } from '../../services/app/app.service'; 

export class AppController {
     private readonly service: AppService;

  constructor(service: AppService) {
    this.service = service; 
  }

  public async getHello(req: Request, res: Response): Promise<any> {
  const message = await this.service.getHello();
   return res.status(200).json({message});
  }
}

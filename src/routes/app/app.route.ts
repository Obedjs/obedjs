
import { Router } from 'express';
import { AppController } from '../../controllers/app/app.controller';
import { AppService } from '../../services/app/app.service';

const router = Router();
const service = new AppService(); 
const controller = new AppController(service); 

router.get('/', controller.getHello.bind(controller));


export default router;

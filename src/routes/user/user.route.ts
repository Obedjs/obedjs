
import { Router } from 'express';
import { UserController } from '../../controllers/user/user.controller';

const router = Router();
const controller = new UserController();

router.get('/', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;

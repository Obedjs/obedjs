
import { Router } from 'express';
import { PostController } from '../../controllers/post/post.controller';

const router = Router();
const controller = new PostController();

router.get('/', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;

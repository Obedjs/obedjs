export const routeTemplate = (name: string) => `
import { Router } from 'express';
import { ${name}Controller } from '../../controllers/${name.toLowerCase()}/${name.toLowerCase()}.controller';

const router = Router();
const controller = new ${name}Controller();

router.get('/', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);

export default router;
`;

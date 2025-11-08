import { Router } from 'express';
import { MembersController } from '../controllers/members.controller';

const router = Router();

router.get('/', MembersController.getAll);
router.get('/:id', MembersController.getById);
router.post('/', MembersController.create);
router.put('/:id', MembersController.update);
router.delete('/:id', MembersController.delete);

export default router;

import { Router } from 'express';
import { BooksController } from '../controllers/books.controller';

const router = Router();

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.create);
router.put('/:id', BooksController.update);
router.delete('/:id', BooksController.delete);

export default router;

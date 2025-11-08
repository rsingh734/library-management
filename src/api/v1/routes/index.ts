import { Router } from 'express';
import booksRoutes from './books.routes';
import authorsRoutes from './authors.routes';
import membersRoutes from './members.routes';

const router = Router();

router.use('/books', booksRoutes);
router.use('/authors', authorsRoutes);
router.use('/members', membersRoutes);

export default router;

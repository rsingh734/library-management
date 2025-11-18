import { Router } from 'express';
import booksRoutes from './books.routes';
import authorsRoutes from './authors.routes';
import membersRoutes from './members.routes';
import loansRoutes from './loans.routes';
import notificationsRoutes from './notifications.routes';

const router = Router();

router.use('/books', booksRoutes);
router.use('/authors', authorsRoutes);
router.use('/members', membersRoutes);
router.use('/loans', loansRoutes);
router.use('/notifications', notificationsRoutes);

export default router;

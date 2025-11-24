import { Router } from 'express';
import { borrowBook, returnBook } from '../controllers/loans.controller';

const router = Router();

/**
 * @swagger
 * /loans/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags:
 *       - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: string
 *               bookId:
 *                 type: string
 *             required:
 *               - memberId
 *               - bookId
 *     responses:
 *       201:
 *         description: Book borrowed successfully
 */
router.post('/borrow', borrowBook);

/**
 * @swagger
 * /loans/return:
 *   post:
 *     summary: Return a borrowed book
 *     tags:
 *       - Loans
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: string
 *               bookId:
 *                 type: string
 *             required:
 *               - memberId
 *               - bookId
 *     responses:
 *       200:
 *         description: Book returned successfully
 */
router.post('/return', returnBook);

export default router;

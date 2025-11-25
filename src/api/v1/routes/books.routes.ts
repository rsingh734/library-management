import { Router } from 'express';
import { BooksController } from '../controllers/books.controller';
import authenticate from "../../../middleware/authenticate";
import isAuthorized from "../../../middleware/authorize";
const router = Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of books
 */
router.get("/", authenticate, BooksController.getAll);

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a single book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book details
 *       404:
 *         description: Book not found
 */
router.get("/:id", authenticate, BooksController.getById);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               authorId:
 *                 type: string
 *               ISBN:
 *                 type: string
 *               publicationYear:
 *                 type: number
 *               genre:
 *                 type: string
 *               availableCopies:
 *                 type: number
 *               totalCopies:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Book created successfully
 */
router.post(
  "/",
  authenticate,
  isAuthorized({ hasRole: ["admin", "manager"] }),
  BooksController.create
);

/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update a book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               authorId:
 *                 type: string
 *               ISBN:
 *                 type: string
 *               publicationYear:
 *                 type: number
 *               genre:
 *                 type: string
 *               availableCopies:
 *                 type: number
 *               totalCopies:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book updated successfully
 */
router.put(
  "/:id",
  authenticate,
  isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
  BooksController.update
);

/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book by ID
 *     tags:
 *       - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Book ID
 *     responses:
 *       200:
 *         description: Book deleted successfully
 */
router.delete(
  '/:id',
  authenticate,
  isAuthorized({ hasRole: ["admin", "manager"] }),
  BooksController.delete
);

export default router;

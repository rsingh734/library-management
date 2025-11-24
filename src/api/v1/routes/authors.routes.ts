import { Router } from 'express';
import { AuthorsController } from '../controllers/authors.controller';
import authenticate from "../../../middleware/authenticate";
import isAuthorized from "../../../middleware/authorize";

const router = Router();

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors
 *     tags:
 *       - Authors
 *     responses:
 *       200:
 *         description: List of authors
 */
router.get('/', authenticate, AuthorsController.getAll);

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get a single author by ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Author ID
 *     responses:
 *       200:
 *         description: Author details
 *       404:
 *         description: Author not found
 */
router.get('/:id', authenticate, AuthorsController.getById);

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Create a new author
 *     tags:
 *       - Authors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               biography:
 *                 type: string
 *               nationality:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Author created successfully
 */
router.post(
  '/',
  authenticate,
  isAuthorized({ hasRole: ["admin", "manager"] }),
  AuthorsController.create
);

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Update an author by ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Author ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               biography:
 *                 type: string
 *               nationality:
 *                 type: string
 *               birthDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Author updated successfully
 */
router.put(
  '/:id',
  authenticate,
  isAuthorized({ hasRole: ["admin", "manager"] }),
  AuthorsController.update
);

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Delete an author by ID
 *     tags:
 *       - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Author ID
 *     responses:
 *       200:
 *         description: Author deleted successfully
 */
router.delete(
  '/:id',
  authenticate,
  isAuthorized({ hasRole: ["admin", "manager"] }),
  AuthorsController.delete
);

export default router;

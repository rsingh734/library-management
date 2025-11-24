import { Router } from 'express';
import { MembersController } from '../controllers/members.controller';

const router = Router();

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Get all members
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: List of members
 */
router.get('/', MembersController.getAll);

/**
 * @swagger
 * /members/{id}:
 *   get:
 *     summary: Get a single member by ID
 *     tags:
 *       - Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Member ID
 *     responses:
 *       200:
 *         description: Member details
 *       404:
 *         description: Member not found
 */
router.get('/:id', MembersController.getById);

/**
 * @swagger
 * /members:
 *   post:
 *     summary: Create a new member
 *     tags:
 *       - Members
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: string
 *               joinDate:
 *                 type: string
 *                 format: date
 *               membershipType:
 *                 type: string
 *               borrowedBooks:
 *                 type: array
 *                 items:
 *                   type: string
 *               contactPreferences:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member created successfully
 */
router.post('/', MembersController.create);

/**
 * @swagger
 * /members/{id}:
 *   put:
 *     summary: Update a member by ID
 *     tags:
 *       - Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Member ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               joinDate:
 *                 type: string
 *                 format: date
 *               membershipType:
 *                 type: string
 *               borrowedBooks:
 *                 type: array
 *                 items:
 *                   type: string
 *               contactPreferences:
 *                 type: string
 *     responses:
 *       200:
 *         description: Member updated successfully
 */
router.put('/:id', MembersController.update);

/**
 * @swagger
 * /members/{id}:
 *   delete:
 *     summary: Delete a member by ID
 *     tags:
 *       - Members
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Member ID
 *     responses:
 *       200:
 *         description: Member deleted successfully
 */
router.delete('/:id', MembersController.delete);

export default router;

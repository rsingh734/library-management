import { Router } from "express";
import { NotificationsController } from "../controllers/notifications.controller";

const router = Router();

/**
 * @swagger
 * /notifications/registration:
 *   post:
 *     summary: Send registration confirmation email
 *     tags:
 *       - Notifications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               name:
 *                 type: string
 *             required:
 *               - email
 *               - name
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       500:
 *         description: Failed to send email
 */
router.post("/registration", NotificationsController.sendRegistration);

/**
 * @swagger
 * /notifications/reservation:
 *   post:
 *     summary: Send reservation available notice
 *     tags:
 *       - Notifications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               bookTitle:
 *                 type: string
 *             required:
 *               - email
 *               - bookTitle
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       500:
 *         description: Failed to send email
 */
router.post("/reservation", NotificationsController.sendReservationNotice);

/**
 * @swagger
 * /notifications/return-reminder:
 *   post:
 *     summary: Send return reminder email
 *     tags:
 *       - Notifications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               bookTitle:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *             required:
 *               - email
 *               - bookTitle
 *               - dueDate
 *     responses:
 *       200:
 *         description: Email sent successfully
 *       500:
 *         description: Failed to send email
 */
router.post("/return-reminder", NotificationsController.sendReturnReminder);

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Get all notifications with optional filtering and sorting
 *     tags:
 *       - Notifications
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [registration, reservation, returnReminder]
 *         description: Filter notifications by type
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *           format: email
 *         description: Filter notifications by recipient email
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [createdAt]
 *         description: Field to sort by
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order (ascending or descending)
 *     responses:
 *       200:
 *         description: List of notifications
 *       500:
 *         description: Failed to retrieve notifications
 */
router.get("/", NotificationsController.getAll);

export default router;



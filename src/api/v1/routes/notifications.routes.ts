import { Router } from 'express';
import { sendReminder } from '../controllers/notifications.controller';

const router = Router();

/**
 * @swagger
 * /notifications/reminder:
 *   post:
 *     summary: Send a notification reminder
 *     tags:
 *       - Notifications
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberId:
 *                 type: string
 *               message:
 *                 type: string
 *             required:
 *               - memberId
 *               - message
 *     responses:
 *       200:
 *         description: Notification sent successfully
 */
router.post('/reminder', sendReminder);

export default router;


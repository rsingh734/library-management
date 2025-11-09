import { Request, Response } from 'express';
import * as notificationsService from '../services/notifications.service';

export const sendReminder = (req: Request, res: Response) => {
  const result = notificationsService.sendReminder(req.body);
  res.status(200).json(result);
};

import { Request, Response } from "express";
import { NotificationService } from "../services/notification.services";

export const NotificationsController = {
  sendRegistration: async (req: Request, res: Response) => {
    try {
      const { email, name } = req.body;
      const result = await NotificationService.sendRegistrationConfirmation(email, name);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: "Failed to send email", error: err });
    }
  },

  sendReservationNotice: async (req: Request, res: Response) => {
    try {
      const { email, bookTitle } = req.body;
      const result = await NotificationService.sendReservationAvailable(email, bookTitle);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: "Failed to send email", error: err });
    }
  },
  
  sendReturnReminder: async (req: Request, res: Response) => {
    try {
      const { email, bookTitle, dueDate } = req.body;
      const result = await NotificationService.sendReturnReminder(email, bookTitle, dueDate);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: "Failed to send email", error: err });
    }
  },
};

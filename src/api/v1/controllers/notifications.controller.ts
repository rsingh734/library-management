import { Request, Response } from "express";
import { NotificationService } from "../services/notification.services";
import { ApiSuccessResponse, ApiErrorResponse } from "../models/notificationModel";
import { createRegistrationSchema, createReservationSchema, createReturnReminderSchema } from "../validators/notificationsValidators";

export const NotificationsController = {
  sendRegistration: async (req: Request, res: Response) => {
    const { error } = createRegistrationSchema.validate(req.body);
    if (error) {
      const response: ApiErrorResponse = {
        success: false,
        message: error.details[0].message,
        statusCode: 400,
      };
      res.status(400).json(response);
      return;
    }

    try {
      const { email, name } = req.body;
      const result = await NotificationService.sendRegistrationConfirmation(email, name);
      NotificationService.recordNotification({ email, name }, "registration");
      const response: ApiSuccessResponse = {
        success: true,
        message: "Registration email sent successfully",
        statusCode: 200,
        data: result,
      };
      res.status(200).json(response);
    } catch (err) {
      const response: ApiErrorResponse = {
        success: false,
        message: "Failed to send email",
        statusCode: 500,
        error: err,
      };
      res.status(500).json(response);
    }
  },

  sendReservationNotice: async (req: Request, res: Response) => {
    const { error } = createReservationSchema.validate(req.body);
    if (error) {
      res.status(400).json({ success: false, message: error.details[0].message, statusCode: 400 });
      return;
    }

    try {
      const { email, bookTitle } = req.body;
      const result = await NotificationService.sendReservationAvailable(email, bookTitle);
      NotificationService.recordNotification({ email, bookTitle }, "reservation");
      res.status(200).json({ success: true, message: "Reservation email sent", statusCode: 200, data: result });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to send email", statusCode: 500, error: err });
    }
  },

  sendReturnReminder: async (req: Request, res: Response) => {
    const { error } = createReturnReminderSchema.validate(req.body);
    if (error) {
      res.status(400).json({ success: false, message: error.details[0].message, statusCode: 400 });
      return;
    }

    try {
      const { email, bookTitle, dueDate } = req.body;
      const result = await NotificationService.sendReturnReminder(email, bookTitle, dueDate);
      NotificationService.recordNotification({ email, bookTitle, dueDate }, "returnReminder");
      res.status(200).json({ success: true, message: "Return reminder sent", statusCode: 200, data: result });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to send email", statusCode: 500, error: err });
    }
  },

  getAll: (req: Request, res: Response) => {
    const { type, email, sortBy, order } = req.query;
    const notifications = NotificationService.getAll(
      { type: type as string, email: email as string },
      sortBy as string,
      (order as "asc" | "desc") || "asc"
    );
    res.status(200).json({ success: true, data: notifications });
  },
};

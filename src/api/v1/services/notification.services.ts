
import { mailer } from "../../../config/mailer";
import { Notification } from "../models/notificationModel";

const notifications: Notification[] = [];

export const NotificationService = {
  sendRegistrationConfirmation: async (email: string, name: string) => {
    const mail = {
      from: "fbpfi5572wyk6c4f@ethereal.email",
      to: email,
      subject: "Welcome to the Digital Library!",
      text: `Hi ${name}, your account has been successfully created.`,
    };

    await mailer.sendMail(mail);

    return { message: "Registration email sent", email };
  },

  sendReservationAvailable: async (email: string, bookTitle: string) => {
    const mail = {
      from: "fbpfi5572wyk6c4f@ethereal.email",
      to: email,
      subject: "Your Book Reservation is Available",
      text: `Good news! The book "${bookTitle}" is now available.`,
    };

    await mailer.sendMail(mail);

    return { message: "Reservation notification sent", email };
  },

  sendReturnReminder: async (email: string, bookTitle: string, dueDate: string) => {
    const mail = {
      from: "fbpfi5572wyk6c4f@ethereal.email",
      to: email,
      subject: "Library Book Return Reminder",
      text: `Reminder: The book "${bookTitle}" is due on ${dueDate}. Please return it to avoid late fees.`,
    };

    await mailer.sendMail(mail);

    return {
      message: "Return reminder email sent",
      email,
      bookTitle,
      dueDate
    };
  },

  recordNotification: (data: Omit<Notification, "id" | "createdAt" | "type">, type: Notification["type"]) => {
    const newNotification: Notification = {
      id: (notifications.length + 1).toString(),
      ...data,
      type,
      createdAt: new Date().toISOString(),
    };
    notifications.push(newNotification);
    return newNotification;
  },

  // NEW: Get all notifications with filtering and sorting
  getAll: (filter?: { type?: string; email?: string }, sortBy?: string, order: "asc" | "desc" = "asc") => {
    let result = [...notifications];

    // Apply filters
    if (filter?.type) result = result.filter(n => n.type === filter.type);
    if (filter?.email) result = result.filter(n => n.email === filter.email);

    // Apply sorting
    if (sortBy === "createdAt") {
      result.sort((a, b) => {
        if (order === "asc") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        else return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }

    return result;
  },
};

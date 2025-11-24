import { mailer } from "../../../config/mailer";

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

  sendMembershipUpdate: async (email: string, status: string) => {
    const mail = {
      from: "fbpfi5572wyk6c4f@ethereal.email",
      to: email,
      subject: "Membership Update",
      text: `Your membership status is now: ${status}`,
    };

    await mailer.sendMail(mail);

    return { message: "Membership email sent", email };
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
  }
};

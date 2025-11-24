import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const mailer = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "fbpfi5572wyk6c4f@ethereal.email",
    pass: "2KKqfSY2t9RSmcDZzd",
  },
});

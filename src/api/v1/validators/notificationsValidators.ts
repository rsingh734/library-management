import Joi from "joi";

export const createRegistrationSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).required(),
});

export const createReservationSchema = Joi.object({
  email: Joi.string().email().required(),
  bookTitle: Joi.string().min(2).required(),
});

export const createReturnReminderSchema = Joi.object({
  email: Joi.string().email().required(),
  bookTitle: Joi.string().min(2).required(),
  dueDate: Joi.date().required(),
});

import Joi from "joi";

export const createBookSchema = Joi.object({
  title: Joi.string().min(2).required(),
  authorId: Joi.string().required(),
  genre: Joi.string().min(3).required(),
  publishedYear: Joi.number().integer().min(1500).max(new Date().getFullYear()).required(),
  availableCopies: Joi.number().integer().min(0).required(),
});

export const updateBookSchema = Joi.object({
  title: Joi.string().min(2),
  genre: Joi.string().min(3),
  publishedYear: Joi.number().integer().min(1500).max(new Date().getFullYear()),
  availableCopies: Joi.number().integer().min(0),
});

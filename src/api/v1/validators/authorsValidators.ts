import Joi from "joi";

export const createAuthorSchema = Joi.object({
  name: Joi.string().min(3).required(),
  birthYear: Joi.number().integer().min(1800).max(new Date().getFullYear()).required(),
  nationality: Joi.string().min(3).required(),
});

export const updateAuthorSchema = Joi.object({
  name: Joi.string().min(3),
  birthYear: Joi.number().integer().min(1800).max(new Date().getFullYear()),
  nationality: Joi.string().min(3),
});

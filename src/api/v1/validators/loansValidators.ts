import Joi from "joi";

export const createLoanSchema = Joi.object({
  memberId: Joi.string().required(),
  bookId: Joi.string().required(),
});

export const updateLoanSchema = Joi.object({
  returnDate: Joi.string(),
  status: Joi.string().valid("returned", "late"),
});

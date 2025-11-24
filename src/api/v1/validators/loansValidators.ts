import Joi from "joi";

export const borrowBookSchema = Joi.object({
  memberId: Joi.string().required().min(3).messages({
    "string.empty": "Member ID is required",
    "any.required": "Member ID must be provided"
  }),
  bookId: Joi.string().required().min(3).messages({
    "string.empty": "Book ID is required",
    "any.required": "Book ID must be provided"
  }),
  borrowDate: Joi.date().required().messages({
    "date.base": "Borrow date must be a valid date",
    "any.required": "Borrow date is required"
  })
});

export const returnBookSchema = Joi.object({
  loanId: Joi.string().required().messages({
    "string.empty": "Loan ID is required",
    "any.required": "Loan ID must be provided"
  }),
  returnDate: Joi.date().required().messages({
    "date.base": "Return date must be a valid date",
    "any.required": "Return date is required"
  })
});

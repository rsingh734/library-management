import { Request, Response } from "express";
import * as loansService from "../services/loans.services";
import { borrowBookSchema, returnBookSchema } from "../validators/loansValidators";
import { ApiSuccessResponse, ApiErrorResponse } from "../models/loansModel";

export const borrowBook = (req: Request, res: Response) => {
  const { error } = borrowBookSchema.validate(req.body);

  if (error) {
    const response: ApiErrorResponse = {
      success: false,
      message: error.details[0].message,
      statusCode: 400,
    };
    res.status(response.statusCode).json(response);
    return;
  }

  const loan = loansService.borrowBook(req.body);

  const response: ApiSuccessResponse = {
    success: true,
    message: "Book borrowed successfully",
    statusCode: 200,
    data: loan,
  };

  res.status(response.statusCode).json(response);
};

export const returnBook = (req: Request, res: Response) => {
  const { error } = returnBookSchema.validate(req.body);

  if (error) {
    const response: ApiErrorResponse = {
      success: false,
      message: error.details[0].message,
      statusCode: 400,
    };
    res.status(response.statusCode).json(response);
    return;
  }

  const loan = loansService.returnBook(req.body);

  const response: ApiSuccessResponse = {
    success: true,
    message: "Book returned successfully",
    statusCode: 200,
    data: loan,
  };

  res.status(response.statusCode).json(response);
};

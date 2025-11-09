import { Request, Response } from 'express';
import * as loansService from '../services/loans.service';

export const borrowBook = (req: Request, res: Response) => {
  const data = loansService.borrowBook(req.body);
  res.status(201).json(data);
};

export const returnBook = (req: Request, res: Response) => {
  const data = loansService.returnBook(req.body);
  res.status(200).json(data);
};

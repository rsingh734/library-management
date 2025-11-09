import { Request, Response } from 'express';
import * as loansService from '../services/loans.services';

export const borrowBook = (req: Request, res: Response) => {
  const data = loansService.borrowBook(req.body);
  res.status(200).json({ message: 'Book borrowed successfully', loan: data });
};

export const returnBook = (req: Request, res: Response) => {
  const data = loansService.returnBook(req.body);
  res.status(200).json({ message: 'Book returned successfully', loan: data });
};

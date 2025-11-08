import { Request, Response } from 'express';
import { BooksService } from '../services/books.service';

export const BooksController = {
  getAll: (req: Request, res: Response) => {
    const books = BooksService.getAll();
    res.json(books);
  },

  getById: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = BooksService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  },

  create: (req: Request, res: Response) => {
    const book = BooksService.create(req.body);
    res.status(201).json(book);
  },

  update: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updatedBook = BooksService.update(id, req.body);
    res.json(updatedBook);
  },

  delete: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const removedBook = BooksService.delete(id);
    res.json(removedBook);
  },
};

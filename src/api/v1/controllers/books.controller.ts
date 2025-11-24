import { Request, Response } from "express";
import { BooksService } from "../services/books.service";
import { createBookSchema, updateBookSchema } from "../validators/bookValidators";

export const BooksController = {
  getAll: (req: Request, res: Response) => {
    res.json({ message: "Books list retrieved", data: BooksService.getAll() });
  },

  getById: (req: Request, res: Response) => {
    const book = BooksService.getById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.json({ message: "Book retrieved", data: book });
  },

  create: (req: Request, res: Response) => {
    const { error } = createBookSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const newBook = BooksService.create(req.body);
    res.status(201).json({ message: "Book created successfully", data: newBook });
  },

  update: (req: Request, res: Response) => {
    const { error } = updateBookSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const updated = BooksService.update(req.params.id, req.body);
    if (!updated) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.json({ message: "Book updated", data: updated });
  },

  delete: (req: Request, res: Response) => {
    const removed = BooksService.delete(req.params.id);
    if (!removed) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.json({ message: "Book deleted", data: removed });
  },
};

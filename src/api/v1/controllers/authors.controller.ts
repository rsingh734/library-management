import { Request, Response } from 'express';
import { AuthorsService } from '../services/authors.service';

export const AuthorsController = {
  getAll: (req: Request, res: Response) => res.json(AuthorsService.getAll()),

  getById: (req: Request, res: Response) => {
    const id = req.params.id;
    const author = AuthorsService.getById(id);
    if (!author) return res.status(404).json({ message: 'Author not found' });
    res.json(author);
  },

  create: (req: Request, res: Response) => {
    const author = AuthorsService.create(req.body);
    res.status(201).json(author);
  },

  update: (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedAuthor = AuthorsService.update(id, req.body);
    res.json(updatedAuthor);
  },

  delete: (req: Request, res: Response) => {
    const id = req.params.id;
    const removedAuthor = AuthorsService.delete(id);
    if (!removedAuthor) return res.status(404).json({ message: 'Author not found' });
    res.json({ message: 'Author deleted successfully' });
  },
};

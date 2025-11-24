import { Request, Response } from "express";
import { AuthorsService } from "../services/authors.service";
import { createAuthorSchema, updateAuthorSchema } from "../validators/authorsValidators";

export const AuthorsController = {
  getAll: (req: Request, res: Response) => {
    return res.json({ message: "Authors list retrieved", data: AuthorsService.getAll() });
  },

  getById: (req: Request, res: Response) => {
    const author = AuthorsService.getById(req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });
    return res.json({ message: "Author retrieved", data: author });
  },

  create: (req: Request, res: Response) => {
    const { error } = createAuthorSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const newAuthor = AuthorsService.create(req.body);
    return res.status(201).json({ message: "Author created", data: newAuthor });
  },

  update: (req: Request, res: Response) => {
    const { error } = updateAuthorSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const updated = AuthorsService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Author not found" });

    return res.json({ message: "Author updated", data: updated });
  },

  delete: (req: Request, res: Response) => {
    const removed = AuthorsService.delete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Author not found" });

    return res.json({ message: "Author deleted", data: removed });
  },
};

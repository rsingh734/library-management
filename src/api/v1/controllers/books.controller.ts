import { Request, Response, NextFunction } from "express";
import { db } from "../../..//config/firebase"; // your firebase setup
import { createBookSchema } from "../validators/bookValidators";

export const BooksController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const snapshot = await db.collection("books").get();
      const books = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json({ message: "Books list retrieved", data: books });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doc = await db.collection("books").doc(req.params.id).get();
      if (!doc.exists) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.json({ message: "Book retrieved", data: { id: doc.id, ...doc.data() } });
    } catch (error) {
      next(error);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = createBookSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.message });
      }

      const docRef = await db.collection("books").add(req.body);
      res.status(201).json({ message: "Book created successfully", id: docRef.id });
    } catch (error) {
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = createBookSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ message: error.message });
      }

      const docRef = db.collection("books").doc(req.params.id);
      const doc = await docRef.get();
      if (!doc.exists) {
        return res.status(404).json({ message: "Book not found" });
      }

      await docRef.update(req.body);
      res.json({ message: "Book updated", data: req.body });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const docRef = db.collection("books").doc(req.params.id);
      const doc = await docRef.get();
      if (!doc.exists) {
        return res.status(404).json({ message: "Book not found" });
      }

      await docRef.delete();
      res.json({ message: "Book deleted" });
    } catch (error) {
      next(error);
    }
  },
};


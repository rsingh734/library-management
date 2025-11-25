import { Request, Response, NextFunction } from "express";
import { db } from "../../../config/firebase";
import { createAuthorSchema, updateAuthorSchema } from "../validators/authorsValidators";

export const AuthorsController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const snapshot = await db.collection("authors").get();
      const authors = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json({ message: "Authors list retrieved", data: authors });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doc = await db.collection("authors").doc(req.params.id).get();
      if (!doc.exists) return res.status(404).json({ message: "Author not found" });
      res.json({ message: "Author retrieved", data: { id: doc.id, ...doc.data() } });
    } catch (error) {
      next(error);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = createAuthorSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.message });

      const docRef = await db.collection("authors").add(req.body);
      res.status(201).json({ message: "Author created successfully", id: docRef.id });
    } catch (error) {
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = updateAuthorSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.message });

      const docRef = db.collection("authors").doc(req.params.id);
      const doc = await docRef.get();
      if (!doc.exists) return res.status(404).json({ message: "Author not found" });

      await docRef.update(req.body);
      res.json({ message: "Author updated", data: req.body });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const docRef = db.collection("authors").doc(req.params.id);
      const doc = await docRef.get();
      if (!doc.exists) return res.status(404).json({ message: "Author not found" });

      await docRef.delete();
      res.json({ message: "Author deleted" });
    } catch (error) {
      next(error);
    }
  },
};

import { Request, Response, NextFunction } from "express";
import { db } from "../../../config/firebase";
import { createMemberSchema, updateMemberSchema } from "../validators/membersValidators";

export const MembersController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const snapshot = await db.collection("members").get();
      const members = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      res.json({ message: "Members list retrieved", data: members });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const doc = await db.collection("members").doc(req.params.id).get();
      if (!doc.exists) return res.status(404).json({ message: "Member not found" });
      res.json({ message: "Member retrieved", data: { id: doc.id, ...doc.data() } });
    } catch (error) {
      next(error);
    }
  },

  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = createMemberSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.message });

      const docRef = await db.collection("members").add(req.body);
      res.status(201).json({ message: "Member created successfully", id: docRef.id });
    } catch (error) {
      next(error);
    }
  },

  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = updateMemberSchema.validate(req.body);
      if (error) return res.status(400).json({ message: error.message });

      const docRef = db.collection("members").doc(req.params.id);
      const doc = await docRef.get();
      if (!doc.exists) return res.status(404).json({ message: "Member not found" });

      await docRef.update(req.body);
      res.json({ message: "Member updated", data: req.body });
    } catch (error) {
      next(error);
    }
  },

  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const docRef = db.collection("members").doc(req.params.id);
      const doc = await docRef.get();
      if (!doc.exists) return res.status(404).json({ message: "Member not found" });

      await docRef.delete();
      res.json({ message: "Member deleted" });
    } catch (error) {
      next(error);
    }
  },
};

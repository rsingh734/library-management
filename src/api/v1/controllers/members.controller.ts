import { Request, Response } from 'express';
import { MembersService } from '../services/members.service';
import { createMemberSchema, updateMemberSchema } from "../validators/membersValidators";
import { ApiResponse } from "../models/responseMode";

export const MembersController = {
  getAll: (req: Request, res: Response) => {
    const members = MembersService.getAll();
    return res.json({ message: "Members list retrieved", data: members });
  },

  getById: (req: Request, res: Response) => {
    const member = MembersService.getById(req.params.id);
    if (!member) return res.status(404).json({ message: "Member not found" });
    return res.json({ message: "Member retrieved", data: member });
  },

  create: (req: Request, res: Response) => {
    const { error } = createMemberSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const member = MembersService.create(req.body);
    const response: ApiResponse<any> = {
      message: "Member created successfully",
      data: member,
    };

    return res.status(201).json(response);
  },

  update: (req: Request, res: Response) => {
    const { error } = updateMemberSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.message });

    const updated = MembersService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Member not found" });
    return res.json({ message: "Member updated", data: updated });
  },

  delete: (req: Request, res: Response) => {
    const deleted = MembersService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Member not found" });

    return res.json({ message: "Member deleted successfully", data: deleted });
  },
};
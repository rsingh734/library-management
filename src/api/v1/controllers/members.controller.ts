import { Request, Response } from 'express';
import { MembersService } from '../services/members.service';

export const MembersController = {
  getAll: (req: Request, res: Response) => res.json(MembersService.getAll()),

  getById: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const member = MembersService.getById(id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  },

  create: (req: Request, res: Response) => {
    const member = MembersService.create(req.body);
    res.status(201).json(member);
  },

  update: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const updatedMember = MembersService.update(id, req.body);
    res.json(updatedMember);
  },

  delete: (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const removedMember = MembersService.delete(id);
    res.json(removedMember);
  },
};

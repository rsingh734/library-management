import { Request, Response } from 'express';
import { MembersService } from '../services/members.service';
import { NotificationService } from "../services/notification.services";

export const MembersController = {
  getAll: (req: Request, res: Response) => res.json(MembersService.getAll()),

  getById: (req: Request, res: Response) => {
    const id = req.params.id;
    const member = MembersService.getById(id);
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  },

  create: (req: Request, res: Response) => {
    const member = MembersService.create(req.body);

    // Send welcome email
    NotificationService.sendRegistrationConfirmation(member.email, member.name)
      .catch(() => console.log("Email failed but registration still successful"));

    res.status(201).json(member);
  },

  update: (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedMember = MembersService.update(id, req.body);
    if (!updatedMember) {
    return res.status(404).json({ message: "Member not found" });
  }
    res.json(updatedMember);
  },

  delete: (req: Request, res: Response) => {
    const id = req.params.id;
    const removedMember = MembersService.delete(id);
    if (!removedMember) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted successfully' });
  },

  createWithEmail: (req: Request, res: Response) => {
    const member = MembersService.create(req.body);

    // Send welcome email
    NotificationService.sendRegistrationConfirmation(member.email, member.name)
      .catch(() => console.log("Email failed but registration still successful"));

    res.status(201).json(member);
  },
};

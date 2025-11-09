import { MembersRepository } from '../repositories/members.repository';

export const MembersService = {
  getAll: () => MembersRepository.getAll(),
  getById: (id: string) => MembersRepository.getById(id),
  create: (member: any) => MembersRepository.create(member),
  update: (id: string, member: any) => MembersRepository.update(id, member),
  delete: (id: string) => MembersRepository.delete(id),
};

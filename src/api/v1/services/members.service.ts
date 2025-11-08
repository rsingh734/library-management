import { MembersRepository } from '../repositories/members.repository';

export const MembersService = {
  getAll: () => MembersRepository.getAll(),
  getById: (id: number) => MembersRepository.getById(id),
  create: (member: any) => MembersRepository.create(member),
  update: (id: number, member: any) => MembersRepository.update(id, member),
  delete: (id: number) => MembersRepository.delete(id),
};

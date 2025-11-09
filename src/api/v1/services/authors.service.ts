import { AuthorsRepository } from '../repositories/authors.repository';

export const AuthorsService = {
  getAll: () => AuthorsRepository.getAll(),
  getById: (id: string) => AuthorsRepository.getById(id),
  create: (author: any) => AuthorsRepository.create(author),
  update: (id: string, author: any) => AuthorsRepository.update(id, author),
  delete: (id: string) => AuthorsRepository.delete(id),
};

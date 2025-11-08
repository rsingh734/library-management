import { AuthorsRepository } from '../repositories/authors.repository';

export const AuthorsService = {
  getAll: () => AuthorsRepository.getAll(),
  getById: (id: number) => AuthorsRepository.getById(id),
  create: (author: any) => AuthorsRepository.create(author),
  update: (id: number, author: any) => AuthorsRepository.update(id, author),
  delete: (id: number) => AuthorsRepository.delete(id),
};

import { BooksRepository } from '../repositories/books.repository';

export const BooksService = {
  getAll: () => BooksRepository.getAll(),
  getById: (id: string) => BooksRepository.getById(id),
  create: (book: any) => BooksRepository.create(book),
  update: (id: string, book: any) => BooksRepository.update(id, book),
  delete: (id: string) => BooksRepository.delete(id),
};

import { BooksRepository } from '../repositories/books.repository';

export const BooksService = {
  getAll: () => BooksRepository.getAll(),
  getById: (id: number) => BooksRepository.getById(id),
  create: (book: any) => BooksRepository.create(book),
  update: (id: number, book: any) => BooksRepository.update(id, book),
  delete: (id: number) => BooksRepository.delete(id),
};

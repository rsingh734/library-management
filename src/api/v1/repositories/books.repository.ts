interface Book {
  id: string;
  title: string;
  authorId: number;
  ISBN: string;
  publicationYear: number;
  genre: string;
  availableCopies: number;
  totalCopies: number;
  description: string;
}

let books: Book[] = [];
let nextId = 1;

export const BooksRepository = {
  getAll: () => books,
  getById: (id: string) => books.find(book => book.id === id),
  create: (book: Omit<Book, 'id'>) => {
    const newBook = { ...book, id: nextId.toString() };
    nextId++;
    books.push(newBook);
    return newBook;
  },
  update: (id: string, book: Partial<Book>) => {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return null;
    books[index] = { ...books[index], ...book };
    return books[index];
  },
  delete: (id: string) => {
    const index = books.findIndex(b => b.id === id);
    if (index === -1) return null;
    return books.splice(index, 1)[0];
  },
};


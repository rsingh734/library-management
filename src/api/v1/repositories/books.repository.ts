interface Book {
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

export const BooksRepository = {
  getAll: () => books,
  getById: (id: number) => books[id],
  create: (book: Book) => {
    books.push(book);
    return book;
  },
  update: (id: number, book: Book) => {
    books[id] = book;
    return books[id];
  },
  delete: (id: number) => books.splice(id, 1)[0],
};


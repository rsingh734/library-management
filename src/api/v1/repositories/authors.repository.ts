interface Author {
  name: string;
  biography: string;
  nationality: string;
  birthDate: string;
  books: number[]; // array of book indices
}

let authors: Author[] = [];

export const AuthorsRepository = {
  getAll: () => authors,
  getById: (id: number) => authors[id],
  create: (author: Author) => {
    authors.push(author);
    return author;
  },
  update: (id: number, author: Author) => {
    authors[id] = author;
    return authors[id];
  },
  delete: (id: number) => authors.splice(id, 1)[0],
};

interface Author {
  id: string;
  name: string;
  biography: string;
  nationality: string;
  birthDate: string;
  books: number[]; // array of book indices
}

let authors: Author[] = [];
let nextId = 1;

export const AuthorsRepository = {
  getAll: () => authors,
  getById: (id: string) => authors.find(author => author.id === id),
  create: (author: Omit<Author, 'id'>) => {
    const newAuthor = { ...author, id: nextId.toString() };
    nextId++;
    authors.push(newAuthor);
    return newAuthor;
  },
  update: (id: string, author: Partial<Author>) => {
    const index = authors.findIndex(a => a.id === id);
    if (index === -1) return null;
    authors[index] = { ...authors[index], ...author };
    return authors[index];
  },
  delete: (id: string) => {
    const index = authors.findIndex(a => a.id === id);
    if (index === -1) return null;
    return authors.splice(index, 1)[0];
  },
};

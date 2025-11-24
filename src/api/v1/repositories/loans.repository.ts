let loans: any[] = []; // temporary in-memory storage

export const borrowBook = (data: any) => {
  const loan = { ...data, dateBorrowed: new Date().toISOString() };
  loans.push(loan);
  return loan;
};

export const returnBook = (data: any) => {
  const index = loans.findIndex(
    (l) => l.memberId === data.memberId && l.bookId === data.bookId
  );
  if (index !== -1) {
    const returned = loans.splice(index, 1)[0];
    return returned;
  }
  return null;
};

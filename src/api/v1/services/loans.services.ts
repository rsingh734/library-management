import * as loansRepo from '../repositories/loans.repository';

export const borrowBook = (data: any) => {
  // Example: data = { memberId, bookId }
  return loansRepo.borrowBook(data);
};

export const returnBook = (data: any) => {
  return loansRepo.returnBook(data);
};

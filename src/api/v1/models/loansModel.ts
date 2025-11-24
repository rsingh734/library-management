export interface Loan {
  id: string;
  memberId: string;
  bookId: string;
  loanDate: string;
  returnDate?: string;
  status: "active" | "returned" | "late";
}

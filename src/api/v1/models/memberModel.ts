export interface Member {
  id: string;
  name: string;
  joinDate: string;
  membershipType: "standard" | "premium";
  borrowedBooks: number[];
  contactPreferences: "email" | "sms";
}

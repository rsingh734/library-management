export interface Notification {
  id: string;
  memberId: string;
  type: "reminder" | "return" | "general";
  message: string;
  createdAt: string;
  sent: boolean;
}

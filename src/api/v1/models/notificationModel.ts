export interface ApiSuccessResponse {
  success: true;
  message: string;
  statusCode: number;
  data?: any;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  error?: any;
}

export interface Notification {
  id: string;
  type: "registration" | "reservation" | "returnReminder";
  email: string;
  name?: string;          // For registration
  bookTitle?: string;     // For reservation/return
  dueDate?: string;       // For returnReminder
  createdAt: string;      // ISO timestamp
}

export let notifications: Notification[] = [];
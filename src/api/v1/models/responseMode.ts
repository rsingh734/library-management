export interface ApiResponse<T> {
  message: string;
  data: T;
}

export interface ApiListResponse<T> {
  message: string;
  data: T[];
  total: number;
}

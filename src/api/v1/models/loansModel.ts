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

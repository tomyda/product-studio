export interface FlightDetails {
  from: string;
  to: string;
  date: string;
  passengers: number;
  class: 'Economy' | 'Business' | 'First';
  reason: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  id?: string;
}

export interface ResendErrorResponse {
  name: string;
  message: string;
  statusCode?: number;
}

export interface ResendSuccessResponse {
  id: string;
}
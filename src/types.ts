export interface FlightDetails {
  from: string;
  to: string;
  date: string;
  passengers: number;
  class: string;
  reason: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}
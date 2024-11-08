import React from 'react';
import { FlightDetails } from '../types';

interface BookingSummaryProps {
  flightDetails: FlightDetails;
}

export function BookingSummary({ flightDetails }: BookingSummaryProps) {
  if (!flightDetails.from && !flightDetails.to) return null;

  return (
    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h3>
      <div className="space-y-2">
        {flightDetails.from && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">From:</span> {flightDetails.from}
          </p>
        )}
        {flightDetails.to && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">To:</span> {flightDetails.to}
          </p>
        )}
        {flightDetails.date && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Date:</span>{' '}
            {new Date(flightDetails.date).toLocaleDateString()}
          </p>
        )}
        {flightDetails.passengers > 0 && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Passengers:</span> {flightDetails.passengers}
          </p>
        )}
        {flightDetails.class && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Class:</span> {flightDetails.class}
          </p>
        )}
        {flightDetails.reason && (
          <p className="text-sm text-gray-600">
            <span className="font-medium">Reason:</span> {flightDetails.reason}
          </p>
        )}
      </div>
    </div>
  );
}
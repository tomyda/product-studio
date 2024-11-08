import React from 'react';
import { Mail } from 'lucide-react';
import { BookingStep } from './BookingStep';

interface EmailStepProps {
  email: string;
  onChange: (email: string) => void;
}

export function EmailStep({ email, onChange }: EmailStepProps) {
  return (
    <BookingStep icon={Mail} title="Your Email">
      <input
        type="email"
        value={email}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your email for booking confirmation"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        required
      />
      <p className="mt-2 text-sm text-gray-600">
        We'll send your booking confirmation to this email address
      </p>
    </BookingStep>
  );
}
import React from 'react';

interface NavigationButtonsProps {
  step: number;
  isSubmitting: boolean;
  onBack: () => void;
}

export function NavigationButtons({ step, isSubmitting, onBack }: NavigationButtonsProps) {
  return (
    <div className="mt-8 flex justify-between">
      {step > 1 && (
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
          disabled={isSubmitting}
        >
          Back
        </button>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors ml-auto ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting
          ? 'Processing...'
          : step === 7
          ? 'Complete Booking'
          : 'Next'}
      </button>
    </div>
  );
}
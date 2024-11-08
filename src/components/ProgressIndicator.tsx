import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressIndicator({ currentStep, totalSteps }: ProgressIndicatorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep >= num
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
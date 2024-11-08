import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface BookingStepProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function BookingStep({ icon: Icon, title, children }: BookingStepProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
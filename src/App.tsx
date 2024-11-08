import React, { useState } from 'react';
import {
  Plane,
  Calendar,
  Users,
  MapPin,
  Briefcase,
  PlaneTakeoff,
} from 'lucide-react';
import { BookingStep } from './components/BookingStep';
import { BookingSummary } from './components/BookingSummary';
import { EmailStep } from './components/EmailStep';
import { NavigationButtons } from './components/NavigationButtons';
import { ProgressIndicator } from './components/ProgressIndicator';
import { FlightDetails } from './types';
import { send } from './services/email';

function App() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [flightDetails, setFlightDetails] = useState<FlightDetails>({
    from: '',
    to: '',
    date: '',
    passengers: 1,
    class: 'Economy',
    reason: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 7) {
      setStep(step + 1);
      return;
    }

    if (!userEmail) {
      alert('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await send(flightDetails);

      if (!result.error) {
        alert('Booking confirmed! Check your email for confirmation details.');
        // Reset form
        setStep(1);
        setFlightDetails({
          from: '',
          to: '',
          date: '',
          passengers: 1,
          class: 'Economy',
          reason: '',
        });
        setUserEmail('');
      } else {
        alert(
          `Booking submitted but ${result.error.toLowerCase()}. Please contact support if needed.`
        );
      }
    } catch (error) {
      console.error('Booking submission failed:', error);
      alert(
        'An error occurred while processing your booking. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center space-x-3 mb-8">
          <Plane className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-800">SkyBooker</h1>
        </div>

        <ProgressIndicator currentStep={step} totalSteps={7} />

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <BookingStep icon={MapPin} title="Departure City">
              <input
                type="text"
                value={flightDetails.from}
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, from: e.target.value })
                }
                placeholder="From where?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </BookingStep>
          )}

          {step === 2 && (
            <BookingStep icon={MapPin} title="Destination City">
              <input
                type="text"
                value={flightDetails.to}
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, to: e.target.value })
                }
                placeholder="Where to?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </BookingStep>
          )}

          {step === 3 && (
            <BookingStep icon={Calendar} title="Travel Date">
              <input
                type="date"
                value={flightDetails.date}
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, date: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </BookingStep>
          )}

          {step === 4 && (
            <BookingStep icon={Users} title="Passengers">
              <input
                type="number"
                min="1"
                max="10"
                value={flightDetails.passengers}
                onChange={(e) =>
                  setFlightDetails({
                    ...flightDetails,
                    passengers: parseInt(e.target.value),
                  })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              />
            </BookingStep>
          )}

          {step === 5 && (
            <BookingStep icon={Briefcase} title="Travel Class">
              <select
                value={flightDetails.class}
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, class: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                required
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First Class</option>
              </select>
            </BookingStep>
          )}

          {step === 6 && (
            <BookingStep icon={PlaneTakeoff} title="Reason for Travel">
              <textarea
                value={flightDetails.reason}
                onChange={(e) =>
                  setFlightDetails({ ...flightDetails, reason: e.target.value })
                }
                placeholder="Please describe your reason for travel..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
                required
              />
            </BookingStep>
          )}

          {step === 7 && (
            <EmailStep email={userEmail} onChange={setUserEmail} />
          )}

          <NavigationButtons
            step={step}
            isSubmitting={isSubmitting}
            onBack={() => setStep(step - 1)}
          />
        </form>

        {step < 8 && <BookingSummary flightDetails={flightDetails} />}
      </div>
    </div>
  );
}

export default App;

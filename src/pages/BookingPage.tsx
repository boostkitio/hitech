import React, { useEffect, lazy, Suspense } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

// Lazy load the widget component to isolate it
const VagaroWidget = lazy(() => import('../components/booking/VagaroWidget'));

const BookingPage: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Schedule your next treatment with our experienced practitioners. Select your preferred service, date, and time through our online booking system.
          </p>
        </div>

        {/* Booking Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Opening Hours</h3>
            <p className="text-neutral-600">
              Monday - Saturday: 9:00am - 5:30pm<br />
              Sunday: Closed
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Location</h3>
            <p className="text-neutral-600">
              Hi Tech Aesthetics<br />
              Tunbridge Wells<br />
              Kent, United Kingdom
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Contact</h3>
            <p className="text-neutral-600">
              Phone: 01892 338157<br />
              Email: info@hitechaesthetics.com
            </p>
          </div>
        </div>

        {/* Vagaro Widget Embedded */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto mb-8">
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-[800px]">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                  <p className="text-neutral-600">Loading booking widget...</p>
                </div>
              </div>
            }
          >
            <VagaroWidget />
          </Suspense>
          <p className="text-xs text-center text-neutral-500 mt-4">
            If the booking interface doesn't appear, please use the direct link below.
          </p>
        </div>

        {/* Alternative Booking Methods */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-8">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4 text-center">Other Ways to Book</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <Phone className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium text-neutral-900">Call Us</p>
              <a href="tel:+441892338157" className="text-primary-600 hover:text-primary-700">
                01892 338157
              </a>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="font-medium text-neutral-900">Walk In</p>
              <p className="text-sm text-neutral-600">Visit us during opening hours</p>
            </div>
            <div className="text-center p-4 bg-neutral-50 rounded-lg">
              <div className="w-8 h-8 text-primary-600 mx-auto mb-2 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <p className="font-medium text-neutral-900">Online Booking</p>
              <a
                href="https://www.vagaro.com/hitechaesthetics/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                Direct Link
              </a>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Booking Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Before Your Appointment</h3>
              <ul className="list-disc list-inside text-neutral-600 space-y-1">
                <li>Please arrive 10 minutes early for paperwork</li>
                <li>Bring a list of current medications and allergies</li>
                <li>Remove makeup if having a facial treatment</li>
                <li>Avoid sun exposure 24 hours before laser treatments</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Cancellation Policy</h3>
              <p className="text-neutral-600">
                We require 24 hours notice for cancellations or rescheduling.
                Late cancellations or no-shows may be subject to a cancellation fee.
                Please contact us directly if you need to make changes to your appointment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
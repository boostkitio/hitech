import React, { useEffect } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

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
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 4:00 PM<br />
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
              Email: info@hitechaesthetics.co.uk
            </p>
          </div>
        </div>

        {/* Booking Options */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">Book Your Appointment</h2>

          <div className="space-y-6">
            {/* Online Booking Button */}
            <div className="text-center">
              <a
                href="https://www.vagaro.com/hitechaesthetics/book-now"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-lg"
              >
                Book Online Now
              </a>
              <p className="mt-3 text-sm text-neutral-600">
                Click the button above to book your appointment through our online booking system
              </p>
            </div>

            {/* Alternative Booking Methods */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 text-center">Other Ways to Book</h3>
              <div className="grid md:grid-cols-2 gap-4">
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
              </div>
            </div>

            {/* Services Preview */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4 text-center">Popular Treatments</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">Botox</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">Dermal Fillers</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">Laser Hair Removal</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">Skin Rejuvenation</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">Chemical Peels</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">Microneedling</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">LED Therapy</div>
                <div className="bg-primary-50 px-3 py-2 rounded text-center text-primary-800">PRP Treatment</div>
              </div>
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
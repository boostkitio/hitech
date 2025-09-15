import React, { useEffect } from 'react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

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
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
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
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
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
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Contact</h3>
            <p className="text-neutral-600">
              Phone: 01892 338157<br />
              Email: info@hitechaesthetics.co.uk
            </p>
          </div>
        </div>

        {/* Vagaro Widget Container */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <div
                id='frameTitle'
                className='embedded-widget-title'
                style={{
                  fontSize: '23px',
                  color: '#333',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  lineHeight: '24px',
                  padding: '18px 10px 8px',
                  textAlign: 'center',
                  WebkitBoxSizing: 'border-box',
                  MozBoxSizing: 'border-box',
                  boxSizing: 'border-box'
                }}
              >
                Book Now
              </div>
              <div
                className="vagaro"
                style={{
                  width: '250px',
                  padding: 0,
                  border: 0,
                  margin: '0 auto',
                  textAlign: 'center'
                }}
                dangerouslySetInnerHTML={{
                  __html: `
                    <style>.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}</style>
                    <a href="https://www.vagaro.com/en-gb/pro/">Powered by Vagaro</a>&nbsp;
                    <a href="https://www.vagaro.com/en-gb/pro/salon-software">Salon Software</a>,&nbsp;
                    <a href="https://www.vagaro.com/en-gb/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
                    <a href="https://www.vagaro.com/en-gb/pro/fitness-software">Fitness Software</a>
                    <script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoCZ0nEJOcT3qmV35y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwOapcUbfY?v=loBDWG4BYCkF4xzcQSEIv1krqOQHlzDJmWdoSoyHDwiW#"></script>
                  `
                }}
              />
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
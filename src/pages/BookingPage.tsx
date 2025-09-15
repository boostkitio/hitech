import React, { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const BookingPage: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (widgetContainerRef.current && !widgetLoaded) {
        // Create the widget HTML structure
        const widgetHTML = `
          <div id='frameTitle' class='embedded-widget-title' style='font-size: 23px; color: #333;font-family:Arial, Helvetica, sans-serif; line-height:24px; padding: 18px 10px 8px; text-align: center; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;'>Book Now</div>
          <div class="vagaro" style="width:100%; max-width:800px; padding:0; border:0; margin:0 auto; text-align:center;">
            <style>.vagaro a {font-size:14px; color:#AAA; text-decoration:none;}</style>
            <a href="https://www.vagaro.com/en-gb/pro/">Powered by Vagaro</a>&nbsp;
            <a href="https://www.vagaro.com/en-gb/pro/salon-software">Salon Software</a>,&nbsp;
            <a href="https://www.vagaro.com/en-gb/pro/spa-software">Spa Software</a>&nbsp;&amp;&nbsp;
            <a href="https://www.vagaro.com/en-gb/pro/fitness-software">Fitness Software</a>
          </div>
        `;

        // Insert the HTML
        widgetContainerRef.current.innerHTML = widgetHTML;

        // Create and load the script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoCZ0nEJOcT3qmV35y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwOapcUbfY?v=loBDWG4BYCkF4xzcQSEIv1krqOQHlzDJmWdoSoyHDwiW#';
        script.async = false;

        // Add event listeners to track loading
        script.onload = () => {
          console.log('Vagaro script loaded successfully');
          setWidgetLoaded(true);
        };

        script.onerror = () => {
          console.error('Failed to load Vagaro script');
        };

        // Append to the specific container div within the widget
        const vagaroDiv = widgetContainerRef.current.querySelector('.vagaro');
        if (vagaroDiv) {
          vagaroDiv.appendChild(script);
        }
      }
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-white to-neutral-50">
      {/* Add Vagaro script via Helmet as a fallback */}
      <Helmet>
        <script
          type="text/javascript"
          src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqoCZ0nEJOcT3qmV35y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwOapcUbfY?v=loBDWG4BYCkF4xzcQSEIv1krqOQHlzDJmWdoSoyHDwiW#"
        />
      </Helmet>
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

        {/* Vagaro Widget Embedded */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto mb-8">
          <div className="flex justify-center">
            {/* This div will contain the dynamically injected Vagaro widget */}
            <div
              ref={widgetContainerRef}
              style={{
                width: '100%',
                maxWidth: '800px',
                minHeight: '500px',
                position: 'relative'
              }}
            >
              {!widgetLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                    <p className="text-neutral-600">Loading booking widget...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {widgetLoaded && (
            <p className="text-xs text-center text-neutral-500 mt-4">
              Widget loaded. If you don't see the booking interface, please try the direct link below.
            </p>
          )}
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
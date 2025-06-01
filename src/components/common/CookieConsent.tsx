import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Show the cookie banner after a short delay
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setVisible(false);
  };
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg z-50 border-t border-neutral-200">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="pr-8 mb-4 md:mb-0">
            <p className="text-sm text-neutral-800 mb-1">
              <strong>We value your privacy</strong>
            </p>
            <p className="text-xs text-neutral-600">
              We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <button 
              onClick={acceptCookies}
              className="btn btn-primary py-2 px-4 text-sm"
            >
              Accept All
            </button>
            <button 
              onClick={() => setVisible(false)}
              className="btn btn-outline py-2 px-4 text-sm"
            >
              Decline
            </button>
            <button 
              onClick={() => setVisible(false)}
              className="text-neutral-500 hover:text-neutral-700"
              aria-label="Close cookie consent"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
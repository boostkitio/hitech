import React, { useState } from 'react';

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+442071234567";
  
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen && (
        <div className="mb-4 p-4 bg-white rounded-lg shadow-lg max-w-xs animate-fade-in">
          <div className="bg-green-500 text-white p-3 rounded-t-lg">
            <h3 className="text-lg font-medium">Hi there 👋</h3>
            <p className="text-sm opacity-90">How can we help you today?</p>
          </div>
          <div className="p-3 border-b">
            <p className="text-sm text-neutral-600 mb-2">
              Chat with our team for quick responses to your questions about our treatments and services.
            </p>
            <a 
              href={`https://wa.me/${phoneNumber.replace(/\+/g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded transition-colors"
            >
              Start Chat
            </a>
          </div>
          <div className="p-3">
            <p className="text-xs text-neutral-500">
              We typically reply within a few minutes during business hours.
            </p>
          </div>
          <button 
            className="absolute top-2 right-2 text-white hover:opacity-80"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full bg-green-500 p-3 text-white shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center ${isOpen ? 'scale-90' : 'scale-100'}`}
        aria-label="Open WhatsApp chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 7.1 17.1l.9 3.9-3.9-.9A10 10 0 1 1 12 2Z"></path>
          <path d="M17 15.5c-.67 0-1.22-.54-1.22-1.21 0-.67.55-1.22 1.22-1.22.67 0 1.21.55 1.21 1.22 0 .67-.54 1.21-1.21 1.21Z"></path>
          <path d="M14 12.79c-.38 0-.68-.3-.68-.68 0-.38.3-.68.68-.68.38 0 .68.3.68.68 0 .38-.3.68-.68.68Z"></path>
          <path d="M11 12.79c-.38 0-.68-.3-.68-.68 0-.38.3-.68.68-.68.38 0 .68.3.68.68 0 .38-.3.68-.68.68Z"></path>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
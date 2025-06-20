import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const [isTreatmentsMenuOpen, setIsTreatmentsMenuOpen] = useState(false);
  const location = useLocation();
  const priceMenuTimer = useRef<NodeJS.Timeout | null>(null);
  const treatmentsMenuTimer = useRef<NodeJS.Timeout | null>(null);
  
  // Check if we're on a page that has a white background from the top
  const isOnWhiteBackgroundPage = location.pathname.startsWith('/treatments/');
  
  useEffect(() => {
    setIsOpen(false);
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handlePriceMenuEnter = () => {
    if (priceMenuTimer.current) {
      clearTimeout(priceMenuTimer.current);
    }
    setIsPriceMenuOpen(true);
  };

  const handlePriceMenuLeave = () => {
    priceMenuTimer.current = setTimeout(() => {
      setIsPriceMenuOpen(false);
    }, 200); // 200ms delay to allow mouse to travel to menu
  };

  const handleTreatmentsMenuEnter = () => {
    if (treatmentsMenuTimer.current) {
      clearTimeout(treatmentsMenuTimer.current);
    }
    setIsTreatmentsMenuOpen(true);
  };

  const handleTreatmentsMenuLeave = () => {
    treatmentsMenuTimer.current = setTimeout(() => setIsTreatmentsMenuOpen(false), 200);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => {
    const onLight = isScrolled || isOnWhiteBackgroundPage;
    if (isActive) {
      if (onLight) {
        return 'relative px-3 py-2 text-sm font-bold text-primary-800 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-800';
      } else {
        return 'relative px-3 py-2 text-sm font-bold text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white';
      }
    }
    return onLight
      ? 'relative px-3 py-2 text-sm font-medium text-neutral-800 hover:text-primary-600 transition-colors duration-300'
      : 'relative px-3 py-2 text-sm font-medium text-white hover:text-primary-200 transition-colors duration-300';
  };
  
  const priceListMenu = [
    { id: 'soprano-ice-platinum', name: 'Soprano Ice Platinum' },
    { id: 'electrolysis', name: 'Apilus xCell Pro Electrolysis' },
    { id: 'lynton-3juve', name: 'Lynton 3JUVE IPL & Laser' },
    { id: 'skinpen', name: 'SkinPen Microneedling' },
    { id: 'dermalux', name: 'Dermalux LED Therapy' },
    { id: 'prp', name: 'PRP Restoration' },
    { id: 'botox', name: 'Anti-Wrinkle Injections' },
    { id: 'chemical-peels', name: 'Chemical Peels' },
    { id: 'facials', name: 'Facials' },
    { id: 'skin-boosters', name: 'Skin Boosters' },
    { id: 'fat-dissolving', name: 'Fat Dissolving' },
    { id: 'polynucleotides', name: 'Vitaran Polynucleotides' },
    { id: 'permanent-makeup', name: 'Permanent Makeup' },
    { id: 'gift-cards', name: 'Gift Cards' },
  ];
  
  const treatmentsMenu = [
    { id: 'hairremoval', name: 'Hair Removal Treatments' },
    { id: 'injectables', name: 'Injectable Treatments' },
    { id: 'skinrejuvenation', name: 'Skin Rejuvenation' },
    { id: 'advancedtherapies', name: 'Advanced Therapies' },
  ];
  
  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      (isScrolled || isOnWhiteBackgroundPage) ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <Logo color={(isScrolled || isOnWhiteBackgroundPage) ? '#A8A5A0' : '#ffffff'} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses}>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About</NavLink>
            <div
              className="relative"
              onMouseEnter={handleTreatmentsMenuEnter}
              onMouseLeave={handleTreatmentsMenuLeave}
            >
              <NavLink to="/treatments" className={navLinkClasses}>
                <span className="flex items-center">
                  Treatments
                  <ChevronDown
                    className={`ml-1 transition-transform duration-200 ${isTreatmentsMenuOpen ? 'rotate-180' : ''}`}
                    size={16}
                  />
                </span>
              </NavLink>
              {isTreatmentsMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-10 fade-in-fast">
                  {treatmentsMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={`/treatments#${item.id}`}
                      onClick={() => setIsTreatmentsMenuOpen(false)}
                      className="block w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={handlePriceMenuEnter}
              onMouseLeave={handlePriceMenuLeave}
            >
              <NavLink to="/price-list" className={navLinkClasses}>
                <span className="flex items-center">
                  Price List
                  <ChevronDown
                    className={`ml-1 transition-transform duration-200 ${isPriceMenuOpen ? 'rotate-180' : ''}`}
                    size={16}
                  />
                </span>
              </NavLink>
              {isPriceMenuOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-10 fade-in-fast"
                >
                  {priceListMenu.map((item) => (
                    <Link
                      key={item.id}
                      to={`/price-list#${item.id}`}
                      onClick={() => setIsPriceMenuOpen(false)}
                      className="block w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/skin-membership" className={navLinkClasses}>Skin Membership</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            
            <a 
              href="tel:+441892338157" 
              className={`flex items-center space-x-2 ml-4 ${
                (isScrolled || isOnWhiteBackgroundPage) ? 'text-primary-800' : 'text-white'
              }`}
            >
              <Phone size={18} />
              <span className="text-sm font-medium">01892 338157</span>
            </a>
            
            <Link 
              to="/contact" 
              className="btn btn-primary"
            >
              Free Consultation
            </Link>
            <a href="https://www.instagram.com/hitech_aesthetics/" target="_blank" rel="noopener noreferrer" className={`ml-4 ${(isScrolled || isOnWhiteBackgroundPage) ? 'text-primary-800' : 'text-white'}`}>
              <Instagram size={24} />
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${(isScrolled || isOnWhiteBackgroundPage) ? 'text-primary-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${(isScrolled || isOnWhiteBackgroundPage) ? 'text-primary-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-primary-900 shadow-2xl border-l-4 border-primary-800 z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 z-50 text-white bg-primary-800 rounded-full p-2 shadow-lg focus:outline-none"
          onClick={e => { e.stopPropagation(); setIsOpen(false); }}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="flex flex-col h-full justify-center items-center" onClick={e => e.stopPropagation()}>
          <nav className="flex flex-col items-center space-y-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive
                  ? 'text-2xl font-bold text-white bg-white/10 rounded-full px-6 py-2 underline underline-offset-8'
                  : 'text-2xl font-medium text-white hover:text-primary-200'
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive
                  ? 'text-2xl font-bold text-white bg-white/10 rounded-full px-6 py-2 underline underline-offset-8'
                  : 'text-2xl font-medium text-white hover:text-primary-200'
              }
            >
              About
            </NavLink>
            <div>
              <button
                onClick={() => setIsTreatmentsMenuOpen(!isTreatmentsMenuOpen)}
                className={`block py-3 text-lg font-medium transition-colors duration-300 ${
                    isTreatmentsMenuOpen ? 'text-primary-800' : 'text-neutral-700 hover:text-primary-800'
                }`}
              >
                Treatments
              </button>
              {isTreatmentsMenuOpen && (
                <div className="pl-4 pt-2 pb-2 border-l-2 border-primary-200">
                  {treatmentsMenu.map(item => (
                    <Link
                      key={item.id}
                      to={`/treatments#${item.id}`}
                      onClick={() => {
                        setIsTreatmentsMenuOpen(false);
                        setIsOpen(false);
                      }}
                      className="block py-2 text-md text-neutral-600 hover:text-primary-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => setIsPriceMenuOpen(!isPriceMenuOpen)}
                className={`block py-3 text-lg font-medium transition-colors duration-300 ${
                    isPriceMenuOpen ? 'text-primary-800' : 'text-neutral-700 hover:text-primary-800'
                }`}
              >
                Price List
              </button>
              {isPriceMenuOpen && (
                <div className="pl-4 pt-2 pb-2 border-l-2 border-primary-200">
                  {priceListMenu.map(item => (
                    <Link
                      key={item.id}
                      to={`/price-list#${item.id}`}
                      onClick={() => {
                        setIsPriceMenuOpen(false);
                        setIsOpen(false);
                      }}
                      className="block py-2 text-md text-neutral-600 hover:text-primary-800"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink 
              to="/skin-membership" 
              className={({ isActive }) => 
                isActive
                  ? 'text-2xl font-bold text-white bg-white/10 rounded-full px-6 py-2 underline underline-offset-8'
                  : 'text-2xl font-medium text-white hover:text-primary-200'
              }
            >
              Skin Membership
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive
                  ? 'text-2xl font-bold text-white bg-white/10 rounded-full px-6 py-2 underline underline-offset-8'
                  : 'text-2xl font-medium text-white hover:text-primary-200'
              }
            >
              Contact
            </NavLink>
            <div className="pt-8 flex flex-col items-center space-y-4">
              <a 
                href="tel:+441892338157" 
                className="flex items-center text-white space-x-2"
              >
                <Phone size={20} />
                <span className="text-lg">01892 338157</span>
              </a>
              <Link 
                to="/contact" 
                className="btn btn-primary mt-4"
              >
                Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
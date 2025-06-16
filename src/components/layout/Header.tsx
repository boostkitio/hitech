import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
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
            <NavLink to="/treatments" className={navLinkClasses}>Treatments</NavLink>
            <NavLink to="/price-list" className={navLinkClasses}>Price List</NavLink>
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
            <NavLink 
              to="/treatments" 
              className={({ isActive }) => 
                isActive
                  ? 'text-2xl font-bold text-white bg-white/10 rounded-full px-6 py-2 underline underline-offset-8'
                  : 'text-2xl font-medium text-white hover:text-primary-200'
              }
            >
              Treatments
            </NavLink>
            <NavLink 
              to="/price-list" 
              className={({ isActive }) => 
                isActive
                  ? 'text-2xl font-bold text-white bg-white/10 rounded-full px-6 py-2 underline underline-offset-8'
                  : 'text-2xl font-medium text-white hover:text-primary-200'
              }
            >
              Price List
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
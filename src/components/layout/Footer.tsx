import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and about */}
          <div className="space-y-4">
            <Logo color="#ffffff" />
            <p className="text-neutral-300 mt-4">
              HiTech Aesthetics provides luxury medical aesthetics treatments with cutting-edge technology and personalised care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-secondary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-secondary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/treatments" className="text-neutral-300 hover:text-secondary-400 transition-colors">Our Treatments</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-secondary-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <a href="/privacy-policy" className="text-neutral-300 hover:text-secondary-400 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-neutral-300 hover:text-secondary-400 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-neutral-300 hover:text-secondary-400 transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Our Treatments</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">Dermal Fillers</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">Anti-Wrinkle Treatment</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">Skin Rejuvenation</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">Chemical Peels</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">Microneedling</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-secondary-400 transition-colors">Laser Treatments</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Information */}
          <div>
            <h3 className="text-xl text-white font-medium mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-secondary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">114 Camden Road, Tunbridge Wells, TN1 2QX</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary-400 flex-shrink-0" />
                <a href="tel:+441892338157" className="text-neutral-300 hover:text-secondary-400 transition-colors">01892 338157</a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary-400 flex-shrink-0" />
                <a href="mailto:info@hitechaesthetics.co.uk" className="text-neutral-300 hover:text-secondary-400 transition-colors">info@hitechaesthetics.co.uk</a>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 text-secondary-400 flex-shrink-0 mt-1" />
                <div className="text-neutral-300">
                  <p className="mb-1">Mon-Fri: 9am - 6pm</p>
                  <p className="mb-1">Saturday: 10am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-700 mt-12 pt-8 text-neutral-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} HiTech Aesthetics. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed and developed with excellence in mind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
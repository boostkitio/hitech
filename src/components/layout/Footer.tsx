import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
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
              <a href="https://www.instagram.com/hitechaesthetics" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@hitechaesthetics" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary-400 transition-colors">
                <span className="sr-only">TikTok</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2v4.5a4.5 4.5 0 0 0 4.5 4.5H22v3a7 7 0 1 1-7-7h3" />
                </svg>
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
                <Link to="/treatments/botox" className="text-neutral-300 hover:text-secondary-400 transition-colors">Botox</Link>
              </li>
              <li>
                <Link to="/treatments/soprano-ice-platinum" className="text-neutral-300 hover:text-secondary-400 transition-colors">Laser Hair Removal</Link>
              </li>
              <li>
                <Link to="/treatments/skinpen-microneedling" className="text-neutral-300 hover:text-secondary-400 transition-colors">Microneedling</Link>
              </li>
              <li>
                <Link to="/treatments/polynucleotides" className="text-neutral-300 hover:text-secondary-400 transition-colors">Polynucleotides</Link>
              </li>
              <li>
                <Link to="/treatments/lynton-ipl" className="text-neutral-300 hover:text-secondary-400 transition-colors">IPL Treatments</Link>
              </li>
              <li>
                <Link to="/price-list" className="text-neutral-300 hover:text-secondary-400 transition-colors">View All Prices</Link>
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
        <div className="border-t border-primary-700 mt-12 pt-8 text-white text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 HiTech Aesthetics. All rights reserved.</p>
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
import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from '../../../assets/LinkedInIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">BCM Solutions LLC</h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Biopharma Consulting - Guiding biotech companies through all phases of Chemistry, Manufacturing, and Controls (CMC).
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4">Navigation</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Home
              </Link>
              <Link to="/who-we-are" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Who We Are
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase text-gray-400 tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="mailto:info@bcmconsultingllc.com" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Email us"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/bryantmclaughlin/" 
                className="text-gray-400 hover:text-white transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-sm text-gray-400">
            &copy; 2025 BCM Solutions LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
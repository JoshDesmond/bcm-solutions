import React from 'react';
import { Link } from 'react-router-dom';

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
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
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
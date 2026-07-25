import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedInIcon } from '../../../assets/LinkedInIcon';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Who We Are', href: '/who-we-are' },
  { name: 'Contact', href: '/contact' },
];

const columnHeading = 'font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/60 mb-5';
const footerLink =
  'block font-mono text-xs uppercase tracking-[0.14em] text-white/65 hover:text-copper-lift transition-colors duration-200';

export const Footer: React.FC = () => {
  return (
    <footer className="surface-deep border-t border-white/10 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            {/* Echoes the wordmark: BCM set wide, SOLUTIONS ruled and letterspaced */}
            <p className="font-display text-3xl font-semibold tracking-[0.06em] text-white">BCM</p>
            <p className="eyebrow text-white/65 mt-2 mb-6">Solutions LLC</p>

            <p className="leading-relaxed max-w-md text-white/70">
              Biopharma Consulting — Guiding biotech companies through all phases of Chemistry, Manufacturing, and Controls (CMC).
            </p>
            <a
              href="https://www.mclaughlinweb.com"
              className="group inline-flex items-center gap-2 mt-6 font-mono text-xs uppercase tracking-[0.14em] text-white/70 hover:text-copper-lift transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden="true" className="h-px w-6 bg-current opacity-60 transition-all duration-300 group-hover:w-9" />
              Community Outreach: Education
            </a>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h4 className={columnHeading}>Navigation</h4>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link key={item.href} to={item.href} className={footerLink}>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Connect Section */}
          <div>
            <h4 className={columnHeading}>Connect</h4>
            <div className="flex space-x-3">
              <a 
                href="mailto:info@bcmconsultingllc.com" 
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white/65 transition-colors duration-200 hover:border-copper hover:text-copper-lift"
                aria-label="Email us"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/bryantmclaughlin/" 
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white/65 transition-colors duration-200 hover:border-copper hover:text-copper-lift" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Border */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="text-center font-mono text-[0.65rem] uppercase tracking-[0.18em] text-white/55">
            &copy; {new Date().getFullYear()} BCM Solutions LLC. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import bcmLogo from '../../../assets/BCMSolutionsHelix.png?url';

interface NavigationItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Who We Are",
    href: "/who-we-are"
  },
  {
    name: "Contact",
    href: "/contact"
  }
];

const HamburgerIcon = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 6h16M4 12h16M4 18h16" 
    />
  </svg>
);

const CloseIcon = (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M6 18L18 6M6 6l12 12" 
    />
  </svg>
);

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (href: string) => pathname === href;

  const renderNavigationLink = (item: NavigationItem) => {
    const active = isActive(item.href);

    return (
      <Link
        to={item.href}
        aria-current={active ? 'page' : undefined}
        className={`group relative block py-1 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
          active ? 'text-brand' : 'text-ink/80 hover:text-brand'
        }`}
      >
        {item.name}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-copper transition-transform duration-300 ${
            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}
        />
      </Link>
    );
  };

  const renderMobileNavigationLink = (item: NavigationItem) => {
    const active = isActive(item.href);

    return (
      <Link
        to={item.href}
        aria-current={active ? 'page' : undefined}
        className={`block border-l-2 px-4 py-3 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
          active
            ? 'border-copper bg-brand-tint text-brand'
            : 'border-transparent text-ink/80 hover:border-rule hover:bg-brand-tint/60 hover:text-brand'
        }`}
        onClick={closeMobileMenu}
      >
        {item.name}
      </Link>
    );
  };

  // Opaque rather than translucent: the wordmark asset carries its own white plate.
  return (
    <header className="sticky top-0 z-50 border-b border-rule/70 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center transition-opacity duration-200 hover:opacity-70"
          aria-label="BCM Solutions — home"
        >
          <img 
            src={bcmLogo} 
            alt="BCM Solutions" 
            className="h-16 w-auto md:h-20"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-10">
            {navigationItems.map((item) => (
              <li key={item.href}>
                {renderNavigationLink(item)}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-brand p-2 hover:bg-brand-tint rounded-md transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? CloseIcon : HamburgerIcon}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-paper border-t border-rule/70 shadow-lift z-50"
          role="navigation"
          aria-label="Mobile menu"
        >
          <nav className="py-2">
            <ul>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  {renderMobileNavigationLink(item)}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bcmLogo from '../../../assets/BCMSolutions.png?url';

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
    href: "#contact"
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

const linkStyles = {
  base: "text-slate-700 hover:text-teal-800 transition-colors",
  mobile: "block px-4 py-2 text-slate-700 hover:bg-gray-50 hover:text-teal-800 rounded-md transition-colors"
} as const;

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const renderNavigationLink = (item: NavigationItem) => {
    if (item.href.startsWith('#')) {
      // Hash links for same-page navigation
      return (
        <a 
          href={item.href} 
          className={linkStyles.base}
        >
          {item.name}
        </a>
      );
    } else {
      // React Router links for page navigation
      return (
        <Link 
          to={item.href} 
          className={linkStyles.base}
        >
          {item.name}
        </Link>
      );
    }
  };

  const renderMobileNavigationLink = (item: NavigationItem) => {
    if (item.href.startsWith('#')) {
      // Hash links for same-page navigation
      return (
        <a
          href={item.href}
          className={linkStyles.mobile}
          onClick={closeMobileMenu}
        >
          {item.name}
        </a>
      );
    } else {
      // React Router links for page navigation
      return (
        <Link
          to={item.href}
          className={linkStyles.mobile}
          onClick={closeMobileMenu}
        >
          {item.name}
        </Link>
      );
    }
  };

  return (
    <header className="bg-white shadow-sm relative border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center hover:opacity-80 transition-opacity duration-200 hover:scale-105 transform transition-transform"
        >
          <img 
            src={bcmLogo} 
            alt="BCM Solutions" 
            className="h-12 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                {renderNavigationLink(item)}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700 p-2 hover:bg-gray-100 rounded-md transition-colors"
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
          className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50"
          role="navigation"
          aria-label="Mobile menu"
        >
          <nav className="px-4 py-2">
            <ul className="space-y-1">
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
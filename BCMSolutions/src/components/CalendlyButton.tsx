import React, { useEffect } from 'react';

interface CalendlyButtonProps {
  url?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
}

const CalendlyButton: React.FC<CalendlyButtonProps> = ({
  url = 'https://calendly.com/jdesmond10/free-consultation',
  className = '',
  children = 'Schedule Now →',
  variant = 'primary'
}) => {
  // Load Calendly script and CSS
  useEffect(() => {
    // Check if Calendly is already loaded
    if ((window as any).Calendly) {
      return;
    }

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Function to open Calendly popup
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: url
      });
    }
  };

  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500'
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button onClick={openCalendly} className={buttonClasses}>
      {children}
    </button>
  );
};

export default CalendlyButton;

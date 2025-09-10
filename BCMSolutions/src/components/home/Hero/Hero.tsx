import React, { useState, useEffect } from 'react';

// Using the Unsplash image directly
// const bgImage = 'https://images.unsplash.com/photo-1568793096722-045e8593cee4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const bgImage = 'https://plus.unsplash.com/premium_photo-1661844549368-fae582e4e13f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-slate-800 overflow-hidden py-16 md:py-24">
      {/* Background image - Color comes from mix-blend-multiply */}
      <div 
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply transition-opacity duration-300"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: isLoaded ? 0.9 : 0,
          filter: isLoaded ? 'none' : 'blur(20px)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Gradient overlay - Fairly subtle effect*/}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-slate-800/60" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="md:max-w-2xl">
          <h1 className="text-white text-5xl font-semibold tracking-tight">
            <span className="block">BCM Solutions</span>
            <span className="block">Biopharma Consulting</span>
          </h1>
          <p className="mt-4 text-gray-100 text-xl font-light">
            Guiding biotech companies through all phases of Chemistry, Manufacturing, and Controls (CMC) from early-stage R&D to late-stage manufacturing.
          </p>
          <div className="mt-8 flex flex-row space-x-4 items-center justify-center md:justify-start">
            <a href="#content" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-lg transition-colors w-fit">
              Learn More
            </a>
            <a href="/contact" className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors w-fit">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
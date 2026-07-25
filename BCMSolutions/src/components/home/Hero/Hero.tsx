import React, { useState, useEffect } from 'react';

import bgImage from '../../../assets/iStock-637640684.jpg?url';

// The CMC arc the practice covers, stated as a process ladder.
const phases = ['Discovery', 'IND', 'Phase 3', 'BLA', 'Commercial'];

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <section className="relative surface-deep overflow-hidden py-20 md:py-28">
      {/* Background image - Color comes from mix-blend-multiply */}
      <div 
        className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply transition-opacity duration-700"
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
      <div className="absolute inset-0 bg-gradient-to-br from-brand/50 via-brand-deep/40 to-brand-deep/80" />

      {/* Settles the section into the page surface below */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-brand-deep/50" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="md:max-w-3xl">
          {/* Tightened on small screens so the label and its rules stay on one line */}
          <p className="eyebrow md:eyebrow-start animate-rise text-copper-lift text-[0.6rem] tracking-[0.16em] md:text-xs md:tracking-[0.28em]">
            Chemistry, Manufacturing &amp; Controls
          </p>

          <h1 className="mt-5 text-white text-display animate-rise animate-delay-1">
            <span className="block">BCM Solutions</span>
            <span className="block text-white/70">Biopharma Consulting</span>
          </h1>

          <div className="mt-6 h-px w-28 origin-left bg-copper animate-sweep animate-delay-2 mx-auto md:mx-0" />

          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-white/80 animate-rise animate-delay-3">
            Guiding biotech companies through all phases of Chemistry, Manufacturing, and Controls (CMC) for protein and other large-molecule biologics — from early-stage R&amp;D to late-stage manufacturing.
          </p>

          <div className="mt-9 flex flex-row space-x-3 items-center justify-center md:justify-start animate-rise animate-delay-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-copper hover:bg-copper-deep text-white font-mono text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-lg transition-colors w-fit"
            >
              Contact Us
            </a>
            <a
              href="#content"
              className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white hover:text-brand-deep font-mono text-xs uppercase tracking-[0.18em] px-7 py-4 rounded-lg transition-colors w-fit"
            >
              Learn More
            </a>
          </div>

          <ol className="mt-12 hidden md:flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/65 animate-rise animate-delay-5">
            {phases.map((phase, idx) => (
              <li key={phase} className="flex items-center gap-3">
                {idx > 0 && <span aria-hidden="true" className="h-px w-6 bg-white/25" />}
                {phase}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero; 

import React, { useState, useEffect } from 'react';
import { Award, GraduationCap, Target, Users, Lightbulb, Eye } from 'lucide-react';
import { LinkedInIcon } from '../assets/LinkedInIcon';
import stockImage from '../assets/iStock-1448369825.jpg?url';
import bryantImage from '../assets/bryant.jpg?url';
import tigranImage from '../assets/tigran.jpeg?url';

// Background image for hero section
const bgImage = stockImage;

const portraitStyles = 'w-full h-auto rounded-lg shadow-card';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description:
      'We deliver the highest quality solutions backed by rigorous science and proven methodologies.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description:
      "We work as trusted partners, deeply understanding our clients' unique challenges and goals.",
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace cutting-edge technologies and novel approaches to solve complex biologics challenges.',
  },
];

const WhoWeAre: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative surface-deep overflow-hidden py-24 md:py-32">
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

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="eyebrow text-copper-lift mb-6 animate-rise">The Team</p>
            <h1 className="text-display text-white animate-rise animate-delay-1">Who We Are</h1>
            <div className="mx-auto mt-6 h-px w-28 bg-copper animate-sweep animate-delay-2" />
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/80 max-w-3xl mx-auto animate-rise animate-delay-3">
              A team of industry leaders dedicated to advancing biologics development through strategic expertise and innovative solutions
            </p>
          </div>
        </div>
      </section>

   
      {/* Team Section */}
      <section className="surface-tint py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Bryant McLaughlin */}
          <div className="bg-paper rounded-xl border border-rule/70 shadow-card p-8 md:p-10 mb-10">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 h-full">
              <div className="md:col-span-1">
                <img 
                  src={bryantImage} 
                  alt="Dr. Bryant McLaughlin" 
                  className={portraitStyles}
                />
              </div>
              <div className="md:col-span-2 flex flex-col h-full">
                <p className="eyebrow text-copper-deep eyebrow-start mb-4">President &amp; Founder</p>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h3 className="text-3xl md:text-4xl">Dr. Bryant McLaughlin</h3>
                  <a href="https://www.linkedin.com/in/bryantmclaughlin/" target="_blank" rel="noopener noreferrer" 
                     className="text-brand/60 hover:text-copper transition-colors flex-shrink-0"
                     aria-label="Dr. Bryant McLaughlin on LinkedIn">
                    <LinkedInIcon className="h-6 w-6" />
                  </a>
                </div>
                
                <p className="text-ink/80 mb-8 leading-relaxed flex-grow">
                  As President of BCM Solutions LLC, Dr. McLaughlin leverages over 20 years of experience to guide 
                  biotech companies through all phases of Chemistry, Manufacturing, and Controls (CMC). His expertise 
                  spans from early-stage R&D to late-stage manufacturing, with a proven track record of optimizing 
                  biologics development and securing CMC regulatory success. Currently leading efforts with nearly a 
                  dozen clients in investment due diligence, CMC strategy, and AI-powered IND writing.
                </p> 

                <div className="mt-auto border-t border-rule pt-6">
                  <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/75 mb-4">Education</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-brand-tint border border-brand/10 px-4 py-2 rounded-full text-sm text-brand">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-copper" />
                      Ph.D. Biochemistry, UCSF
                    </div>
                    <div className="bg-brand-tint border border-brand/10 px-4 py-2 rounded-full text-sm text-brand">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-copper" />
                      B.S. Chemical Engineering, MIT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tigran Lachinyan */}
          <div className="bg-paper rounded-xl border border-rule/70 shadow-card p-8 md:p-10">
            <div className="grid md:grid-cols-3 gap-8 md:gap-10 h-full">
              <div className="md:col-span-1">
                <img 
                  src={tigranImage} 
                  alt="Tigran Lachinyan" 
                  className={`${portraitStyles} grayscale`}
                />
              </div>
              <div className="md:col-span-2 flex flex-col h-full">
                <p className="eyebrow text-copper-deep eyebrow-start mb-4">Strategic Business Development Lead</p>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h3 className="text-3xl md:text-4xl">Tigran Lachinyan</h3>
                  <a href="https://www.linkedin.com/in/tigran-lachinyan-9a905623/" target="_blank" rel="noopener noreferrer" 
                     className="text-brand/60 hover:text-copper transition-colors flex-shrink-0"
                     aria-label="Tigran Lachinyan on LinkedIn">
                    <LinkedInIcon className="h-6 w-6" />
                  </a>
                </div>
                
                <p className="text-ink/80 mb-8 leading-relaxed flex-grow">
                  Tigran brings 20 years of experience and a proven track record in strategic partnerships, contract negotiation, and cross-functional 
                  team leadership to accelerate biotech development and drive revenue growth. With deep technical expertise 
                  in biotechnology and pharmaceutical processes combined with comprehensive understanding of market dynamics, 
                  he specializes in tech-bio innovation and AI-powered life sciences solutions.
                </p>

                <div className="mt-auto border-t border-rule pt-6">
                  <h4 className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink/75 mb-4">Education</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-brand-tint border border-brand/10 px-4 py-2 rounded-full text-sm text-brand">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-copper" />
                      B.S. Microbiology, UC Davis
                    </div>
                    <div className="bg-brand-tint border border-brand/10 px-4 py-2 rounded-full text-sm text-brand">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-copper" />
                      Marketing &amp; Digital Strategy, Harvard Extension
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="surface-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="eyebrow text-copper-deep mb-5">What We Stand For</p>
            <h2 className="text-title mb-5">Our Core Values</h2>
            <p className="text-xl text-ink/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-rule/60 border border-rule/60 rounded-xl overflow-hidden">
            {values.map((value) => (
              <div key={value.title} className="group bg-paper p-8 text-center transition-colors duration-300 hover:bg-white">
                <div className="bg-brand-tint border border-brand/15 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5 transition-colors duration-300 group-hover:border-transparent group-hover:bg-brand">
                  <value.icon className="w-7 h-7 text-brand transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-xl mb-3">{value.title}</h3>
                <p className="text-ink/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto px-4 pt-14 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-brand-tint border-l-2 border-copper p-8 md:p-10 rounded-r-xl">
              <div className="flex items-center mb-5">
                <Target className="w-6 h-6 text-copper mr-3 flex-shrink-0" />
                <h2 className="text-2xl">Our Mission</h2>
              </div>
              <p className="text-ink/80 leading-relaxed">
                To accelerate the development and commercialization of life-changing biologics by providing 
                world-class CMC expertise, strategic guidance, and innovative solutions that transform 
                complex challenges into successful outcomes for our clients.
              </p>
            </div>
            <div className="bg-brand-tint border-l-2 border-copper p-8 md:p-10 rounded-r-xl">
              <div className="flex items-center mb-5">
                <Eye className="w-6 h-6 text-copper mr-3 flex-shrink-0" />
                <h2 className="text-2xl">Our Vision</h2>
              </div>
              <p className="text-ink/80 leading-relaxed">
                To be the trusted partner of choice for biotech companies navigating the complex journey 
                from discovery to commercialization, enabling breakthrough therapies that improve patient 
                lives worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default WhoWeAre;

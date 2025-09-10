import React, { useState, useEffect } from 'react';
import { Award, GraduationCap, Target, Users, Lightbulb, Eye } from 'lucide-react';
import { LinkedInIcon } from '../assets/LinkedInIcon';
import stockImage from '../assets/stock.png?url';

// Background image for hero section
const bgImage = stockImage;

const WhoWeAre: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-slate-800 overflow-hidden py-32">
        {/* Background image - Color comes from mix-blend-multiply */}
        <div 
          className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply transition-opacity duration-300"
          style={{
            backgroundImage: `url(${bgImage})`,
            opacity: isLoaded ? 0.9 : 0,
            filter: isLoaded ? 'none' : 'blur(20px)',
            backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Gradient overlay - Fairly subtle effect*/}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 to-slate-800/60" />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white mb-4">Who We Are</h1>
            <p className="text-xl font-light text-gray-100 max-w-3xl mx-auto">
              A team of industry leaders dedicated to advancing biologics development through strategic expertise and innovative solutions
            </p>
          </div>
        </div>
      </section>

   
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Bryant McLaughlin */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8 h-full">
              <div className="md:col-span-1">
                <img 
                  src="/src/assets/bryant.jpg" 
                  alt="Dr. Bryant McLaughlin" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="md:col-span-2 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-bold text-[#0F4C5C]">Dr. Bryant McLaughlin</h3>
                  <a href="https://www.linkedin.com/in/bryantmclaughlin/" target="_blank" rel="noopener noreferrer" 
                     className="text-[#0F4C5C] hover:text-[#1A5E70] transition-colors">
                    <LinkedInIcon className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-lg text-[#36454F] font-semibold mb-4">President & Founder</p>
                
                <p className="text-[#36454F] mb-6 leading-relaxed flex-grow">
                  As President of BCM Solutions LLC, Dr. McLaughlin leverages over 14 years of experience to guide 
                  biotech companies through all phases of Chemistry, Manufacturing, and Controls (CMC). His expertise 
                  spans from early-stage R&D to late-stage manufacturing, with a proven track record of optimizing 
                  biologics development and securing CMC regulatory success. Currently leading efforts with nearly a 
                  dozen clients, including Myris Therapeutics, in investment due diligence, CMC strategy, and AI-powered IND writing.
                </p> 

                <div className="mt-auto">
                  <h4 className="text-xl font-semibold text-[#0F4C5C] mb-3">Education</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#F0F7F8] px-4 py-2 rounded-full">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-[#0F4C5C]" />
                      Ph.D. Biochemistry, UCSF
                    </div>
                    <div className="bg-[#F0F7F8] px-4 py-2 rounded-full">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-[#0F4C5C]" />
                      B.S. Chemical Engineering, MIT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tigran Lachinyan */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 h-full">
              <div className="md:col-span-1">
                <img 
                  src="/src/assets/tigran.jpeg" 
                  alt="Tigran Lachinyan" 
                  className="w-full h-auto rounded-lg shadow-md grayscale"
                />
              </div>
              <div className="md:col-span-2 flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-3xl font-bold text-[#0F4C5C]">Tigran Lachinyan</h3>
                  <a href="#" target="_blank" rel="noopener noreferrer" 
                     className="text-[#0F4C5C] hover:text-[#1A5E70] transition-colors">
                    <LinkedInIcon className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-lg text-[#36454F] font-semibold mb-4">Strategic Business Development Lead</p>
                
                <p className="text-[#36454F] mb-6 leading-relaxed flex-grow">
                  Tigran brings a proven track record in strategic partnerships, contract negotiation, and cross-functional 
                  team leadership to accelerate biotech development and drive revenue growth. With deep technical expertise 
                  in biotechnology and pharmaceutical processes combined with comprehensive understanding of market dynamics, 
                  he specializes in tech-bio innovation and AI-powered life sciences solutions.
                </p>

                <div className="mt-auto">
                  <h4 className="text-xl font-semibold text-[#0F4C5C] mb-3">Education</h4>
                  <div className="flex flex-wrap gap-3">
                    <div className="bg-[#F0F7F8] px-4 py-2 rounded-full">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-[#0F4C5C]" />
                      B.S. Microbiology, UC Davis
                    </div>
                    <div className="bg-[#F0F7F8] px-4 py-2 rounded-full">
                      <GraduationCap className="inline w-4 h-4 mr-2 text-[#0F4C5C]" />
                      Marketing & Digital Strategy, Harvard Extension
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0F4C5C] mb-4">Our Core Values</h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-[#F0F7F8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#0F4C5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F4C5C] mb-3">Excellence</h3>
              <p className="text-[#36454F]">
                We deliver the highest quality solutions backed by rigorous science and proven methodologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#F0F7F8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#0F4C5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F4C5C] mb-3">Partnership</h3>
              <p className="text-[#36454F]">
                We work as trusted partners, deeply understanding our clients' unique challenges and goals.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#F0F7F8] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#0F4C5C]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F4C5C] mb-3">Innovation</h3>
              <p className="text-[#36454F]">
                We embrace cutting-edge technologies and novel approaches to solve complex biologics challenges.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto px-4 pt-6 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#F0F7F8] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[#0F4C5C] mr-3" />
                <h2 className="text-2xl font-bold text-[#0F4C5C]">Our Mission</h2>
              </div>
              <p className="text-[#36454F] leading-relaxed">
                To accelerate the development and commercialization of life-changing biologics by providing 
                world-class CMC expertise, strategic guidance, and innovative solutions that transform 
                complex challenges into successful outcomes for our clients.
              </p>
            </div>
            <div className="bg-[#F0F7F8] p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-[#0F4C5C] mr-3" />
                <h2 className="text-2xl font-bold text-[#0F4C5C]">Our Vision</h2>
              </div>
              <p className="text-[#36454F] leading-relaxed">
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

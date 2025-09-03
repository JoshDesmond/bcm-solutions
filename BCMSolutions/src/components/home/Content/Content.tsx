import React from 'react';
import { Beaker, Microscope, FileText, Users, TrendingUp, Shield, Globe } from 'lucide-react';

export const Content: React.FC = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F4C5C] mb-4">
              Expert Biotech Consulting
            </h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto leading-relaxed">
              Leading efforts with nearly a dozen clients, including Myris Therapeutics, in investment due diligence, 
              CMC strategy, and planning for monoclonal antibodies, exosomes & protein therapies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#0F4C5C] mb-6">
                Dr. Bryant McLaughlin
              </h3>
              <p className="text-[#36454F] mb-4 leading-relaxed">
                As President of BCM Solutions LLC, I leverage over 14 years of experience to guide biotech companies 
                through all phases of Chemistry, Manufacturing, and Controls (CMC). My expertise spans from early-stage 
                R&D to late-stage manufacturing, encompassing cell line development, cell culture, purification, and 
                global CMC regulatory strategy.
              </p>
              <p className="text-[#36454F] mb-6 leading-relaxed">
                I have a proven track record of optimizing biologics development, streamlining supply chains, and securing 
                CMC regulatory success. I am passionate about leveraging my skills to develop novel biologics to impact 
                patients' lives.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-[#36454F]">
                <div className="bg-[#F0F7F8] px-3 py-1 rounded-full">
                  Ph.D. Biochemistry, UCSF
                </div>
                <div className="bg-[#F0F7F8] px-3 py-1 rounded-full">
                  B.S. Chemical Engineering, MIT
                </div>
              </div>
            </div>
            <div className="bg-[#F0F7F8] p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Microscope className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#0F4C5C] mb-2">14+ Years</h4>
                  <p className="text-sm text-[#36454F]">Industry Experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#0F4C5C] mb-2">12+ Clients</h4>
                  <p className="text-sm text-[#36454F]">Successful Partnerships</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#0F4C5C] mb-2">100%</h4>
                  <p className="text-sm text-[#36454F]">Regulatory Success</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-[#0F4C5C] mb-2">Global</h4>
                  <p className="text-sm text-[#36454F]">CMC Strategy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#F0F7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F4C5C] mb-4">
              Comprehensive CMC Services
            </h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto">
              From early-stage development to commercial manufacturing, we provide strategic guidance 
              across the entire biologics development lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#0F4C5C] text-white p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <Beaker className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                Process Development
              </h3>
              <p className="text-[#36454F] leading-relaxed">
                Cell line development, cell culture optimization, purification strategies, and scale-up 
                processes for biologics manufacturing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#0F4C5C] text-white p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                CMC Regulatory Strategy
              </h3>
              <p className="text-[#36454F] leading-relaxed">
                Regulatory strategy development, IND writing, CMC documentation, and global regulatory 
                compliance guidance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#0F4C5C] text-white p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                CDMO Management
              </h3>
              <p className="text-[#36454F] leading-relaxed">
                Contract negotiation, vendor selection, technical oversight, and quality assurance 
                for contract manufacturing partnerships.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#0F4C5C] text-white p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                Tech Transfer
              </h3>
              <p className="text-[#36454F] leading-relaxed">
                Microbial and mammalian CMC technology transfer, process validation, and manufacturing 
                site qualification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#0F4C5C] text-white p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                Characterization & Validation
              </h3>
              <p className="text-[#36454F] leading-relaxed">
                Analytical method development, product characterization, validation protocols, and 
                quality control strategy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#0F4C5C] text-white p-3 rounded-lg w-12 h-12 mb-4 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">
                Risk Assessment
              </h3>
              <p className="text-[#36454F] leading-relaxed">
                Technical risk evaluation, mitigation strategies, and contingency planning for 
                biologics development programs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content; 
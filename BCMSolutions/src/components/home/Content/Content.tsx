import React from 'react';
import { Beaker, Microscope, FileText, Users, TrendingUp, Shield, Globe, ArrowRight, CheckCircle, Brain, Lightbulb } from 'lucide-react';

export const Content: React.FC = () => {
  return (
    <>
      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F4C5C] mb-6">
              Accelerate Your Biologics Journey
            </h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto leading-relaxed">
              BCM Solutions delivers expert CMC consulting to guide biotech companies from discovery through commercialization. 
              We transform complex challenges into strategic opportunities, ensuring regulatory success and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">14+ Years Experience</h3>
              <p className="text-[#36454F]">Deep expertise across all phases of biologics development and manufacturing</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Strategic Innovation</h3>
              <p className="text-[#36454F]">Cutting-edge approaches including AI-powered IND writing and process optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-[#0F4C5C] text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F4C5C] mb-3">Proven Results</h3>
              <p className="text-[#36454F]">Successfully guided dozens of clients through regulatory approvals and tech transfers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-gradient-to-br from-[#F0F7F8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0F4C5C] mb-6">
                Why Choose BCM Solutions?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#0F4C5C] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0F4C5C] mb-1">End-to-End CMC Expertise</h4>
                    <p className="text-[#36454F]">From cell line development to commercial manufacturing, we cover every aspect of your CMC journey</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#0F4C5C] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0F4C5C] mb-1">Regulatory Excellence</h4>
                    <p className="text-[#36454F]">Navigate complex global regulatory landscapes with confidence and strategic foresight</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#0F4C5C] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0F4C5C] mb-1">CDMO Partnership Optimization</h4>
                    <p className="text-[#36454F]">Expert contract negotiation and vendor management to maximize value and minimize risk</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#0F4C5C] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0F4C5C] mb-1">Investment Due Diligence</h4>
                    <p className="text-[#36454F]">Comprehensive technical assessments to inform critical business decisions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold text-[#0F4C5C] mb-4">Current Client Engagements</h3>
              <p className="text-[#36454F] mb-6">
                Leading strategic initiatives with nearly a dozen innovative biotech companies, including:
              </p>
              <ul className="space-y-3 text-[#36454F]">
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#0F4C5C] mr-2" />
                  Monoclonal antibody development programs
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#0F4C5C] mr-2" />
                  Exosome therapy platforms
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#0F4C5C] mr-2" />
                  Novel protein therapeutics
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#0F4C5C] mr-2" />
                  AI-powered IND development
                </li>
                <li className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-[#0F4C5C] mr-2" />
                  Market expansion strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Keeping existing */}
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
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

      {/* Client Success Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F4C5C] mb-4">
              Delivering Impact
            </h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto">
              Our expertise translates into tangible results for our clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#0F4C5C] mb-2">12+</div>
              <p className="text-[#36454F]">Active Client Engagements</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0F4C5C] mb-2">14+</div>
              <p className="text-[#36454F]">Years of Industry Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0F4C5C] mb-2">100%</div>
              <p className="text-[#36454F]">Regulatory Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0F4C5C] mb-2">3</div>
              <p className="text-[#36454F]">Therapeutic Modalities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F4C5C] to-[#1A5E70]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your Biologics Program?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss how BCM Solutions can help you achieve your CMC goals and bring life-changing therapeutics to patients.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-white text-[#0F4C5C] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Content;
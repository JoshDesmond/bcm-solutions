
import React from 'react';
import { 
  Microscope, Building2, TrendingUp, ShieldCheck, FileText, Handshake, Lightbulb, Dna, TestTube, Clock, Scale, 
  DollarSign, Shield, Rocket, LineChart, Briefcase, ArrowRight, Target,
} from 'lucide-react';
import { FlaskIcon } from '../../../assets/FlaskIcon';
import { MicrobiologyIcon } from '../../../assets/MicrobiologyIcon';

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50" id="content">
      {/* Value Proposition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-2">Proven Expertise</p>
            <h2 className="text-4xl font-bold text-[#0F4C5C] mb-4">Accelerate Your Biologics Development Journey</h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto leading-relaxed">
              With over 14 years of industry experience and a proven track record from early R&D through 
              commercial manufacturing, BCM Solutions delivers the strategic CMC expertise your biotech needs to succeed.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Microscope, number: "14+", label: "Years CMC Experience" },
              { icon: Building2, number: "12+", label: "Biotech Clients Served" },
              { icon: TrendingUp, number: "$10M+", label: "Annual Budgets Managed" },
              { icon: ShieldCheck, number: "100%", label: "IND Success Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:bg-gray-50 transition-colors duration-300">
                <div className="bg-gradient-to-br from-[#0F4C5C] to-[#1A5E70] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#0F4C5C] mb-1">{stat.number}</div>
                <div className="text-sm text-[#36454F]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-2">Comprehensive Solutions</p>
            <h2 className="text-4xl font-bold text-[#0F4C5C] mb-4">End-to-End CMC Services</h2>
            <p className="text-xl text-[#36454F] max-w-3xl mx-auto">
              From early-stage development to commercial manufacturing, we provide the technical leadership 
              and strategic direction needed at every phase of your biologics journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "CMC Strategy & Planning",
                description: "Develop comprehensive CMC roadmaps aligned with your clinical timelines and regulatory milestones. Expert guidance on cell line development, process optimization, and scale-up strategies."
              },
              {
                icon: FileText,
                title: "Regulatory Excellence",
                description: "Navigate complex regulatory landscapes with confidence. IND/BLA writing, FDA meeting preparation, and global regulatory strategy for biologics and novel therapeutic modalities."
              },
              {
                icon: Handshake,
                title: "CDMO Management",
                description: "Expert contract negotiation and CDMO oversight. Tech transfer leadership for both microbial and mammalian systems, ensuring seamless transitions and timeline adherence."
              },
              {
                icon: FlaskIcon,
                title: "Process Development",
                description: "Optimize your biologics manufacturing from cell culture through purification. Analytical method development, characterization, and validation for monoclonal antibodies and novel proteins."
              },
              {
                icon: TrendingUp,
                title: "Business Development",
                description: "Strategic partnerships, market analysis, and go-to-market strategies. Leverage our extensive network and deep understanding of the biotech ecosystem to accelerate growth."
              },
              {
                icon: Lightbulb,
                title: "Due Diligence",
                description: "Investment and acquisition due diligence with deep technical assessment. Evaluate CMC risks, opportunities, and development timelines for informed decision-making."
              }
            ].map((service, idx) => (
              <div key={idx} className="group bg-gray-50 rounded-xl p-8 shadow-md hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-[#F0F7F8] rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-[#0F4C5C] transition-colors">
                  <service.icon className="w-7 h-7 text-[#0F4C5C] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F4C5C] mb-3">{service.title}</h3>
                <p className="text-[#36454F] leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-2">Therapeutic Expertise</p>
            <h2 className="text-4xl font-bold text-[#0F4C5C]">Specialized in Complex Biologics</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Dna, title: "Monoclonal Antibodies", desc: "Including bispecific T-cell engagers and novel formats" },
              { icon: TestTube, title: "Cell & Gene Therapies", desc: "Exosomes and advanced therapeutic modalities" },
              { icon: FlaskIcon, title: "Protein Therapeutics", desc: "Fusion proteins, peptides, and engineered biologics" },
              { icon: MicrobiologyIcon, title: "Microbial & Mammalian", desc: "Platform processes for both expression systems" }
            ].map((area, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-md hover:bg-gray-50 transition-colors duration-300">
                  <div className="bg-gradient-to-br from-[#0F4C5C] to-[#1A5E70] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F4C5C] mb-2">{area.title}</h3>
                  <p className="text-sm text-[#36454F]">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-2">Proven Results</p>
            <h2 className="text-4xl font-bold text-[#0F4C5C]">Success Stories That Matter</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "12-Month IND Timeline",
                description: "Accelerated monoclonal antibody development from cell line to IND filing using innovative transposon-based strategies"
              },
              {
                icon: Scale,
                title: "10X Scale-Up Success",
                description: "Successfully scaled biologics manufacturing from 100L to 1,000L while maintaining product quality and reducing COGS"
              },
              {
                icon: DollarSign,
                title: "$15M+ Revenue Impact",
                description: "Strategic marketing initiatives driving adoption of novel modalities and process intensification technologies"
              },
              {
                icon: Shield,
                title: "FDA Success",
                description: "Successfully addressed FDA concerns on process and analytical methods, preparing multiple programs for Phase 3 studies"
              }
            ].map((achievement, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-gray-50 rounded-xl p-6 shadow-md hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-gradient-to-br from-[#0F4C5C] to-[#1A5E70] rounded-lg p-3 flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F4C5C] mb-2">{achievement.title}</h3>
                  <p className="text-[#36454F] leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Focus Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-2">Who We Serve</p>
            <h2 className="text-4xl font-bold text-[#0F4C5C]">Tailored Solutions for Every Stage</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Early-Stage Biotechs",
                description: "Navigate the path from discovery to IND with expert guidance on CMC strategy, risk mitigation, and resource optimization"
              },
              {
                icon: LineChart,
                title: "Mid-Stage Companies",
                description: "Scale your processes, prepare for pivotal trials, and build robust manufacturing strategies for commercial readiness"
              },
              {
                icon: Briefcase,
                title: "Investors & VCs",
                description: "Technical due diligence, portfolio company support, and strategic CMC assessments for informed investment decisions"
              }
            ].map((client, idx) => (
              <div key={idx} className="relative bg-white rounded-xl shadow-md p-8 hover:bg-gray-50 transition-colors duration-300 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0F4C5C]/5 to-transparent rounded-bl-full"></div>
                <client.icon className="w-12 h-12 text-[#0F4C5C] mb-4" />
                <h3 className="text-xl font-bold text-[#0F4C5C] mb-3">{client.title}</h3>
                <p className="text-[#36454F] leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0F4C5C] via-[#1A5E70] to-[#0F4C5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your CMC Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Let's discuss how BCM Solutions can help you navigate the complexities of biologics development 
              and manufacturing. Our team brings the expertise, network, and strategic insight needed to turn 
              your therapeutic vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* TODO update these to links to /who-we-are and /contact */}
              <a href="/contact" className="bg-white text-[#0F4C5C] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/who-we-are" className="bg-transparent text-white font-semibold px-8 py-4 rounded-lg border-2 border-white hover:bg-white/10 transition-all">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content


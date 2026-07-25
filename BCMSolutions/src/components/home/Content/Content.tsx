
import React from 'react';
import { 
  Microscope, Building2, TrendingUp, ShieldCheck, FileText, Handshake, Lightbulb, Dna, TestTube, Clock, Scale, 
  DollarSign, Shield, Rocket, LineChart, Briefcase, ArrowRight, Target,
} from 'lucide-react';
import { FlaskIcon } from '../../../assets/FlaskIcon';
import { MicrobiologyIcon } from '../../../assets/MicrobiologyIcon';

const index = (idx: number) => String(idx + 1).padStart(2, '0');

const Content: React.FC = () => {
  return (
    <div className="min-h-screen" id="content">
      {/* Value Proposition Section */}
      <section className="surface-tint py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-copper-deep mb-5">Proven Expertise</p>
            <h2 className="text-title mb-5">Accelerate Your Biologics Development Journey</h2>
            <p className="text-xl text-ink/80 max-w-3xl mx-auto leading-relaxed">
              With over 20 years of industry experience and a proven track record from early R&D through 
              commercial manufacturing, BCM Solutions delivers the strategic CMC expertise your biotech needs to succeed.
            </p>
          </div>
          
          {/* Key Metrics — instrument-panel readouts rather than cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rule/60 border border-rule/60 rounded-xl overflow-hidden max-w-5xl mx-auto">
            {[
              { icon: Microscope, number: "20+", label: "Years CMC Experience" },
              { icon: Building2, number: "12+", label: "Biotech Clients Served" },
              { icon: TrendingUp, number: "$10M+", label: "Annual Budgets Managed" },
              { icon: ShieldCheck, number: "100%", label: "IND Success Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="group relative bg-paper p-6 md:p-8 transition-colors duration-300 hover:bg-white">
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 group-hover:scale-x-100" />
                <stat.icon className="w-5 h-5 text-brand/50 mb-6 transition-colors duration-300 group-hover:text-copper" />
                <div className="readout text-3xl md:text-4xl font-semibold text-brand mb-2">{stat.number}</div>
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/75 leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="surface-paper py-20 md:py-24">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-copper-deep mb-5">Comprehensive Solutions</p>
            <h2 className="text-title mb-5">End-to-End CMC Services</h2>
            <p className="text-xl text-ink/80 max-w-3xl mx-auto leading-relaxed">
              From early-stage development to commercial manufacturing, we provide the technical leadership 
              and strategic direction needed at every phase of your biologics journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {[
              {
                icon: FlaskIcon,
                title: "Process Development",
                description: "Optimize your biologics manufacturing from cell culture through purification across multiple expression systems including E. coli, P. pastoris, and CHO cells. We provide comprehensive analytical method development, characterization, and validation services for novel proteins, monoclonal antibodies, and other biotherapeutics."
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
              },
              {
                icon: Target,
                title: "CMC Strategy & Planning",
                description: "Develop comprehensive CMC roadmaps aligned with your clinical timelines and regulatory milestones. Expert guidance on cell line development, process optimization, and scale-up strategies."
              },
              {
                icon: FileText,
                title: "Regulatory Excellence",
                description: "Navigate complex regulatory landscapes with confidence. IND/BLA, FDA meeting preparation, and global regulatory strategy for biologics and novel therapeutic modalities."
              },
              {
                icon: Handshake,
                title: "CDMO Management",
                description: "Expert contract negotiation and CDMO oversight. Tech transfer leadership for both microbial and mammalian systems, ensuring seamless transitions and timeline adherence."
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative border-l border-rule pl-6 md:pl-7 transition-colors duration-300 hover:border-copper"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="readout text-xs text-copper-deep">{index(idx)}</span>
                  <service.icon className="w-5 h-5 text-brand/45 transition-colors duration-300 group-hover:text-brand" />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-ink/80 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="surface-tint py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-copper-deep mb-5">Therapeutic Expertise</p>
            <h2 className="text-title">Specialized in Complex Biologics</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FlaskIcon, title: "Protein Therapeutics", desc: "Fusion proteins, peptides, and engineered biologics" },
              { icon: MicrobiologyIcon, title: "E. coli Expression", desc: "Experts in E. coli genetics, strain optimization, fermentation scale-up & GMP manufacturing" },
              // TODO, find better icon for Mammalian Expression to contrast with the prokaryotic icon
              { icon: TestTube, title: "Eukaryotic Expression", desc: "Expertise in P. pastoris and CHO cell line development, including optimization and scale-up through all phases of GMP manufacturing." },
              { icon: Dna, title: "Monoclonal Antibodies", desc: "Including bispecific T-cell engagers and novel formats" },
            ].map((area, idx) => (
              <div
                key={idx}
                className="group flex h-full flex-col items-center rounded-xl border border-rule/70 bg-paper p-8 text-center transition-all duration-300 hover:border-brand/30 hover:shadow-card"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-brand/15 bg-brand-tint transition-colors duration-300 group-hover:border-transparent group-hover:bg-brand">
                  <area.icon className="h-8 w-8 text-brand transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="text-lg mb-3">{area.title}</h3>
                <p className="text-sm text-ink/75 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="surface-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-copper-deep mb-5">Proven Results</p>
            <h2 className="text-title">Success Stories That Matter</h2>
          </div>
          
          {/* Achievements read as a ledger: ruled rows, not floating cards */}
          <div className="max-w-4xl mx-auto border-t border-rule">
            {[
              {
                icon: Clock,
                title: "12-Month IND Timelines",
                description: "Support of accelerated biologics development from amino acid sequence to IND filing"
              },
              {
                icon: Scale,
                title: "Multiple 1000X Scale-Up Successes",
                description: "Successfully scaled biologics manufacturing from 2L to 2,000L+ while maintaining product quality and reducing COGS"
              },
              {
                icon: DollarSign,
                title: "$15M+ Revenue Impact",
                description: "Strategic marketing initiatives driving adoption of novel modalities and process intensification technologies"
              },
              {
                icon: Shield,
                title: "FDA Success",
                description: "Significant experience in successful FDA interactions on CMC matters. Successfully addressed FDA concerns on process and analytical methods, preparing multiple programs for Phase 3 studies"
              }
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-[auto_1fr] items-start gap-5 md:gap-8 border-b border-rule py-7 transition-colors duration-300 hover:bg-brand-tint/50"
              >
                <div className="flex items-center gap-4 pt-1">
                  <span className="readout text-xs text-copper-deep hidden sm:inline">{index(idx)}</span>
                  <achievement.icon className="h-6 w-6 flex-shrink-0 text-brand/50 transition-colors duration-300 group-hover:text-brand" />
                </div>
                <div>
                  <h3 className="text-xl mb-2">{achievement.title}</h3>
                  <p className="text-ink/80 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Focus Section */}
      <section className="surface-tint py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="eyebrow text-copper-deep mb-5">Who We Serve</p>
            <h2 className="text-title">Tailored Solutions for Every Stage</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
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
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-rule/70 bg-paper p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lift"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand/10 to-transparent transition-transform duration-500 group-hover:scale-125" />
                <span className="readout relative text-xs text-copper-deep">{index(idx)}</span>
                <client.icon className="relative mt-5 mb-5 h-9 w-9 text-brand" />
                <h3 className="relative text-xl mb-3">{client.title}</h3>
                <p className="relative text-ink/80 leading-relaxed">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="surface-deep py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow text-copper-lift mb-6">Next Step</p>
          <h2 className="text-title text-white mb-6">
            Ready to Accelerate Your CMC Journey?
          </h2>
          <div className="mx-auto mb-8 h-px w-24 bg-copper" />
          <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed">
            Let's discuss how BCM Solutions can help you navigate the complexities of biologics development 
            and manufacturing. Our team brings the expertise, network, and strategic insight needed to turn 
            your therapeutic vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-copper px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-copper-deep"
            >
              Schedule a Consultation
              <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/who-we-are"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 font-mono text-xs uppercase tracking-[0.18em] text-white transition-colors hover:bg-white hover:text-brand-deep"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content


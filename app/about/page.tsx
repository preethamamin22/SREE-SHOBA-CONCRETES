import type { Metadata } from "next";
import { CheckCircle2, Target, Eye, Building2, Users2, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Sree Shoba Concretes — Bengaluru's trusted RMC manufacturer. Our history, mission, vision, management team and infrastructure.",
};

const milestones = [
  { year: "2009", event: "Company founded in Bengaluru", desc: "Started with a small batching plant and 3 transit mixers" },
  { year: "2012", event: "IS 4926:2003 Certification", desc: "Achieved BIS certification for Ready Mix Concrete" },
  { year: "2015", event: "Plant capacity doubled", desc: "Expanded to 250+ m³/day with PLC automation" },
  { year: "2018", event: "Fleet expansion to 15 mixers", desc: "Scaled fleet for city-wide delivery coverage" },
  { year: "2021", event: "500+ m³/day milestone", desc: "Installed twin-shaft mixer and expanded silos" },
  { year: "2024", event: "2000+ projects delivered", desc: "Reached landmark of 2000 successful deliveries" },
];

const team = [
  { name: "Sree Shoba", role: "Managing Director", experience: "20+ years in construction industry", initials: "SS", color: "#1B3A6B" },
  { name: "Technical Director", role: "Plant Operations Head", experience: "15+ years in RMC operations", initials: "TD", color: "#E87B2C" },
  { name: "QC Manager", role: "Quality Control Head", experience: "12+ years in concrete technology", initials: "QM", color: "#1B3A6B" },
  { name: "Fleet Manager", role: "Logistics & Delivery Head", experience: "10+ years in logistics", initials: "FM", color: "#E87B2C" },
];

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
            About Us
          </div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Building Bengaluru,<br />
            <span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              One Pour at a Time
            </span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            Since 2009, Sree Shoba Concretes has been delivering premium quality Ready Mix Concrete to thousands of construction projects across Bengaluru and Karnataka.
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-badge">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
                Company Overview
              </div>
              <h2 className="section-title">Who We Are</h2>
              <div className="accent-divider" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Sree Shoba Concretes is a premier Ready Mix Concrete (RMC) manufacturing and supply company headquartered at Gollahalli Village, Anjanapura, Bengaluru. We operate a state-of-the-art batching plant equipped with PLC automation, twin-shaft mixers, and automated aggregate batching systems.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our dedicated QC laboratory, experienced technical team, and GPS-tracked fleet of 25+ transit mixers ensure that every cubic metre of concrete we deliver meets the highest quality standards and arrives on schedule.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are proudly IS 4926:2003 certified and serve residential builders, commercial developers, and infrastructure project agencies across Karnataka.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Founded", value: "2009" },
                { label: "Certification", value: "IS 4926" },
                { label: "Capacity", value: "500+ m³/day" },
                { label: "Fleet", value: "25+ Mixers" },
                { label: "Projects", value: "2000+" },
                { label: "Experience", value: "15+ Years" },
              ].map((item) => (
                <div key={item.label} className="bg-[#F5F6F8] rounded-xl p-5 border border-gray-100 hover:border-[#E87B2C]/25 transition-colors">
                  <div className="text-2xl font-extrabold text-[#1B3A6B] mb-1" style={{ fontFamily: "Syne, serif", fontWeight: 800 }}>{item.value}</div>
                  <div className="text-sm text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_8px_32px_rgba(27,58,107,0.1)] transition-all">
              <div className="w-12 h-12 bg-[#1B3A6B]/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#1B3A6B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F1923] mb-4" style={{ fontFamily: "Syne, serif" }}>Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver premium quality Ready Mix Concrete that strengthens Bengaluru&apos;s infrastructure — on time, at the right grade, with full quality documentation — enabling our clients to build faster, better, and with complete confidence.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-[0_8px_32px_rgba(232,123,44,0.1)] transition-all">
              <div className="w-12 h-12 bg-[#E87B2C]/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-[#E87B2C]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F1923] mb-4" style={{ fontFamily: "Syne, serif" }}>Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Karnataka&apos;s most trusted and technologically advanced Ready Mix Concrete company — setting the benchmark for quality, reliability, and sustainable construction practices in South India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
              Our Journey
            </div>
            <h2 className="section-title text-center">Milestones That <span>Define Us</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1B3A6B] to-[#E87B2C]" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-[#1B3A6B] rounded-full flex items-center justify-center z-10 group-hover:border-[#E87B2C] transition-colors shadow-md">
                    <span className="text-xs font-bold text-[#1B3A6B] group-hover:text-[#E87B2C] transition-colors" style={{ fontFamily: "Syne, serif" }}>{m.year}</span>
                  </div>
                  <div className="bg-[#F5F6F8] rounded-xl p-5 flex-1 group-hover:bg-white group-hover:shadow-md transition-all border border-gray-100">
                    <h4 className="font-bold text-[#0F1923] mb-1" style={{ fontFamily: "Syne, serif" }}>{m.event}</h4>
                    <p className="text-gray-500 text-sm">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
              Leadership
            </div>
            <h2 className="section-title text-center">Meet Our <span>Expert Team</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-md" style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)`, fontFamily: "Syne, serif" }}>
                  {member.initials}
                </div>
                <h4 className="font-bold text-[#0F1923] mb-1" style={{ fontFamily: "Syne, serif" }}>{member.name}</h4>
                <p className="text-[#E87B2C] text-xs font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-padding bg-[#0A1F3A]">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <div className="section-badge-dark mx-auto mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
            Quality Policy
          </div>
          <h2 className="section-title-light text-center">Our <span>Quality Commitment</span></h2>
          <div className="accent-divider mx-auto" />
          <p className="text-white/70 leading-relaxed text-lg mb-8">
            &ldquo;Sree Shoba Concretes is committed to delivering Ready Mix Concrete products that consistently meet or exceed customer requirements and applicable Indian Standards. We achieve this through continuous improvement of our processes, training of our team, and deployment of advanced technology.&rdquo;
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["IS 4926:2003", "IS 456:2000", "IS 383:2016", "IS 516:2018", "IS 1199:1959"].map((std) => (
              <div key={std} className="bg-white/8 border border-white/12 rounded-lg px-4 py-2">
                <span className="text-[#E87B2C] font-bold text-sm" style={{ fontFamily: "Syne, serif" }}>{std}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

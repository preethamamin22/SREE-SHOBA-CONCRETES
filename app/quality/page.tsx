import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Control",
  description: "Sree Shoba Concretes maintains the highest quality standards with a dedicated QC lab, IS-certified testing procedures, and complete batch traceability.",
};

const labEquipment = [
  { name: "Slump Cone Set", standard: "IS 1199", purpose: "Workability testing of fresh concrete" },
  { name: "Compression Testing Machine", standard: "IS 516", purpose: "Cube strength testing at 7d & 28d" },
  { name: "Sieve Shaker", standard: "IS 383", purpose: "Aggregate gradation analysis" },
  { name: "Vicat Apparatus", standard: "IS 4031", purpose: "Cement consistency and setting time" },
  { name: "Air Entrainment Meter", standard: "IS 1199", purpose: "Air content of fresh concrete" },
  { name: "Concrete Thermometer", standard: "IS 7861", purpose: "Concrete temperature monitoring" },
];

const procedures = [
  { step: "01", title: "Raw Material Inspection", desc: "All aggregates, cement, sand, admixtures and water tested before use. Gradation, moisture content, specific gravity and silt content checked." },
  { step: "02", title: "Mix Design Verification", desc: "Each grade's mix design verified against IS 10262:2019 with trial mixes tested for strength and workability before production commencement." },
  { step: "03", title: "Batch-wise QC", desc: "Every batch weighed with precision load cells. PLC system records and logs all batch weights. Deviations flagged and corrected automatically." },
  { step: "04", title: "Fresh Concrete Testing", desc: "Slump test conducted at the plant for each truck. Temperature, air content and unit weight checked as per IS 1199." },
  { step: "05", title: "Cube Sampling", desc: "Standard cube moulds filled from every 50 m³ or as specified. Cured in standard conditions and tested at 7d and 28d." },
  { step: "06", title: "Documentation & Reports", desc: "Complete QC report, batch records, delivery challans and cube test certificates provided for every project delivery." },
];

const standards = [
  { code: "IS 4926:2003", title: "Ready Mixed Concrete – Code of Practice" },
  { code: "IS 456:2000", title: "Plain & Reinforced Concrete – Code of Practice" },
  { code: "IS 383:2016", title: "Coarse & Fine Aggregate for Concrete" },
  { code: "IS 516:2018", title: "Method of Tests for Strength of Concrete" },
  { code: "IS 1199:1959", title: "Method of Sampling & Analysis of Concrete" },
  { code: "IS 10262:2019", title: "Concrete Mix Proportioning Guidelines" },
];

export default function QualityPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Quality Control</div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Quality That<br /><span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>You Can Trust</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">Every batch tested. Every pour documented. Our rigorous QC system ensures you receive IS-certified concrete every single time.</p>
        </div>
      </div>

      {/* Lab equipment */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />QC Laboratory</div>
            <h2 className="section-title text-center">State-of-the-Art <span>Lab Equipment</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labEquipment.map((item, i) => (
              <div key={i} className="bg-[#F5F6F8] rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-[#1B3A6B]/20 transition-all">
                <div className="w-10 h-10 bg-[#1B3A6B]/10 rounded-lg flex items-center justify-center mb-4">
                  <FlaskConical className="w-5 h-5 text-[#1B3A6B]" />
                </div>
                <h3 className="font-bold text-[#0F1923] mb-1" style={{ fontFamily: "Syne, serif" }}>{item.name}</h3>
                <div className="text-xs text-[#E87B2C] font-semibold mb-2">{item.standard}</div>
                <p className="text-gray-500 text-sm">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing procedures */}
      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Process</div>
            <h2 className="section-title text-center">Our QC <span>Procedure</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {procedures.map((proc, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md flex gap-5 items-start group transition-all">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1B3A6B] rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:bg-[#E87B2C] transition-colors" style={{ fontFamily: "Syne, serif" }}>
                  {proc.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#0F1923] mb-2" style={{ fontFamily: "Syne, serif" }}>{proc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="section-padding bg-[#0A1F3A]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge-dark mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Standards</div>
            <h2 className="section-title-light text-center">Quality <span>Standards We Follow</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {standards.map((std, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-[#E87B2C]/30 transition-all">
                <div className="text-[#E87B2C] font-bold text-base mb-2" style={{ fontFamily: "Syne, serif" }}>{std.code}</div>
                <p className="text-white/60 text-sm">{std.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

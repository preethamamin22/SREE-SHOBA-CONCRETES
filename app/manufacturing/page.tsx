import type { Metadata } from "next";
import { Cpu, Layers, Package, Truck, BarChart3, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing",
  description: "Explore Sree Shoba Concretes' state-of-the-art RMC batching plant — PLC automation, twin-shaft mixer, automated aggregate batching, and 25+ transit mixer fleet.",
};

const plantFeatures = [
  { icon: Cpu, title: "PLC Control System", desc: "Siemens-grade PLC automation controls all batching sequences with precision. Real-time monitoring, error detection, and automated reporting for every batch.", metric: "±0.5% weighing accuracy" },
  { icon: Layers, title: "Twin Shaft Mixer", desc: "High-intensity twin shaft paddle mixer producing homogeneous concrete within 60 seconds per batch — superior to conventional drum mixers.", metric: "60 sec per batch" },
  { icon: Settings, title: "Automatic Batching", desc: "Fully automated aggregate, cement, water, admixture batching with electronic load cells. No manual intervention in the batching process.", metric: "4-compartment bins" },
  { icon: Package, title: "Aggregate Storage", desc: "4-compartment aggregate bins with total 800+ tonne capacity. Covered bins prevent moisture variation and ensure consistent aggregate quality.", metric: "800T capacity" },
  { icon: BarChart3, title: "Production Capacity", desc: "500+ cubic metres per day with ability to scale further. Two batching lines available for surge demand during large infrastructure projects.", metric: "500+ m³/day" },
  { icon: Truck, title: "Transit Mixer Fleet", desc: "25+ GPS-tracked transit mixers ranging from 6m³ to 9m³. Real-time tracking ensures on-time delivery across all Bengaluru zones.", metric: "25+ mixers, GPS tracked" },
];

const batchingProcess = [
  { step: "01", title: "Order Receipt", desc: "Order placed via phone/WhatsApp. Technical team reviews and confirms grade, slump, admixture and delivery time." },
  { step: "02", title: "Mix Design Retrieval", desc: "PLC system retrieves pre-approved mix design for the specified grade from the database." },
  { step: "03", title: "Aggregate Batching", desc: "PLC automates aggregate bin gates. Load cells weigh each fraction to ±0.5% accuracy." },
  { step: "04", title: "Cement & Water", desc: "Cement weighed by load cell. Water metered by flow meter. Admixtures dispensed by electronic dosing pump." },
  { step: "05", title: "Mixing", desc: "Twin-shaft mixer mixes all ingredients for 60 seconds. QC team conducts slump test on first truck." },
  { step: "06", title: "Discharge & Delivery", desc: "Concrete discharged into transit mixer. GPS tracked to site. Delivery challan and cube specimens issued." },
];

export default function ManufacturingPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Manufacturing</div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Advanced Industrial<br /><span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Plant Technology</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">Our plant at Sy. No.91, Gollahalli Village combines precision automation with deep expertise to deliver 500+ m³ of quality concrete daily.</p>
        </div>
      </div>

      {/* Plant features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Plant Overview</div>
            <h2 className="section-title text-center">Plant <span>Technology & Equipment</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plantFeatures.map((feat, i) => (
              <div key={i} className="bg-[#F5F6F8] rounded-2xl p-7 border border-gray-100 hover:bg-white hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#1B3A6B]/10 rounded-xl flex items-center justify-center group-hover:bg-[#1B3A6B]/18 transition-colors">
                    <feat.icon className="w-6 h-6 text-[#1B3A6B]" />
                  </div>
                  <span className="text-xs font-bold text-[#E87B2C] bg-[#E87B2C]/10 px-2.5 py-1 rounded-full border border-[#E87B2C]/20">{feat.metric}</span>
                </div>
                <h3 className="font-bold text-[#0F1923] mb-2" style={{ fontFamily: "Syne, serif" }}>{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batching process */}
      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Process</div>
            <h2 className="section-title text-center">From Order to <span>Site Delivery</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {batchingProcess.map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all group">
                <div className="text-5xl font-extrabold text-gray-100 group-hover:text-[#E87B2C]/20 transition-colors mb-4 leading-none" style={{ fontFamily: "Syne, serif" }}>{step.step}</div>
                <h3 className="font-bold text-[#0F1923] mb-2" style={{ fontFamily: "Syne, serif" }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet section */}
      <section className="section-padding bg-[#0A1F3A]">
        <div className="container-custom text-center">
          <div className="section-badge-dark mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Transit Fleet</div>
          <h2 className="section-title-light text-center">25+ <span>GPS-Tracked Mixers</span></h2>
          <div className="accent-divider mx-auto" />
          <p className="text-white/60 max-w-xl mx-auto mb-10">Our modern transit mixer fleet covers all Bengaluru zones — from Whitefield to Kanakapura Road, Electronic City to Hebbal.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Truck Capacity", value: "6m³ – 9m³" },
              { label: "Fleet Size", value: "25+ Mixers" },
              { label: "Coverage", value: "All Bengaluru" },
              { label: "Tracking", value: "GPS Real-time" },
            ].map((item) => (
              <div key={item.label} className="bg-white/8 border border-white/12 rounded-xl p-5">
                <div className="text-[#E87B2C] font-bold text-lg mb-1" style={{ fontFamily: "Syne, serif" }}>{item.value}</div>
                <div className="text-white/50 text-xs">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, Gauge, Package, Truck, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "PLC Automation",
    description: "Full computerized batch control with real-time monitoring, precision weighing and automated mixing sequences.",
    metric: "±0.5%",
    metricLabel: "Weighing Accuracy",
  },
  {
    icon: Layers,
    title: "Twin Shaft Mixer",
    description: "High-intensity twin shaft paddle mixer delivering homogeneous concrete in 60 seconds per batch.",
    metric: "60s",
    metricLabel: "Mixing Time",
  },
  {
    icon: Gauge,
    title: "Auto Batching System",
    description: "Fully automated aggregate, cement, water and admixture batching with electronic load cells.",
    metric: "4",
    metricLabel: "Bin Compartments",
  },
  {
    icon: Package,
    title: "Aggregate Storage",
    description: "4-compartment aggregate bins with 800+ tonne capacity ensuring uninterrupted production.",
    metric: "800T",
    metricLabel: "Storage Capacity",
  },
  {
    icon: Truck,
    title: "Transit Mixers",
    description: "25+ GPS-tracked transit mixer trucks (6m³ – 9m³) for reliable, on-time concrete delivery across Bengaluru.",
    metric: "25+",
    metricLabel: "Mixer Fleet",
  },
  {
    icon: BarChart3,
    title: "Production Capacity",
    description: "500+ cubic metres per day production capacity with ability to scale for large infrastructure projects.",
    metric: "500+",
    metricLabel: "m³/Day Output",
  },
];

export default function ManufacturingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#0A1F3A] relative overflow-hidden" ref={ref}>
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(232,123,44,0.6) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(27,58,107,0.8) 0%, transparent 70%)" }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge-dark mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
            Manufacturing Excellence
          </div>
          <h2 className="section-title-light text-center">
            State-of-the-Art{" "}
            <span>Plant Technology</span>
          </h2>
          <div className="accent-divider mx-auto" />
          <p className="text-white/60 leading-relaxed text-base mx-auto text-center max-w-lg">
            Our modern batching plant combines advanced automation with experienced craftsmanship to deliver consistently superior concrete.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/8 hover:border-[#E87B2C]/40 rounded-2xl p-6 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Top: icon + metric */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 bg-[#E87B2C]/15 border border-[#E87B2C]/25 rounded-xl flex items-center justify-center group-hover:bg-[#E87B2C]/25 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#E87B2C]" />
                </div>
                <div className="text-right">
                  <div
                    className="text-2xl font-extrabold text-[#E87B2C] leading-none"
                    style={{ fontFamily: "Syne, serif", fontWeight: 800 }}
                  >
                    {feature.metric}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{feature.metricLabel}</div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 mb-4 group-hover:bg-[#E87B2C]/20 transition-colors" />

              <h3
                className="text-white font-bold text-base mb-2"
                style={{ fontFamily: "Syne, serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#E87B2C]/20 group-hover:border-[#E87B2C]/60 transition-colors rounded-br-sm" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
        >
          <a
            href="/manufacturing"
            className="inline-flex items-center gap-2 text-[#E87B2C] font-semibold text-sm border border-[#E87B2C]/30 px-6 py-3 rounded-lg hover:bg-[#E87B2C]/10 transition-colors"
            style={{ fontFamily: "Syne, serif" }}
          >
            Explore Our Plant
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

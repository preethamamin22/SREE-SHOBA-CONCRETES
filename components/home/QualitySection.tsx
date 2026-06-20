"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FlaskConical, TestTube, Droplets, Cuboid, ClipboardCheck, HardHat } from "lucide-react";

const qualities = [
  {
    icon: FlaskConical,
    title: "QC Laboratory",
    description: "Fully equipped in-house laboratory with modern testing apparatus for raw material and concrete testing.",
    standard: "IS 456:2000",
  },
  {
    icon: TestTube,
    title: "Raw Material Testing",
    description: "Rigorous testing of cement, aggregates and water before batching to ensure mix quality from the source.",
    standard: "IS 383:2016",
  },
  {
    icon: Droplets,
    title: "Slump Test",
    description: "Workability tested for every batch using standard slump cone method before and during delivery.",
    standard: "IS 1199:1959",
  },
  {
    icon: Cuboid,
    title: "Cube Testing",
    description: "Concrete cube specimens cast at the plant and tested at 7-day and 28-day intervals for strength verification.",
    standard: "IS 516:2018",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Inspection",
    description: "Batch-wise production records, delivery challan, test reports and QC documentation for every pour.",
    standard: "IS 4926:2003",
  },
  {
    icon: HardHat,
    title: "Technical Team",
    description: "Dedicated QC engineers on-site for mix design, supervision, and technical support to your project.",
    standard: "Expert Team",
  },
];

export default function QualitySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge mx-auto">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
            Quality Assurance
          </div>
          <h2 className="section-title text-center">
            Built on{" "}
            <span>Certified Excellence</span>
          </h2>
          <div className="accent-divider mx-auto" />
          <p className="section-subtitle text-center mx-auto">
            Rigorous quality control at every stage from raw material procurement to final delivery — meeting and exceeding BIS standards.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {qualities.map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-br from-[#F5F6F8] to-white rounded-2xl p-7 border border-gray-100 hover:border-[#1B3A6B]/25 hover:shadow-[0_16px_48px_rgba(27,58,107,0.1)] transition-all duration-300 hover:-translate-y-1.5 cursor-default overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, rgba(27,58,107,0.05) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
              />

              {/* Icon */}
              <div className="w-13 h-13 w-12 h-12 bg-[#1B3A6B]/8 group-hover:bg-[#1B3A6B]/15 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                <item.icon className="w-6 h-6 text-[#1B3A6B]" />
              </div>

              <h3
                className="text-base font-bold text-[#0F1923] mb-2"
                style={{ fontFamily: "Syne, serif" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Standard badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E87B2C]/10 rounded-full">
                <div className="w-1 h-1 bg-[#E87B2C] rounded-full" />
                <span className="text-[#E87B2C] text-xs font-semibold">{item.standard}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          className="mt-14 bg-gradient-to-r from-[#1B3A6B] to-[#0F2D55] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: "Syne, serif" }}>
              Every Batch. Every Pour. Tested.
            </h3>
            <p className="text-white/60 text-sm">
              We provide complete QC documentation, test reports and delivery challans for every project.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {["IS 4926:2003", "IS 456:2000", "IS 383:2016"].map((std) => (
              <div key={std} className="bg-white/10 border border-white/15 rounded-xl px-5 py-3 text-center">
                <div className="text-[#E87B2C] font-bold text-sm" style={{ fontFamily: "Syne, serif" }}>{std}</div>
                <div className="text-white/50 text-xs">Certified</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

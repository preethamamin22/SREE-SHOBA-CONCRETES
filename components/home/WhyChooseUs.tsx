"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  ShieldCheck, Cpu, Clock4, Users2, Truck, Star,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Superior Quality",
    description: "IS 4926:2003 certified concrete with strict QC at every batch. Consistent grade and slump guaranteed.",
    color: "#1B3A6B",
    bg: "rgba(27,58,107,0.06)",
    border: "rgba(27,58,107,0.15)",
  },
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "PLC automated batching, twin-shaft mixers, and computerized mix design for precise concrete production.",
    color: "#E87B2C",
    bg: "rgba(232,123,44,0.07)",
    border: "rgba(232,123,44,0.2)",
  },
  {
    icon: Clock4,
    title: "On-Time Delivery",
    description: "GPS-tracked transit mixer fleet ensures concrete arrives on time, every time — no project delays.",
    color: "#1B3A6B",
    bg: "rgba(27,58,107,0.06)",
    border: "rgba(27,58,107,0.15)",
  },
  {
    icon: Users2,
    title: "Experienced Team",
    description: "Our engineers have 15+ years of expertise in concrete technology, mix design, and project coordination.",
    color: "#E87B2C",
    bg: "rgba(232,123,44,0.07)",
    border: "rgba(232,123,44,0.2)",
  },
  {
    icon: Truck,
    title: "Reliable Service",
    description: "25+ transit mixers ensuring adequate supply for large pours, with emergency supply capability.",
    color: "#1B3A6B",
    bg: "rgba(27,58,107,0.06)",
    border: "rgba(27,58,107,0.15)",
  },
  {
    icon: Star,
    title: "Customer Satisfaction",
    description: "2000+ delivered projects with 98% client satisfaction rate. Long-term partnerships built on trust.",
    color: "#E87B2C",
    bg: "rgba(232,123,44,0.07)",
    border: "rgba(232,123,44,0.2)",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#F5F6F8] dot-pattern" ref={ref}>
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
            Why Choose Us
          </div>
          <h2 className="section-title text-center">
            The <span>Sree Shoba</span> Advantage
          </h2>
          <div className="accent-divider mx-auto" />
          <p className="section-subtitle mx-auto text-center">
            Six pillars that make us Bengaluru&apos;s most preferred Ready Mix Concrete partner for contractors and builders.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={cardAnim}
              className="group bg-white rounded-2xl p-7 border cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_56px_rgba(0,0,0,0.12)]"
              style={{ borderColor: reason.border } as React.CSSProperties}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: reason.bg, border: `1px solid ${reason.border}` }}
              >
                <reason.icon
                  className="w-7 h-7 transition-colors duration-300"
                  style={{ color: reason.color }}
                />
              </div>

              {/* Accent line */}
              <div
                className="w-8 h-1 rounded-full mb-4 transition-all duration-300 group-hover:w-14"
                style={{ background: reason.color }}
              />

              <h3
                className="text-lg font-bold text-[#0F1923] mb-3"
                style={{ fontFamily: "Syne, serif" }}
              >
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

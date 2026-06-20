"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Category = "all" | "commercial" | "residential" | "infrastructure";

const projects = [
  { id: 1, title: "IT Park, Whitefield", category: "commercial", size: "tall", volume: "12,000 m³", location: "Whitefield, Bengaluru", bg: "from-[#1B3A6B] to-[#2560a8]" },
  { id: 2, title: "Luxury Villas, Sarjapur", category: "residential", size: "wide", volume: "3,200 m³", location: "Sarjapur Road", bg: "from-[#E87B2C] to-[#b55215]" },
  { id: 3, title: "Flyover, NICE Road", category: "infrastructure", size: "normal", volume: "25,000 m³", location: "NICE Road, Bengaluru", bg: "from-[#0F2D55] to-[#1B3A6B]" },
  { id: 4, title: "Apartment Complex, HSR", category: "residential", size: "normal", volume: "8,500 m³", location: "HSR Layout", bg: "from-[#b55215] to-[#E87B2C]" },
  { id: 5, title: "Shopping Mall, Electronic City", category: "commercial", size: "wide", volume: "18,000 m³", location: "Electronic City", bg: "from-[#2560a8] to-[#1B3A6B]" },
  { id: 6, title: "Underpass, Outer Ring Road", category: "infrastructure", size: "tall", volume: "9,800 m³", location: "Outer Ring Road", bg: "from-[#1B3A6B] to-[#0F2D55]" },
  { id: 7, title: "Gated Community, Kanakapura", category: "residential", size: "normal", volume: "5,600 m³", location: "Kanakapura Road", bg: "from-[#E87B2C] to-[#d4651a]" },
  { id: 8, title: "Hospital, JP Nagar", category: "commercial", size: "normal", volume: "7,200 m³", location: "JP Nagar", bg: "from-[#0F2D55] to-[#2560a8]" },
  { id: 9, title: "Metro Station, Nagawara", category: "infrastructure", size: "wide", volume: "31,000 m³", location: "Nagawara", bg: "from-[#1B3A6B] to-[#E87B2C]" },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "commercial", label: "Commercial" },
  { key: "residential", label: "Residential" },
  { key: "infrastructure", label: "Infrastructure" },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-padding bg-[#F5F6F8]" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="section-badge">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
              Our Projects
            </div>
            <h2 className="section-title">
              Projects That <span>Define Us</span>
            </h2>
            <div className="accent-divider" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.key
                    ? "bg-[#1B3A6B] text-white shadow-md"
                    : "bg-white text-gray-500 hover:text-[#1B3A6B] border border-gray-200"
                }`}
                style={{ fontFamily: "Syne, serif" }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          layout
        >
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                project.size === "tall"
                  ? "row-span-2 min-h-[320px]"
                  : project.size === "wide"
                  ? "col-span-2 min-h-[180px]"
                  : "min-h-[180px]"
              }`}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bg}`} />

              {/* Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 lg:bg-black/0 lg:group-hover:bg-black/25 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white/60 text-xs uppercase tracking-widest font-semibold capitalize mb-1 block">
                    {project.category}
                  </span>
                  <h4
                    className="text-white font-bold text-sm md:text-base leading-tight mb-2"
                    style={{ fontFamily: "Syne, serif" }}
                  >
                    {project.title}
                  </h4>
                  <div className="flex items-center justify-between opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <div className="text-[#E87B2C] text-xs font-semibold">{project.volume}</div>
                      <div className="text-white/60 text-xs">{project.location}</div>
                    </div>
                    <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a href="/projects" className="btn-outline-primary">
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

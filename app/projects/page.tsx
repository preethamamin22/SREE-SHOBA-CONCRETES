"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Filter = "all" | "commercial" | "residential" | "infrastructure";

const projects = [
  { id: 1, title: "IT Park, Whitefield", category: "commercial" as Filter, volume: "12,000 m³", grade: "M40", location: "Whitefield, Bengaluru", year: "2023", gradient: "from-[#1B3A6B] to-[#2560a8]" },
  { id: 2, title: "Luxury Villa Community, Sarjapur", category: "residential" as Filter, volume: "3,200 m³", grade: "M25", location: "Sarjapur Road", year: "2023", gradient: "from-[#E87B2C] to-[#b55215]" },
  { id: 3, title: "Outer Ring Road Flyover", category: "infrastructure" as Filter, volume: "25,000 m³", grade: "M50", location: "Outer Ring Road", year: "2022", gradient: "from-[#0F2D55] to-[#1B3A6B]" },
  { id: 4, title: "Apartment Complex, HSR Layout", category: "residential" as Filter, volume: "8,500 m³", grade: "M30", location: "HSR Layout", year: "2023", gradient: "from-[#b55215] to-[#E87B2C]" },
  { id: 5, title: "Mall of Bengaluru, Electronic City", category: "commercial" as Filter, volume: "18,000 m³", grade: "M35", location: "Electronic City", year: "2022", gradient: "from-[#2560a8] to-[#1B3A6B]" },
  { id: 6, title: "Metro Station, Nagawara", category: "infrastructure" as Filter, volume: "31,000 m³", grade: "M50", location: "Nagawara", year: "2021", gradient: "from-[#1B3A6B] to-[#0F2D55]" },
  { id: 7, title: "Gated Community, Kanakapura", category: "residential" as Filter, volume: "5,600 m³", grade: "M25", location: "Kanakapura Road", year: "2023", gradient: "from-[#E87B2C] to-[#d4651a]" },
  { id: 8, title: "Multi-Specialty Hospital, JP Nagar", category: "commercial" as Filter, volume: "7,200 m³", grade: "M35", location: "JP Nagar", year: "2022", gradient: "from-[#0F2D55] to-[#2560a8]" },
  { id: 9, title: "Road Widening, NICE Corridor", category: "infrastructure" as Filter, volume: "9,800 m³", grade: "M40", location: "NICE Road", year: "2023", gradient: "from-[#1B3A6B] to-[#E87B2C]" },
  { id: 10, title: "Tech Campus, Manyata", category: "commercial" as Filter, volume: "22,000 m³", grade: "M40", location: "Manyata Tech Park", year: "2021", gradient: "from-[#2560a8] to-[#0F2D55]" },
  { id: 11, title: "Elevated Highway Deck", category: "infrastructure" as Filter, volume: "15,000 m³", grade: "M45", location: "Tumkur Road", year: "2022", gradient: "from-[#0F2D55] to-[#E87B2C]" },
  { id: 12, title: "Luxury Apartments, Hennur", category: "residential" as Filter, volume: "6,800 m³", grade: "M30", location: "Hennur, Bengaluru", year: "2023", gradient: "from-[#b55215] to-[#1B3A6B]" },
];

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "commercial", label: "Commercial" },
  { key: "residential", label: "Residential" },
  { key: "infrastructure", label: "Infrastructure" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Filter>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Projects</div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            2000+ Projects<br /><span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Built with Pride</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">From individual homes to city metro stations — our concrete has helped build Bengaluru&apos;s skyline for over 15 years.</p>
        </div>
      </div>

      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${active === f.key ? "bg-[#1B3A6B] text-white shadow-lg" : "bg-white text-gray-500 border border-gray-200 hover:text-[#1B3A6B]"}`}
                style={{ fontFamily: "Syne, serif" }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl overflow-hidden min-h-[220px] cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-white/60 text-xs uppercase tracking-widest font-semibold capitalize">{project.category}</span>
                    </div>
                    <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm leading-tight mb-3" style={{ fontFamily: "Syne, serif" }}>{project.title}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[#E87B2C] text-xs font-bold">{project.volume}</span>
                          <span className="text-white/70 text-xs bg-white/15 px-2 py-0.5 rounded-full">{project.grade}</span>
                        </div>
                        <div className="text-white/60 text-xs">{project.location} · {project.year}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats */}
          <div className="mt-14 bg-white rounded-2xl border border-gray-100 p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "2000+", label: "Total Projects" },
              { value: "15 Lakhs+", label: "m³ Delivered" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "15+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-extrabold text-[#1B3A6B] mb-1" style={{ fontFamily: "Syne, serif", fontWeight: 800 }}>{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

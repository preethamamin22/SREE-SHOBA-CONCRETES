"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type GalleryCategory = "all" | "plant" | "mixers" | "pouring" | "lab" | "projects";

const galleryItems = [
  { id: 1, category: "plant" as GalleryCategory, title: "Batching Plant Overview", gradient: "from-[#1B3A6B] to-[#2560a8]" },
  { id: 2, category: "mixers" as GalleryCategory, title: "Transit Mixer Fleet", gradient: "from-[#E87B2C] to-[#b55215]" },
  { id: 3, category: "pouring" as GalleryCategory, title: "Column Pour – IT Park", gradient: "from-[#0F2D55] to-[#1B3A6B]" },
  { id: 4, category: "lab" as GalleryCategory, title: "Slump Test", gradient: "from-[#b55215] to-[#E87B2C]" },
  { id: 5, category: "projects" as GalleryCategory, title: "Flyover Construction", gradient: "from-[#2560a8] to-[#1B3A6B]" },
  { id: 6, category: "plant" as GalleryCategory, title: "Twin Shaft Mixer", gradient: "from-[#1B3A6B] to-[#0F2D55]" },
  { id: 7, category: "mixers" as GalleryCategory, title: "Loading Bay", gradient: "from-[#E87B2C] to-[#d4651a]" },
  { id: 8, category: "pouring" as GalleryCategory, title: "Slab Pour – Apartment", gradient: "from-[#0F2D55] to-[#2560a8]" },
  { id: 9, category: "lab" as GalleryCategory, title: "Cube Testing", gradient: "from-[#1B3A6B] to-[#E87B2C]" },
  { id: 10, category: "projects" as GalleryCategory, title: "Metro Station Pour", gradient: "from-[#2560a8] to-[#0F2D55]" },
  { id: 11, category: "plant" as GalleryCategory, title: "Aggregate Storage Bins", gradient: "from-[#0F2D55] to-[#1B3A6B]" },
  { id: 12, category: "pouring" as GalleryCategory, title: "Foundation Pour", gradient: "from-[#b55215] to-[#1B3A6B]" },
];

const categories: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "plant", label: "Plant" },
  { key: "mixers", label: "Transit Mixers" },
  { key: "pouring", label: "Concrete Pouring" },
  { key: "lab", label: "Laboratory" },
  { key: "projects", label: "Projects" },
];

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory>("all");
  const filtered = active === "all" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Gallery</div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Plant, Fleet &<br /><span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Project Gallery</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">A visual showcase of our manufacturing plant, transit mixer fleet, concrete pours, laboratory and completed projects.</p>
        </div>
      </div>

      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${active === cat.key ? "bg-[#1B3A6B] text-white shadow-lg" : "bg-white text-gray-500 border border-gray-200 hover:text-[#1B3A6B]"}`}
                style={{ fontFamily: "Syne, serif" }}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <AnimatePresence mode="popLayout">
            <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="absolute inset-0 bg-black/20 lg:bg-black/0 lg:group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <div className="text-white/60 text-xs capitalize mb-1">{item.category}</div>
                      <h3 className="text-white font-bold text-sm" style={{ fontFamily: "Syne, serif" }}>{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="text-center text-gray-400 text-sm mt-8">
            * Gallery images will be updated with actual plant and project photos.
          </p>
        </div>
      </section>
    </div>
  );
}

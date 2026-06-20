"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const clients = [
  { name: "Prestige Group", abbr: "PG" },
  { name: "Sobha Limited", abbr: "SL" },
  { name: "L&T Construction", abbr: "L&T" },
  { name: "Puravankara", abbr: "PV" },
  { name: "Brigade Group", abbr: "BG" },
  { name: "BMRCL", abbr: "BM" },
  { name: "BBMP", abbr: "BB" },
  { name: "Embassy Group", abbr: "EG" },
  { name: "Shriram Properties", abbr: "SP" },
  { name: "Mantri Developers", abbr: "MD" },
  { name: "GR Infra", abbr: "GR" },
  { name: "KMB Projects", abbr: "KP" },
];

const allClients = [...clients, ...clients];

export default function ClientsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-white overflow-hidden border-y border-gray-100" ref={ref}>
      <div className="container-custom mb-10 text-center">
        <h2
          className="section-heading-rdc"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          OUR <span>CUSTOMERS</span>
        </h2>
        <div
          className="red-divider mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        />
        <p
          className="text-gray-500 text-base max-w-xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          Trusted by Karnataka&apos;s leading developers, builders, contractors and
          government agencies for premium quality concrete.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex-none flex items-center gap-3 bg-white border border-gray-200 hover:border-[#1B3A6B]/40 shadow-sm hover:shadow-md mx-3 px-6 py-4 transition-all duration-300 group"
              style={{ minWidth: "200px" }}
            >
              {/* Logo placeholder */}
              <div className="w-10 h-10 rounded bg-[#1B3A6B] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E87B2C] transition-colors">
                <span className="text-white font-black text-xs" style={{ fontFamily: "Syne, serif" }}>
                  {client.abbr}
                </span>
              </div>
              <span className="text-gray-700 font-semibold text-sm group-hover:text-[#1B3A6B] transition-colors whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

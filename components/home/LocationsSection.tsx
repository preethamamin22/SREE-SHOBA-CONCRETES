"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const zones = [
  {
    area: "South Bengaluru",
    locations: [
      "Anjanapura", "JP Nagar", "Jayanagar", "Banashankari",
      "Kanakpura Road", "Uttarahalli", "Kanakapura", "Gottigere",
    ],
  },
  {
    area: "North Bengaluru",
    locations: [
      "Hebbal", "Yelahanka", "Devanahalli", "Thanisandra",
      "Jakkur", "Sahakarnagar", "Kodigehalli", "Bagalur",
    ],
  },
  {
    area: "East Bengaluru",
    locations: [
      "Whitefield", "Marathahalli", "Sarjapur", "Electronic City",
      "Bellandur", "Varthur", "Kadugodi", "Hoskote",
    ],
  },
  {
    area: "West Bengaluru",
    locations: [
      "Rajajinagar", "Peenya", "Yeshwanthpur", "Tumkur Road",
      "Nagarbhavi", "Kengeri", "Vijayanagar", "Basavangudi",
    ],
  },
  {
    area: "Central Bengaluru",
    locations: [
      "Indiranagar", "Koramangala", "HSR Layout", "BTM Layout",
      "Domlur", "MG Road", "Shivajinagar", "Malleswaram",
    ],
  },
];

export default function LocationsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-[#1B3A6B]" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <h2 className="section-heading-rdc-light">
            SERVICE <span>LOCATIONS</span>
          </h2>
          <div className="orange-divider mx-auto" />
          <p className="text-white/60 text-base max-w-xl mx-auto">
            Delivering premium Ready Mix Concrete across all major zones of
            Bengaluru with our 25+ fleet of GPS-tracked transit mixers.
          </p>
        </div>

        {/* Location zones grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {zones.map((zone, i) => (
            <div
              key={zone.area}
              className="border border-white/15 bg-white/5 hover:bg-white/10 transition-colors duration-200 p-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#E87B2C] flex-shrink-0" />
                <h3 className="text-white font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "Syne, serif" }}>
                  {zone.area}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {zone.locations.map((loc) => (
                  <li key={loc} className="flex items-center gap-2 text-white/60 text-sm hover:text-white/90 transition-colors">
                    <span className="w-1 h-1 bg-[#E87B2C] rounded-full flex-shrink-0" />
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div
          className="border border-white/20 bg-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <div>
            <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: "Syne, serif" }}>
              Don&apos;t see your area listed?
            </h4>
            <p className="text-white/60 text-sm">
              We may still be able to serve you — contact us to check availability for your project location.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a
              href="tel:+919513636464"
              className="flex items-center gap-2 bg-[#E87B2C] hover:bg-[#d4651a] text-white font-bold text-sm px-6 py-3 transition-all duration-200"
              style={{ fontFamily: "Syne, serif" }}
            >
              <Phone className="w-4 h-4" /> Call: +91 9513636464
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm px-6 py-3 transition-all duration-200"
              style={{ fontFamily: "Syne, serif" }}
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

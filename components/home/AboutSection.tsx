"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const highlights = [
  "IS 4926:2003 Certified Ready Mix Concrete",
  "PLC automated computerized batching plant",
  "Twin-shaft mixers for consistent mix quality",
  "24/7 on-time delivery with GPS-tracked fleet",
  "Dedicated in-house quality control laboratory",
  "Grades M10 to M60 — all structural applications",
  "Serving residential, commercial & infrastructure",
  "Technical support from expert concrete engineers",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* LEFT — Text content */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <h2 className="section-heading-rdc mb-0">
              WELCOME TO <span>SREE SHOBA CONCRETES</span>
            </h2>
            <div className="red-divider" />

            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-4">
              Bengaluru&apos;s Name of Trusted Quality
            </p>

            <p className="text-gray-700 leading-relaxed mb-5 text-base" style={{ textAlign: "justify" }}>
              Sree Shoba Concretes is a premier Ready Mix Concrete (RMC) manufacturer strategically
              located at Gollahalli Village, Anjanapura, Bengaluru. Established with a vision to
              transform concrete manufacturing in Karnataka, we have grown to become one of the most
              trusted names in the industry.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5 text-base" style={{ textAlign: "justify" }}>
              Our state-of-the-art batching plant is equipped with PLC automation, twin-shaft
              mixers, and advanced quality control systems — ensuring that every cubic metre we
              deliver meets the highest Indian Standards and your project's exact specifications.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8 text-base" style={{ textAlign: "justify" }}>
              With a fleet of 25+ transit mixers and a production capacity of 500+ m³/day, we
              serve residential complexes, commercial towers, infrastructure corridors, and
              government projects across Bengaluru with unmatched reliability.
            </p>

            {/* Highlights list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-10">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#E87B2C] flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#1B3A6B] hover:bg-[#E87B2C] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 transition-all duration-200"
              style={{ fontFamily: "Syne, serif" }}
            >
              Read More
            </Link>
          </div>

          {/* RIGHT — Plant visual + key facts */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
            }}
          >
            {/* Bordered frame like RDC's map panel */}
            <div className="border-4 border-[#1B3A6B] rounded-sm overflow-hidden shadow-2xl">
              {/* Top label bar */}
              <div className="bg-[#1B3A6B] px-5 py-3 flex items-center justify-between">
                <span className="text-white font-bold text-sm uppercase tracking-widest" style={{ fontFamily: "Syne, serif" }}>
                  Our Plant — Bengaluru
                </span>
                <span className="text-[#E87B2C] text-xs font-bold uppercase">Est. 2009</span>
              </div>

              {/* Plant image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/pw/AP1GczM1fJ9HaMDMlujgVgH_orAY9Wo99-u4HmgrCmvA-rELGd17voIXwJzF6uElbt2RRciCDkwnKnUkqreMSdfWgEyhUa4WFH61_OeEi0-2FGGYrFDiK3TXUjEEW02H9OLr7CM8-dlj8ES1rqSBofbdf9V8jw=w1600-h720-s-no-gm?authuser=0"
                alt="Sree Shoba Concretes RMC Plant"
                className="w-full h-64 object-cover"
              />

              {/* Key facts grid */}
              <div className="grid grid-cols-2 gap-px bg-gray-200">
                {[
                  { value: "500+", label: "m³/Day Capacity", icon: "⚙️" },
                  { value: "25+", label: "Transit Mixers", icon: "🚛" },
                  { value: "2000+", label: "Projects Done", icon: "🏗️" },
                  { value: "15+", label: "Years Experience", icon: "🏆" },
                ].map((fact, i) => (
                  <div key={i} className="bg-white px-5 py-4 text-center">
                    <div className="text-xl mb-1">{fact.icon}</div>
                    <div
                      className="text-2xl font-black text-[#1B3A6B]"
                      style={{ fontFamily: "Syne, serif", fontWeight: 900 }}
                    >
                      <Counter target={parseInt(fact.value)} suffix={fact.value.includes("+") ? "+" : ""} />
                    </div>
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide mt-0.5">
                      {fact.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom location bar */}
              <div className="bg-[#0F2D55] px-5 py-3 text-center">
                <p className="text-white/70 text-xs">
                  📍 Sy. No. 91, Gollahalli Village, Anjanapura Post, Uttarahalli Hobli, Bengaluru – 560062
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="flex gap-4 mt-5">
              {["IS 4926:2003", "BIS Certified", "QCI Compliant"].map((cert) => (
                <div
                  key={cert}
                  className="flex-1 border border-[#1B3A6B]/30 rounded-sm px-3 py-2.5 text-center hover:border-[#E87B2C] transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-[#E87B2C] mx-auto mb-1" />
                  <span className="text-xs font-bold text-[#1B3A6B] uppercase tracking-wide">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 500, suffix: "+", unit: "m³/Day", label: "Plant Capacity" },
  { value: 2000, suffix: "+", unit: "", label: "Projects Delivered" },
  { value: 15, suffix: "+", unit: "Years", label: "Industry Experience" },
  { value: 25, suffix: "+", unit: "Fleet", label: "Transit Mixers" },
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2200;
    const totalSteps = duration / 16;
    const step = target / totalSteps;
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (Math.floor(start) >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-6 bg-[#2d2d2d]">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111] text-center px-6 py-10 group hover:bg-[#1B3A6B] transition-all duration-300 cursor-default"
            >
              <div
                className="text-5xl font-black mb-1 leading-none"
                style={{ fontFamily: "Syne, serif", fontWeight: 900 }}
              >
                <span className="text-white">
                  <AnimatedCounter target={stat.value} suffix="" />
                </span>
                <span className="text-[#E87B2C]">{stat.suffix}</span>
              </div>
              {stat.unit && (
                <div className="text-[#E87B2C] text-sm font-bold uppercase tracking-widest mb-1">
                  {stat.unit}
                </div>
              )}
              <div className="text-white/60 text-sm font-semibold uppercase tracking-wider group-hover:text-white/80 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const capabilities = [
  {
    title: "Operations",
    description:
      "Our Ready Mix Concrete is produced in a fully automated and integrated computerized batching plant with precision PLC control systems.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Quality Assurance",
    description:
      "We consider technical capability as our core competency. Our in-house laboratory rigorously tests every batch to IS 4926:2003 standards.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Fleet & Delivery",
    description:
      "Our 25+ GPS-tracked transit mixers ensure on-time delivery to your site. Real-time fleet visibility means zero surprises on pour day.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Safety Standards",
    description:
      "Safety is non-negotiable. All our operations follow strict HSE guidelines, with trained personnel and PPE compliance at every stage.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Technical Support",
    description:
      "Our expert concrete technologists provide mix design consultation, on-site support, and post-pour technical assistance for every project.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=400&auto=format&fit=crop",
  },
];

export default function CapabilitiesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-[#f8f8f8]" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <h2 className="section-heading-rdc">
            OUR <span>CAPABILITIES</span>
          </h2>
          <div className="red-divider mx-auto" />
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            End-to-end concrete solutions backed by technology, expertise and an
            unwavering commitment to quality.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="cap-card bg-white overflow-hidden border border-gray-100"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={cap.image}
                  alt={cap.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-5">
                <h3
                  className="cap-title text-[#E87B2C] font-bold text-base mb-2 transition-colors"
                  style={{ fontFamily: "Syne, serif", fontWeight: 700 }}
                >
                  {cap.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

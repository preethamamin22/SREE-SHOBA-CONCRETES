/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Ready Mix Concrete",
    slug: "ready-mix",
    grade: "M5 – M60",
    description:
      "Standard and premium grades for all structural applications. Consistent quality with computerized batching and real-time monitoring.",
    image:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Residential Concrete",
    slug: "residential",
    grade: "M15 – M30",
    description:
      "Ideal for foundations, slabs, columns and beams in residential construction. Cost-effective, reliable, and delivered on time.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Commercial Concrete",
    slug: "commercial",
    grade: "M25 – M50",
    description:
      "High-performance mixes for commercial structures, malls, offices and multi-storey buildings requiring superior strength.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Infrastructure Concrete",
    slug: "infrastructure",
    grade: "M30 – M60",
    description:
      "Specialized mixes for roads, bridges, flyovers, metro projects and other large-scale infrastructure works.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "High Strength Concrete",
    slug: "high-strength",
    grade: "M50 – M80",
    description:
      "Ultra-high performance concrete for demanding structural applications requiring superior compressive strength.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Custom Mix Solutions",
    slug: "custom",
    grade: "Tailor-made",
    description:
      "Bespoke concrete mix designs by our engineers to meet your project's specific structural and environmental requirements.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ProductsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-20 bg-[#0a0a0a]" ref={ref}>
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
          <h2 className="section-heading-rdc-light">
            FEATURED <span>PRODUCTS</span>
          </h2>
          <div className="red-divider mx-auto" />
          <p className="text-white/50 text-base max-w-xl mx-auto">
            From residential foundations to massive infrastructure — we have the right
            concrete mix for every project.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={product.slug}
              className="bg-white group overflow-hidden flex flex-col justify-between"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(30px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              <div>
                {/* Image */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Grade badge */}
                  <div className="absolute top-3 left-3 bg-[#1B3A6B] text-white text-xs font-bold px-2.5 py-1 uppercase tracking-wide">
                    {product.grade}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <h3
                    className="text-[#E87B2C] font-bold text-base mb-2 group-hover:text-[#1B3A6B] transition-colors"
                    style={{ fontFamily: "Syne, serif", fontWeight: 700 }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Action footer */}
              <div className="p-6 pt-0 border-b-4 border-transparent group-hover:border-[#E87B2C] transition-colors duration-300">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#1B3A6B] hover:text-[#E87B2C] font-semibold text-xs uppercase tracking-wider transition-colors"
                  style={{ fontFamily: "Syne, serif" }}
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#E87B2C] hover:bg-[#E87B2C] text-white font-bold text-sm uppercase tracking-wider px-8 py-3 transition-all duration-200"
            style={{ fontFamily: "Syne, serif" }}
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

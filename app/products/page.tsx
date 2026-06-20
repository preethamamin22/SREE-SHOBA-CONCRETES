import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building, Home, Landmark, Zap, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore Sree Shoba Concretes' full range of Ready Mix Concrete products — from standard residential grades to high-strength and custom mixes for all project types.",
};

const products = [
  {
    icon: Building,
    title: "Ready Mix Concrete",
    slug: "ready-mix",
    grades: ["M5", "M10", "M15", "M20", "M25", "M30", "M35", "M40"],
    description: "Standard IS-certified Ready Mix Concrete grades for all structural applications. Computerized batching ensures consistent slump and grade.",
    applications: ["Residential buildings", "Commercial structures", "Industrial floors", "General construction"],
    color: "#1B3A6B",
    highlight: "Most Popular",
  },
  {
    icon: Home,
    title: "Residential Concrete",
    slug: "residential",
    grades: ["M15", "M20", "M25", "M30"],
    description: "Cost-optimized concrete mix designs for residential construction — foundations, slabs, columns, beams and staircases.",
    applications: ["Individual homes", "Apartment buildings", "Villas", "Compound walls"],
    color: "#E87B2C",
    highlight: null,
  },
  {
    icon: Building,
    title: "Commercial Concrete",
    slug: "commercial",
    grades: ["M25", "M30", "M35", "M40", "M50"],
    description: "High-performance concrete for commercial buildings, malls, offices and multi-storey structures requiring superior structural integrity.",
    applications: ["Shopping malls", "IT parks", "Office buildings", "Hotels & hospitality"],
    color: "#1B3A6B",
    highlight: null,
  },
  {
    icon: Landmark,
    title: "Infrastructure Concrete",
    slug: "infrastructure",
    grades: ["M30", "M35", "M40", "M50", "M60"],
    description: "Specialized concrete mixes for roads, bridges, flyovers, metro projects, tunnels and other critical infrastructure works.",
    applications: ["Road & highway projects", "Bridges & flyovers", "Metro & rail", "Drainage & sewage"],
    color: "#E87B2C",
    highlight: null,
  },
  {
    icon: Zap,
    title: "High Strength Concrete",
    slug: "high-strength",
    grades: ["M50", "M55", "M60", "M70", "M80"],
    description: "Ultra-high performance concrete (UHPC) for demanding applications requiring exceptional compressive strength and durability.",
    applications: ["Pre-stressed structures", "Nuclear structures", "Offshore construction", "High-rise cores"],
    color: "#1B3A6B",
    highlight: "Specialty Grade",
  },
  {
    icon: Settings,
    title: "Custom Concrete Solutions",
    slug: "custom",
    grades: ["Engineered to spec"],
    description: "Bespoke concrete mix designs developed by our engineers for project-specific requirements — waterproof, fiber-reinforced, SCC, pump-able mixes.",
    applications: ["Waterproof concrete", "Self-compacting concrete", "Fiber-reinforced", "Pump concrete"],
    color: "#E87B2C",
    highlight: null,
  },
];

export default function ProductsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-16 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
            Our Products
          </div>
          <h1 className="text-white font-extrabold mb-6 tracking-wide" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "0.02em" }}>
            Concrete Solutions for<br />
            <span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every Project
            </span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">
            From M5 to M80 — we offer the complete range of Ready Mix Concrete grades with IS certification, QC documentation, and on-time delivery.
          </p>
        </div>
      </div>

      {/* Products grid */}
      <section className="section-padding bg-white py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {products.map((product) => (
              <div key={product.slug} className="group bg-white rounded-2xl border border-gray-100 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div
                  className="p-6 lg:p-8 flex flex-col sm:flex-row items-start justify-between relative overflow-hidden gap-4 sm:gap-0"
                  style={{ background: `linear-gradient(135deg, ${product.color}15, ${product.color}08)` }}
                >
                  <div>
                    {product.highlight && (
                      <span className="inline-block text-xs font-bold text-[#E87B2C] bg-[#E87B2C]/15 border border-[#E87B2C]/25 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wider">
                        {product.highlight}
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${product.color}18` }}>
                        <product.icon className="w-5 h-5" style={{ color: product.color }} />
                      </div>
                      <h2 className="text-xl font-bold text-[#0F1923] tracking-wide" style={{ fontFamily: "Syne, serif" }}>
                        {product.title}
                      </h2>
                    </div>
                  </div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-3 group-hover:translate-x-0"
                    style={{ color: product.color, borderColor: `${product.color}30` }}
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Body */}
                <div className="p-6 lg:p-8">
                  <p className="text-gray-600 text-sm leading-loose tracking-wide mb-6">{product.description}</p>

                  {/* Grades */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Available Grades</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.grades.map((grade) => (
                        <span key={grade} className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: product.color, borderColor: `${product.color}30`, background: `${product.color}08` }}>
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Applications</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.applications.map((app) => (
                        <li key={app} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C] flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                  <Link href={`/products/${product.slug}`} className="btn-outline-primary w-full justify-center text-sm py-2.5" style={{ color: product.color, borderColor: `${product.color}50` }}>
                    View Specifications <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16 bg-[#F5F6F8]">
        <div className="container-custom text-center">
          <h3 className="section-title text-center">Not sure which grade? <span>Ask our experts.</span></h3>
          <p className="section-subtitle text-center mx-auto mb-6">Our concrete technologists will recommend the right mix for your project — call or WhatsApp us.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">Get Free Consultation <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+919513636464" className="btn-outline-primary w-full sm:w-auto justify-center">Call +91 9513636464</a>
          </div>
        </div>
      </section>
    </div>
  );
}

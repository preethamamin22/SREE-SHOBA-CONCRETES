import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

const productData: Record<string, {
  title: string;
  grades: string[];
  description: string;
  longDescription: string;
  applications: string[];
  specifications: { label: string; value: string }[];
  benefits: string[];
}> = {
  "ready-mix": {
    title: "Ready Mix Concrete",
    grades: ["M5", "M10", "M15", "M20", "M25", "M30", "M35", "M40"],
    description: "Our flagship product — IS 4926:2003 certified Ready Mix Concrete for all structural applications.",
    longDescription: "Sree Shoba Concretes produces IS 4926:2003 certified Ready Mix Concrete across the full M5–M40 grade spectrum. Every batch is produced using PLC-automated batching plants with precision weighing of all ingredients. Our QC team conducts slump tests, temperature checks, and cube sampling at the plant and delivery point for every pour.",
    applications: ["Residential foundations & slabs", "Commercial buildings", "Industrial floors & pavements", "Boundary walls", "General structural work"],
    specifications: [
      { label: "Standard", value: "IS 4926:2003 / IS 456:2000" },
      { label: "Grades Available", value: "M5 to M40" },
      { label: "Slump Range", value: "25mm to 200mm (as specified)" },
      { label: "Max Aggregate Size", value: "12.5mm / 20mm / 40mm" },
      { label: "Minimum Order", value: "3 m³" },
      { label: "Lead Time", value: "4–6 hours after order confirmation" },
    ],
    benefits: ["Consistent grade and slump every batch", "Complete QC documentation provided", "GPS-tracked on-time delivery", "Technical support on site if required", "IS 4926:2003 certified production"],
  },
  "residential": {
    title: "Residential Concrete",
    grades: ["M15", "M20", "M25", "M30"],
    description: "Cost-effective concrete solutions designed for residential construction projects.",
    longDescription: "Our Residential Concrete range offers the ideal balance of quality and cost-effectiveness for individual homes, apartment buildings, and gated communities. Mix designs are optimized for residential structural requirements while maintaining full IS certification and QC documentation.",
    applications: ["Individual house foundations", "Apartment slabs & columns", "Villa compounds", "Staircases", "Driveways & paths"],
    specifications: [
      { label: "Standard", value: "IS 456:2000" },
      { label: "Grades Available", value: "M15 to M30" },
      { label: "Slump", value: "75mm to 150mm" },
      { label: "Aggregate Size", value: "20mm standard" },
      { label: "Minimum Order", value: "3 m³" },
      { label: "Lead Time", value: "4–6 hours" },
    ],
    benefits: ["Cost-optimized residential mix", "Suitable for pump and chute placing", "Cube test certificates provided", "Mix design by qualified engineer", "Easy workability for site crew"],
  },
  "commercial": {
    title: "Commercial Concrete",
    grades: ["M25", "M30", "M35", "M40", "M50"],
    description: "High-performance mixes for commercial buildings, malls, and multi-storey structures.",
    longDescription: "Commercial structures demand concrete with precise strength, workability, and durability. Our commercial grade mixes are engineered with admixtures for extended workability, reduced water-cement ratio, and superior finish quality. Complete QC records and test certificates are provided.",
    applications: ["Shopping malls", "IT parks & offices", "Hotels & hospitality", "Multi-storey residential", "Basement & podium slabs"],
    specifications: [
      { label: "Standard", value: "IS 456:2000 / IS 4926:2003" },
      { label: "Grades Available", value: "M25 to M50" },
      { label: "Slump", value: "100mm to 200mm" },
      { label: "Admixtures", value: "HRWR / plasticizers" },
      { label: "Minimum Order", value: "5 m³" },
      { label: "Lead Time", value: "6 hours" },
    ],
    benefits: ["Extended workability (60–90 min)", "High early strength options", "Pump-able mixes available", "Low permeability for basement", "Complete traceability records"],
  },
  "infrastructure": {
    title: "Infrastructure Concrete",
    grades: ["M30", "M35", "M40", "M50", "M60"],
    description: "Specialized concrete mixes for roads, bridges, flyovers, and metro projects.",
    longDescription: "Infrastructure projects require concrete with exacting specifications — high strength, low shrinkage, controlled bleed water, and maximum durability. Our infrastructure mixes incorporate fly ash, GGBS, silica fume, and specialized admixtures per design requirements.",
    applications: ["Road & highway projects", "Bridges & flyovers", "Metro stations & tunnels", "Storm water drains", "Retaining walls"],
    specifications: [
      { label: "Standard", value: "IRC / IS 456:2000 / Project spec" },
      { label: "Grades Available", value: "M30 to M60" },
      { label: "Supplementary Materials", value: "Fly ash, GGBS, Silica fume" },
      { label: "Durability", value: "Designed for 100-year life" },
      { label: "Minimum Order", value: "6 m³" },
      { label: "Technical Support", value: "QC engineer deputed to site" },
    ],
    benefits: ["Mix design per project specification", "Qualified QC engineer at site", "Full batch records and test reports", "IRC/IS code compliance assured", "Large volume supply capability"],
  },
  "high-strength": {
    title: "High Strength Concrete",
    grades: ["M50", "M55", "M60", "M70", "M80"],
    description: "Ultra-high performance concrete for demanding structural applications.",
    longDescription: "High Strength Concrete (HSC) and Ultra High Performance Concrete (UHPC) grades are produced using low water-cement ratios, high-range water reducers, silica fume, and precisely controlled aggregate gradation. These mixes deliver exceptional compressive strength, density, and durability for critical structures.",
    applications: ["Pre-stressed elements", "High-rise structural cores", "Bridge girders & decks", "Nuclear structures", "Offshore and marine structures"],
    specifications: [
      { label: "Standard", value: "IS 456:2000 (Special provisions)" },
      { label: "Grades Available", value: "M50 to M80" },
      { label: "w/c Ratio", value: "0.28 to 0.38" },
      { label: "Silica Fume", value: "8–12% by cement weight" },
      { label: "Strength at 28d", value: "50–80 N/mm²" },
      { label: "Mix Design", value: "Project-specific by our lab" },
    ],
    benefits: ["Highest compressive strength grades", "Low permeability and high durability", "Designed by experienced concrete technologist", "Mandatory trial mix testing done", "Full 7-day and 28-day cube results"],
  },
  "custom": {
    title: "Custom Concrete Solutions",
    grades: ["Tailor-made to specification"],
    description: "Bespoke mix designs for project-specific requirements — waterproof, fiber, SCC, pump mixes.",
    longDescription: "Some projects demand concrete that goes beyond standard grades. Our custom concrete solutions are engineered by our technical team to your exact project requirements. From self-compacting concrete (SCC) for congested reinforcement to waterproof concrete for basements, fiber-reinforced concrete for industrial floors, or rapid-hardening mixes for repairs.",
    applications: ["Waterproof basement concrete", "Self-compacting concrete (SCC)", "Fiber-reinforced industrial floors", "Rapid-hardening repair concrete", "Lightweight concrete"],
    specifications: [
      { label: "Mix Design", value: "Project-specific by our engineers" },
      { label: "Special Types", value: "SCC, FRC, WPC, Light, Rapid" },
      { label: "Lead Time", value: "3–5 days for trial mix" },
      { label: "Documentation", value: "Full mix design report provided" },
      { label: "Testing", value: "Trail mixes tested before production" },
      { label: "Support", value: "Technical consultation included" },
    ],
    benefits: ["Custom mix design for any requirement", "Trial mix testing before project", "Technical consultation at no extra charge", "All special admixtures sourced", "Full QC documentation for every pour"],
  },
};

export async function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            <span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {product.title}
            </span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">{product.description}</p>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-[#0F1923] mb-4" style={{ fontFamily: "Syne, serif" }}>Overview</h2>
                <div className="accent-divider" />
                <p className="text-gray-600 leading-relaxed">{product.longDescription}</p>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F1923] mb-4" style={{ fontFamily: "Syne, serif" }}>Applications</h2>
                <ul className="space-y-2">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E87B2C] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-[#0F1923] mb-4" style={{ fontFamily: "Syne, serif" }}>Key Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 bg-[#F5F6F8] rounded-xl p-4 border border-gray-100">
                      <div className="w-2 h-2 bg-[#E87B2C] rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specifications */}
              <div className="bg-[#F5F6F8] rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0F1923] mb-4 text-lg" style={{ fontFamily: "Syne, serif" }}>Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec) => (
                    <div key={spec.label} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{spec.label}</div>
                      <div className="text-sm font-semibold text-[#0F1923]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grades */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-[#0F1923] mb-4" style={{ fontFamily: "Syne, serif" }}>Available Grades</h3>
                <div className="flex flex-wrap gap-2">
                  {product.grades.map((grade) => (
                    <span key={grade} className="text-xs font-bold text-[#1B3A6B] bg-[#1B3A6B]/10 border border-[#1B3A6B]/20 px-3 py-1.5 rounded-lg">
                      {grade}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#1B3A6B] to-[#0F2D55] rounded-2xl p-6 text-center">
                <h3 className="text-white font-bold mb-2" style={{ fontFamily: "Syne, serif" }}>Ready to Order?</h3>
                <p className="text-white/60 text-sm mb-4">Get a quote for {product.title} for your project.</p>
                <Link href="/contact" className="btn-primary w-full justify-center text-sm py-2.5">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+919513636464" className="mt-3 block text-[#E87B2C] text-sm font-semibold hover:text-orange-300 transition-colors">
                  Call: +91 9513636464
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

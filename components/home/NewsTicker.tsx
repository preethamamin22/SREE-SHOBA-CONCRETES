"use client";

const tickerItems = [
  "🏗️ IS 4926:2003 Certified Ready Mix Concrete",
  "⚙️ Fully Automated PLC Batching Plant",
  "🚛 25+ Transit Mixers — On-Time Delivery Guaranteed",
  "📍 Serving All Major Zones of Bengaluru",
  "🔬 In-House Quality Control Laboratory",
  "📞 24/7 Support: +91 9513636464",
  "🏆 500+ m³/Day Production Capacity",
  "✅ Grades Available: M10 to M60",
];

// Duplicate for seamless loop
const allItems = [...tickerItems, ...tickerItems];

export default function NewsTicker() {
  return (
    <div className="bg-[#E87B2C] text-white text-sm font-semibold overflow-hidden py-2.5 relative z-40">
      <div className="flex animate-ticker">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="px-8">{item}</span>
            <span className="text-white/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

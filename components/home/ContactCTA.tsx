"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PhoneCall, MessageSquare, ArrowRight, Download } from "lucide-react";

const actions = [
  {
    icon: ArrowRight,
    title: "Get a Free Quote",
    description: "Tell us about your project and get a detailed quote within 2 hours.",
    cta: "Request Quote",
    href: "/contact",
    gradient: "from-[#E87B2C] to-[#b55215]",
    bg: "rgba(232,123,44,0.12)",
    border: "rgba(232,123,44,0.3)",
  },
  {
    icon: PhoneCall,
    title: "Call Us Now",
    description: "Speak directly with our technical team for immediate assistance.",
    cta: "+91 9513636464",
    href: "tel:+919513636464",
    gradient: "from-[#1B3A6B] to-[#0F2D55]",
    bg: "rgba(27,58,107,0.12)",
    border: "rgba(27,58,107,0.3)",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Now",
    description: "Quick chat on WhatsApp for quotes, inquiries or technical questions.",
    cta: "Start WhatsApp Chat",
    href: "https://wa.me/919513636464?text=Hello%20Sree%20Shoba%20Concretes%2C%20I%20need%20a%20quote.",
    gradient: "from-[#25D366] to-[#1ebe5d]",
    bg: "rgba(37,211,102,0.1)",
    border: "rgba(37,211,102,0.3)",
  },
];

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1F3A 0%, #1B3A6B 60%, #0F2D55 100%)" }}
      ref={ref}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, rgba(232,123,44,0.8) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(27,58,107,1) 0%, transparent 70%)" }}
        animate={{ scale: [1.15, 1, 1.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-badge-dark mx-auto mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
            Start Your Project
          </div>
          <h2 className="section-title-light text-center">
            Ready to Build with the{" "}
            <span>Best Concrete?</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
            Contact Sree Shoba Concretes today. Our team is ready to deliver superior quality concrete for your next project — on time, every time.
          </p>
        </motion.div>

        {/* Action cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {actions.map((action, i) => (
            <motion.a
              key={i}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group block p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] text-center"
              style={{ background: action.bg, borderColor: action.border } as any}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Syne, serif" }}>
                {action.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">
                {action.description}
              </p>
              <div
                className={`inline-flex items-center gap-2 py-2.5 px-5 rounded-lg bg-gradient-to-r ${action.gradient} text-white font-semibold text-sm group-hover:shadow-lg transition-all duration-300`}
                style={{ fontFamily: "Syne, serif" }}
              >
                {action.cta}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Brochure download */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/brochure.pdf"
            download="Sree-Shoba-Concretes-Brochure.pdf"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors border border-white/15 hover:border-white/30 px-5 py-2.5 rounded-lg"
          >
            <Download className="w-4 h-4" />
            Download Company Brochure (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
}

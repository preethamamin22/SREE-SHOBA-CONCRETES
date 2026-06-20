"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";

const slides = [
  {
    image: "https://lh3.googleusercontent.com/pw/AP1GczM1fJ9HaMDMlujgVgH_orAY9Wo99-u4HmgrCmvA-rELGd17voIXwJzF6uElbt2RRciCDkwnKnUkqreMSdfWgEyhUa4WFH61_OeEi0-2FGGYrFDiK3TXUjEEW02H9OLr7CM8-dlj8ES1rqSBofbdf9V8jw=w1600-h720-s-no-gm?authuser=0",
    headline: "WE PROMISE",
    subheadline: "WE DELIVER",
    tagline: "Bengaluru's Most Trusted Ready Mix Concrete Manufacturer",
    description:
      "Premium IS-certified concrete for residential, commercial and infrastructure projects — delivered on time, every time.",
  },
  {
    image: "https://lh3.googleusercontent.com/pw/AP1GczNo5am3IVBg2Iaz-ZQkrbveea1U8xbuzvTVLpOKeyuVmkjOGUAsVbnC62e-bT3_evyParGWPE4yoA0uAQaSEbgFqUi9VrzWz9VgaXAeMKVofl7kYWG6-3tEsfgAm-KcwggdeLYf-9QGTnhHD-n3ZyiaJw=w1600-h720-s-no-gm?authuser=0",
    headline: "STRENGTH IN",
    subheadline: "EVERY POUR",
    tagline: "PLC Automated Batching • Twin-Shaft Mixers • 500+ m³/Day",
    description:
      "State-of-the-art automated plant with precision quality control ensuring consistent grade on every batch.",
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    headline: "BUILT ON",
    subheadline: "QUALITY",
    tagline: "IS 4926:2003 Certified • Grades M10 to M60",
    description:
      "From foundations to high-rises — our expert team delivers the right concrete mix for every structural challenge.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const slide = slides[current];

  return (
    <section className="relative w-full h-[88vh] min-h-[560px] max-h-[820px] overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <div className="absolute inset-0 transition-opacity duration-700" style={{ opacity: isTransitioning ? 0 : 1 }}>
        <Image
          src={slide.image}
          alt="Sree Shoba Concretes Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060f1a]/85 via-[#060f1a]/60 to-[#060f1a]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060f1a]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-20 pb-16 md:pb-32">
        <div className="container-custom w-full">
          <div className="max-w-3xl">
            {/* Slide indicator tag */}
            <div className="inline-flex items-center gap-2 bg-[#E87B2C] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Sree Shoba Concretes — Bengaluru
            </div>

            {/* Headline */}
            <h1
              className="text-white font-black leading-[0.95] mb-5"
              style={{
                fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
                fontFamily: "Syne, Georgia, serif",
                fontWeight: 900,
                letterSpacing: "-0.01em",
                opacity: isTransitioning ? 0 : 1,
                transform: isTransitioning ? "translateY(20px)" : "translateY(0)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              {slide.headline}
              <br />
              <span style={{ color: "#E87B2C" }}>{slide.subheadline}</span>
            </h1>

            {/* Tagline */}
            <p
              className="text-white/80 text-lg font-semibold mb-3 uppercase tracking-wide"
              style={{
                fontFamily: "Syne, serif",
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.5s ease 0.1s",
              }}
            >
              {slide.tagline}
            </p>

            {/* Description */}
            <p
              className="text-white/60 text-base leading-relaxed mb-10 max-w-xl"
              style={{
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.5s ease 0.15s",
              }}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#E87B2C] hover:bg-[#d4651a] text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,123,44,0.5)]"
                style={{ fontFamily: "Syne, serif" }}
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+919513636464"
                className="flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold text-sm uppercase tracking-wider px-7 py-3.5 transition-all duration-200 hover:bg-white/10"
                style={{ fontFamily: "Syne, serif" }}
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-[#E87B2C] border border-white/20 text-white transition-all duration-200 rounded-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-black/40 hover:bg-[#E87B2C] border border-white/20 text-white transition-all duration-200 rounded-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide dots */}
      <div className="absolute bottom-8 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
          >
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === current ? "32px" : "8px",
                height: "8px",
                backgroundColor: i === current ? "#E87B2C" : "rgba(255,255,255,0.4)",
              }}
            />
          </button>
        ))}
      </div>

      {/* Bottom info strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block pb-6">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "500+", label: "m³/Day Capacity" },
              { value: "2000+", label: "Projects Delivered" },
              { value: "25+", label: "Transit Mixers" },
              { value: "IS Certified", label: "IS 4926:2003" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#1B3A6B]/85 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 text-center hover:bg-[#1B3A6B] hover:border-[#E87B2C]/50 transition-all duration-300"
              >
                <div
                  className="text-2xl font-black text-[#E87B2C]"
                  style={{ fontFamily: "Syne, serif", fontWeight: 900 }}
                >
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs uppercase tracking-wider font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Civil Engineer",
    company: "Prestige Group",
    review: "Sree Shoba Concretes has been our trusted RMC partner for 5 years. Consistent quality, excellent slump control and always on-time delivery — even for large pours. Highly recommended!",
    rating: 5,
    project: "IT Park, Whitefield",
    initials: "RK",
    color: "#1B3A6B",
  },
  {
    name: "Anita Sharma",
    role: "Project Director",
    company: "Sobha Limited",
    review: "Their technical team helped us design the perfect mix for our high-rise project. The PLC automated plant ensures every batch is consistent. Our QC team is very satisfied.",
    rating: 5,
    project: "Luxury Apartments, Sarjapur",
    initials: "AS",
    color: "#E87B2C",
  },
  {
    name: "Suresh Naik",
    role: "Site Manager",
    company: "L&T Construction",
    review: "Used Sree Shoba for our flyover project. M40 concrete delivered precisely as per design. Their GPS fleet tracking and prompt customer service is second to none in Bengaluru.",
    rating: 5,
    project: "Flyover, NICE Road",
    initials: "SN",
    color: "#1B3A6B",
  },
  {
    name: "Prakash Reddy",
    role: "Builder",
    company: "Reddy Constructions",
    review: "Exceptional quality concrete and very professional team. They provided complete test reports and QC documentation for every pour. This is the gold standard for RMC in Bangalore!",
    rating: 5,
    project: "Apartment Complex, HSR Layout",
    initials: "PR",
    color: "#E87B2C",
  },
  {
    name: "Mohammed Khalid",
    role: "Infrastructure Engineer",
    company: "BMRCL",
    review: "For metro station works, we needed very strict quality adherence. Sree Shoba delivered M50 concrete with full traceability and zero quality rejections throughout the project.",
    rating: 5,
    project: "Metro Station, Nagawara",
    initials: "MK",
    color: "#1B3A6B",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="section-badge">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />
              Testimonials
            </div>
            <h2 className="section-title">
              Trusted by <span>Top Builders</span>
            </h2>
            <div className="accent-divider" />
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-xl border-2 border-gray-200 hover:border-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-xl border-2 border-gray-200 hover:border-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white text-gray-500 flex items-center justify-center transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-5 -ml-5">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/3 pl-5">
                <div className="bg-[#F5F6F8] rounded-2xl p-7 h-full border border-gray-100 hover:border-[#E87B2C]/25 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 relative">
                  {/* Quote icon */}
                  <div className="absolute top-5 right-5 w-8 h-8 bg-[#E87B2C]/10 rounded-lg flex items-center justify-center">
                    <Quote className="w-4 h-4 text-[#E87B2C]" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, s) => (
                      <Star key={s} className="w-4 h-4 text-[#E87B2C] fill-[#E87B2C]" />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{t.review}&rdquo;
                  </p>

                  <div className="border-t border-gray-200 pt-5 flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}cc)` }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0F1923]" style={{ fontFamily: "Syne, serif" }}>
                        {t.name}
                      </div>
                      <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                      <div className="text-xs text-[#E87B2C] font-medium mt-0.5">{t.project}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

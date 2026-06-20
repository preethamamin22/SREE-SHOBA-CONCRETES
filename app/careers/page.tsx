"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, ArrowRight, Upload, CheckCircle2 } from "lucide-react";

const positions = [
  { title: "Concrete Technologist", dept: "Quality Control", type: "Full-time", location: "Bengaluru", exp: "3–5 years", desc: "Responsible for mix design, QC testing, cube testing, and maintaining QC records for all production batches." },
  { title: "Plant Operator", dept: "Manufacturing", type: "Full-time", location: "Anjanapura, Bengaluru", exp: "2–4 years", desc: "Operate and monitor PLC batching plant, ensure correct batching sequences, maintain batch logs." },
  { title: "Transit Mixer Driver", dept: "Logistics", type: "Full-time", location: "Bengaluru (all zones)", exp: "3+ years", desc: "Drive transit mixer trucks safely and deliver concrete to construction sites on time. Valid HMV license required." },
  { title: "Sales Engineer", dept: "Business Development", type: "Full-time", location: "Bengaluru", exp: "2–4 years", desc: "Generate new business from builders, contractors and developers. Technical knowledge of concrete preferred." },
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  position: z.string().min(1, "Select a position"),
  experience: z.string().min(1, "Enter your experience"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    console.log(data);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Careers</div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Build Your Career<br /><span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>With Us</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">Join Bengaluru&apos;s leading RMC manufacturer and be part of a team building the city&apos;s infrastructure. We offer growth, stability and rewarding work.</p>
        </div>
      </div>

      {/* Open positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-badge mx-auto"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Open Positions</div>
            <h2 className="section-title text-center">Current <span>Openings</span></h2>
            <div className="accent-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {positions.map((pos, i) => (
              <div key={i} className="bg-[#F5F6F8] rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-[#1B3A6B]/20 transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-[#0F1923] text-lg" style={{ fontFamily: "Syne, serif" }}>{pos.title}</h3>
                    <p className="text-[#E87B2C] text-xs font-semibold uppercase tracking-wider">{pos.dept}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#1B3A6B] bg-[#1B3A6B]/10 border border-[#1B3A6B]/20 px-2.5 py-1 rounded-full">{pos.type}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{pos.desc}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />Exp: {pos.exp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Application form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title text-center">Apply <span>Online</span></h2>
              <div className="accent-divider mx-auto" />
              <p className="section-subtitle text-center mx-auto">Fill the form below and our HR team will contact you within 3 business days.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#0F1923] mb-2" style={{ fontFamily: "Syne, serif" }}>Application Submitted!</h3>
                <p className="text-gray-500">Thank you for your interest. Our HR team will reach out within 3 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                    <input {...register("name")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="Your full name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input {...register("phone")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="+91 xxxxxxxxxx" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input {...register("email")} type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="your@email.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Position Applied For *</label>
                    <select {...register("position")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all">
                      <option value="">Select position</option>
                      {positions.map((p) => <option key={p.title} value={p.title}>{p.title}</option>)}
                      <option value="Other">Other / General Application</option>
                    </select>
                    {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Years of Experience *</label>
                    <input {...register("experience")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="e.g., 3 years" />
                    {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience.message}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Cover Message</label>
                  <textarea {...register("message")} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-none" placeholder="Tell us about yourself and why you want to join Sree Shoba Concretes..." />
                </div>
                <div className="bg-[#F5F6F8] rounded-xl p-4 flex items-center gap-3 border border-dashed border-gray-300 cursor-pointer hover:border-[#1B3A6B] transition-colors">
                  <Upload className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Upload Resume (PDF)</p>
                    <p className="text-xs text-gray-400">Email your CV to sreeshobaconcretes@gmail.com</p>
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-3.5">
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

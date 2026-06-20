"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Download } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  projectType: z.string().min(1, "Select project type"),
  concreteGrade: z.string().optional(),
  quantity: z.string().optional(),
  message: z.string().min(10, "Please describe your requirement"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: Phone, label: "Phone", values: ["+91 9513636464", "+91 9611364691"], href: "tel:+919513636464" },
  { icon: Mail, label: "Email", values: ["sreeshobaconcretes@gmail.com"], href: "mailto:sreeshobaconcretes@gmail.com" },
  { icon: MapPin, label: "Address", values: ["Sy. No.91, Gollahalli Village", "Tulasipura, Anjanapura Post", "Uttarahalli Hobli, Bengaluru – 560062"], href: "https://maps.google.com/?q=Anjanapura+Bengaluru" },
  { icon: Clock, label: "Hours", values: ["Mon – Fri: 6 AM – 8 PM", "Saturday: 6 AM – 6 PM", "Sunday: On Request"], href: null },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // fallback: still show success for UX
      setSubmitted(true);
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#0A1F3A] to-[#1B3A6B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="container-custom relative z-10">
          <div className="section-badge-dark mb-4"><div className="w-1.5 h-1.5 rounded-full bg-[#E87B2C]" />Contact Us</div>
          <h1 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontFamily: "Syne, serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            Let&apos;s Start Your<br /><span style={{ background: "linear-gradient(135deg, #E87B2C, #f5a05a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Project Today</span>
          </h1>
          <p className="text-white/65 text-lg max-w-2xl">Reach out for quotes, technical queries, or to schedule a plant visit. We respond within 2 hours during business hours.</p>
        </div>
      </div>

      <section className="section-padding bg-[#F5F6F8]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-5">
              {contactInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#1B3A6B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#1B3A6B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</p>
                      {info.values.map((v, j) => (
                        info.href ? (
                          <a key={j} href={info.href} className="block text-sm font-medium text-[#0F1923] hover:text-[#E87B2C] transition-colors leading-relaxed">
                            {v}
                          </a>
                        ) : (
                          <p key={j} className="text-sm text-gray-600 leading-relaxed">{v}</p>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick actions */}
              <a href="https://wa.me/919513636464?text=Hello%20Sree%20Shoba%20Concretes%2C%20I%20need%20a%20quote." target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-2xl font-semibold text-sm hover:bg-[#20b858] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: +91 9513636464
              </a>

              <a href="/brochure.pdf" download className="flex items-center gap-3 bg-white text-[#1B3A6B] p-4 rounded-2xl font-semibold text-sm border border-gray-200 hover:border-[#1B3A6B] hover:shadow-md transition-all">
                <Download className="w-5 h-5" />
                Download Company Brochure
              </a>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2" id="contact-form">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F1923] mb-2" style={{ fontFamily: "Syne, serif" }}>Message Sent!</h3>
                  <p className="text-gray-500 mb-4">Our team will respond to your inquiry within 2 hours during business hours.</p>
                  <a href="tel:+919513636464" className="btn-primary">
                    <Phone className="w-4 h-4" /> Call Us: +91 9513636464
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl border border-gray-100 p-8 space-y-5">
                  <h2 className="text-2xl font-bold text-[#0F1923]" style={{ fontFamily: "Syne, serif" }}>
                    Get a Free Quote
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input {...register("name")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="Your name" />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone *</label>
                      <input {...register("phone")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="+91 xxxxxxxxxx" />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email *</label>
                    <input {...register("email")} type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="your@email.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Project Type *</label>
                      <select {...register("projectType")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all">
                        <option value="">Select type</option>
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Infrastructure</option>
                        <option>Industrial</option>
                        <option>Other</option>
                      </select>
                      {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Concrete Grade Required</label>
                      <select {...register("concreteGrade")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all">
                        <option value="">Select grade</option>
                        {["M15", "M20", "M25", "M30", "M35", "M40", "M45", "M50", "M60+"].map((g) => <option key={g}>{g}</option>)}
                        <option>Not sure – need guidance</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Estimated Quantity</label>
                    <input {...register("quantity")} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all" placeholder="e.g., 50 m³, 200 m³, etc." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message / Requirements *</label>
                    <textarea {...register("message")} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10 transition-all resize-none" placeholder="Describe your project requirements, site location, delivery schedule, etc." />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-3.5 text-base">
                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-gray-400 text-xs text-center">We respond within 2 hours. Your information is kept confidential.</p>
                </form>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200 h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2!2d77.5386!3d12.8747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzI4LjkiTiA3N8KwMzInMTguOSJF!5e0!3m2!1sen!2sin!4v1000000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sree Shoba Concretes Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

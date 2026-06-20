"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Instagram, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality Control", href: "/quality" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const productLinks = [
  { label: "Ready Mix Concrete", href: "/products/ready-mix" },
  { label: "Residential Concrete", href: "/products/residential" },
  { label: "Commercial Concrete", href: "/products/commercial" },
  { label: "Infrastructure Concrete", href: "/products/infrastructure" },
  { label: "High Strength Concrete", href: "/products/high-strength" },
  { label: "Custom Mix Solutions", href: "/products/custom" },
];

const capabilityLinks = [
  { label: "Operations", href: "/manufacturing" },
  { label: "Quality Assurance", href: "/quality" },
  { label: "Fleet & Delivery", href: "/about" },
  { label: "Safety Standards", href: "/about" },
  { label: "Technical Support", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* CTA Strip */}
      <div className="bg-[#E87B2C] py-4">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-bold text-white text-sm uppercase tracking-wide" style={{ fontFamily: "Syne, serif" }}>
            Ready to start your project? Get a free quote today!
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white text-[#E87B2C] hover:bg-gray-100 px-6 py-2.5 font-bold text-sm uppercase tracking-wide transition-colors"
            style={{ fontFamily: "Syne, serif" }}
          >
            Request Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-24">

          {/* Col 1: Address (wider to accommodate large logo) */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Sree Shoba Concretes"
                width={240}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <div className="orange-divider" style={{ margin: "0 0 1.25rem" }} />

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E87B2C] flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Sy. No. 91, Gollahalli Village, Tulasipura, Anjanapura Post,
                  Uttarahalli Hobli, Bengaluru – 560062
                </p>
              </div>
              <a href="tel:+919513636464" className="flex items-center gap-3 text-white/60 hover:text-[#E87B2C] text-sm transition-colors">
                <Phone className="w-4 h-4 text-[#E87B2C] flex-shrink-0" />
                +91 9513636464
              </a>
              <a href="tel:+919611364691" className="flex items-center gap-3 text-white/60 hover:text-[#E87B2C] text-sm transition-colors">
                <Phone className="w-4 h-4 text-[#E87B2C] flex-shrink-0" />
                +91 9611364691
              </a>
              <a href="mailto:sreeshobaconcretes@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-[#E87B2C] text-sm transition-colors break-all">
                <Mail className="w-4 h-4 text-[#E87B2C] flex-shrink-0" />
                sreeshobaconcretes@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/20 hover:border-[#E87B2C] hover:bg-[#E87B2C] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "Syne, serif" }}>
              Quick Links
            </h4>
            <div className="orange-divider" style={{ margin: "0 0 1.25rem" }} />
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/55 hover:text-[#E87B2C] text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Products & Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "Syne, serif" }}>
              Products &amp; Services
            </h4>
            <div className="orange-divider" style={{ margin: "0 0 1.25rem" }} />
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/55 hover:text-[#E87B2C] text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2" style={{ fontFamily: "Syne, serif" }}>
              Capabilities
            </h4>
            <div className="orange-divider" style={{ margin: "0 0 1.25rem" }} />
            <ul className="space-y-2.5 mb-8">
              {capabilityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/55 hover:text-[#E87B2C] text-sm transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Working hours box */}
            <div className="border border-white/10 bg-white/5 p-4">
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "Syne, serif" }}>
                Working Hours
              </h5>
              {[
                { day: "Mon – Fri", time: "6:00 AM – 8:00 PM" },
                { day: "Saturday", time: "6:00 AM – 6:00 PM" },
                { day: "Sunday", time: "On Request" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between text-xs mb-1.5">
                  <span className="text-white/50">{h.day}</span>
                  <span className="text-[#E87B2C] font-medium">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Sree Shoba Concretes. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/35">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white/60 transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="/sitemap.xml" className="hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

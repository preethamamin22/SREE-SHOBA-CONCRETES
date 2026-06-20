import type { Metadata } from "next";
import NewsTicker from "@/components/home/NewsTicker";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import StatsSection from "@/components/home/StatsSection";
import ClientsSection from "@/components/home/ClientsSection";
import ProductsSection from "@/components/home/ProductsSection";
import CapabilitiesSection from "@/components/home/CapabilitiesSection";
import LocationsSection from "@/components/home/LocationsSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Sree Shoba Concretes | Premium Ready Mix Concrete – Bengaluru",
  description:
    "Sree Shoba Concretes is Bengaluru's premier Ready Mix Concrete (RMC) manufacturer. PLC automated plant, 500+ m³/day capacity, IS-certified quality. Serving residential, commercial & infrastructure projects. Call +91 9513636464.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. News Ticker — orange scrolling strip */}
      <NewsTicker />

      {/* 2. Hero Slider — full-width with auto-rotating slides */}
      <HeroSection />

      {/* 3. About / Welcome — text left, plant visual right */}
      <AboutSection />

      {/* 4. Stats Counter — dark gray bg, 4 black cards */}
      <StatsSection />

      {/* 5. Clients — clean marquee with RDC heading style */}
      <ClientsSection />

      {/* 6. Featured Products — black bg, image cards carousel */}
      <ProductsSection />

      {/* 7. Our Capabilities — light gray, 5 image+text cards */}
      <CapabilitiesSection />

      {/* 8. Service Locations — brand blue, 5-zone grid */}
      <LocationsSection />

      {/* 9. Contact CTA */}
      <ContactCTA />
    </>
  );
}

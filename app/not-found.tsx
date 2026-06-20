import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F5F6F8]">
      <div className="text-center px-6">
        <div
          className="text-8xl font-extrabold text-[#1B3A6B] mb-4 leading-none"
          style={{ fontFamily: "Syne, serif", fontWeight: 800, opacity: 0.15 }}
        >
          404
        </div>
        <h1 className="text-3xl font-bold text-[#0F1923] mb-3" style={{ fontFamily: "Syne, serif" }}>
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Homepage
          </Link>
          <Link href="/contact" className="btn-outline-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

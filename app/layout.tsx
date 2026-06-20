import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sreeshobaconcretes.com"),
  title: {
    default: "Sree Shoba Concretes | Premium Ready Mix Concrete – Bengaluru",
    template: "%s | Sree Shoba Concretes",
  },
  description:
    "Sree Shoba Concretes is a leading Ready Mix Concrete (RMC) manufacturer in Bengaluru. Premium quality concrete for residential, commercial & infrastructure projects. Call +91 9513636464.",
  keywords: [
    "ready mix concrete",
    "RMC plant Bengaluru",
    "concrete supplier Bangalore",
    "high strength concrete",
    "construction concrete",
    "Sree Shoba Concretes",
    "concrete manufacturing Bangalore",
  ],
  authors: [{ name: "Sree Shoba Concretes" }],
  creator: "Sree Shoba Concretes",
  publisher: "Sree Shoba Concretes",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sreeshobaconcretes.com",
    siteName: "Sree Shoba Concretes",
    title: "Sree Shoba Concretes | Premium Ready Mix Concrete – Bengaluru",
    description:
      "Leading RMC manufacturer in Bengaluru. Delivering strength, quality & reliability for every project.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sree Shoba Concretes – Premium Ready Mix Concrete",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Shoba Concretes | Premium Ready Mix Concrete",
    description:
      "Leading RMC manufacturer in Bengaluru delivering quality concrete for residential, commercial & infrastructure projects.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sreeshobaconcretes.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sreeshobaconcretes.com/#organization",
  name: "Sree Shoba Concretes",
  url: "https://sreeshobaconcretes.com",
  logo: "https://sreeshobaconcretes.com/logo.svg",
  description:
    "Premium Ready Mix Concrete manufacturer and supplier in Bengaluru, India. Serving residential, commercial and infrastructure projects.",
  telephone: ["+91-9513636464", "+91-9611364691"],
  email: "sreeshobaconcretes@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sy. No.91, Gollahalli Village, Tulasipura, Anjanapura Post",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560062",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.8747,
    longitude: 77.5386,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
    ],
    opens: "06:00",
    closes: "20:00",
  },
  sameAs: [
    "https://wa.me/919513636464",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics - replace GA_MEASUREMENT_ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

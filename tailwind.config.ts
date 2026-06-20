import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#e8eef7",
          100: "#c5d5eb",
          200: "#9fb9de",
          300: "#749dd0",
          400: "#5486c6",
          500: "#2f6fbb",
          600: "#2560a8",
          700: "#1B4D8E",
          800: "#163d72",
          900: "#0F2D55",
          950: "#0A1F3A",
          DEFAULT: "#1B3A6B",
        },
        accent: {
          50:  "#fef5eb",
          100: "#fde5c8",
          200: "#fbd0a0",
          300: "#f8b56e",
          400: "#f59d45",
          500: "#E87B2C",
          600: "#d4651a",
          700: "#b55215",
          800: "#924113",
          900: "#783613",
          DEFAULT: "#E87B2C",
        },
        concrete: {
          50:  "#f5f5f5",
          100: "#ebebeb",
          200: "#d6d6d6",
          300: "#b8b8b8",
          400: "#9a9a9a",
          500: "#8A8D8F",
          600: "#6e7072",
          700: "#575a5c",
          800: "#3f4244",
          900: "#2a2d2f",
          DEFAULT: "#8A8D8F",
        },
        dark: {
          50:  "#f2f4f6",
          100: "#e3e7eb",
          200: "#c2cad3",
          300: "#96a4b0",
          400: "#637585",
          500: "#475a6b",
          600: "#344555",
          700: "#253342",
          800: "#182431",
          900: "#0F1923",
          DEFAULT: "#0F1923",
        },
      },
      fontFamily: {
        heading: ["var(--font-syne)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee2": "marquee2 30s linear infinite",
        "whatsapp-pulse": "whatsapp-pulse 2s ease-in-out infinite",
        "counter": "counter 2s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(40px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee2": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "whatsapp-pulse": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)" },
        },
        "counter": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(27, 58, 107, 0.35)",
        "glow-accent": "0 0 40px rgba(232, 123, 44, 0.35)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255,255,255,0.1)",
        "premium": "0 20px 60px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 12px 48px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0F2D55 0%, #1B3A6B 50%, #2560a8 100%)",
        "gradient-accent": "linear-gradient(135deg, #b55215 0%, #E87B2C 50%, #f59d45 100%)",
        "gradient-hero": "linear-gradient(135deg, rgba(10,31,58,0.92) 0%, rgba(27,58,107,0.85) 50%, rgba(232,123,44,0.3) 100%)",
        "gradient-dark": "linear-gradient(135deg, #0F1923 0%, #182431 100%)",
        "gradient-section": "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        "shimmer-accent": "linear-gradient(90deg, transparent 0%, rgba(232,123,44,0.3) 50%, transparent 100%)",
        "mesh-bg": "radial-gradient(at 40% 20%, rgba(27,58,107,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(232,123,44,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(27,58,107,0.06) 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;

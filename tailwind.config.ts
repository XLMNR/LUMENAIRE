import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.9)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        twinkle: "twinkle var(--twk-dur,3s) ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

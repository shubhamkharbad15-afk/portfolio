/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#090A0D",
          surface: "#0F1117",
          card: "#141720",
          cardHover: "#1A1F2C",
          border: "#1F2636",
          text: "#F1F5F9",
          muted: "#94A3B8"
        },
        light: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          cardHover: "#F1F5F9",
          border: "#E2E8F0",
          text: "#0F172A",
          muted: "#64748B"
        },
        accent: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.12)",
        "card-dark": "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      }
    },
  },
  plugins: [],
};

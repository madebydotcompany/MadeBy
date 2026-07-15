import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { canvas: "hsl(var(--canvas))", ink: "hsl(var(--ink))", muted: "hsl(var(--muted))", line: "hsl(var(--line))", accent: "hsl(var(--accent))" },
      fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-sans)", "sans-serif"] },
      boxShadow: { soft: "0 18px 50px -24px hsl(var(--ink) / 0.28)", card: "0 10px 30px -18px hsl(var(--ink) / .22)" },
      borderRadius: { "4xl": "2rem" }
    }
  },
  plugins: []
} satisfies Config;

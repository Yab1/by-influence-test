import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-blue)",
        lightGray: "var(--light-gray)",
        red: "var(--red)",
        darkGray: "var(--dark-gray)",
        offWhite: "var(--off-white)",
        tealGreen: "var(--teal-green)",
        deepNavy: "var(--deep-navy)",
        royalBlue: "var(--royal-blue)",
        warmGray: "var(--warm-gray)",
        softWhite: "var(--soft-white)",
        charcoal: "var(--charcoal)",
        graphite: "var(--graphite)",
      },
      backgroundImage: {
        banner: "url('/assets/images/banner.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

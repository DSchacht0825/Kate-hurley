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
        navy: {
          dark: '#1B3B3E',
          DEFAULT: '#1B3B3E',
        },
        gold: {
          light: '#F5E6D3',
          DEFAULT: '#D4A574',
          dark: '#C39161',
        },
        peach: {
          light: '#FFE5D9',
          DEFAULT: '#FFCDB2',
          dark: '#FFB48F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

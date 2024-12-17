import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#232425',
        main: '#ffcd00'
      },
      textColor: {
        primary: '#232425',
        contrast: '#fff'
      }
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // <--- ADD THIS LINE REQUIRED
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./apps/web/src/**/*.{js,ts,jsx,tsx,mdx}" // Ensure your paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
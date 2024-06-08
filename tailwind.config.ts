import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: '#F4F6FC',
        darkGray: '#434142',
        blue: '#5d5dd6',
        mediumGray: '#4f4e4e',
        buttonText: '#4d4b4c',
        gradientFrom: '#6060d8',
        gradientTo: '#9298f0',
      },
    },
  },
  plugins: [],
};
export default config;

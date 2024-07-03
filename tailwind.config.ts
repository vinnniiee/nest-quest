import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary': {
          100: '#47453B',
          200: '#3F3D34',
          300: '#37342D',
          400: '#2F2C25',
          500: '#2A271E', // Base color
          600: '#26231B',
          700: '#211E17',
          800: '#1C1913',
          900: '#17140F',
        },
        'secondary': {
          100: '#E1C55A',
          200: '#DBC04F',
          300: '#D5A724', // Base color
          400: '#C49720',
          500: '#B38C1D',
          600: '#A3801A',
          700: '#8F6E17',
          800: '#7C5C14',
          900: '#694B11',
        },
      },
    },
  },
  plugins: [],
};
export default config;

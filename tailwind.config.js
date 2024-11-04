/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {     '@tailwindcss/aspect-ratio': {content: ["'self'"]},
  fontFamily: {
    'cain': ['Cairo', 'sans-serif'],
  }
  },
};
export const plugins = [];




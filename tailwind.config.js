/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {     '@tailwindcss/aspect-ratio': {content: ["'self'"]},
  },
};
export const plugins = [];



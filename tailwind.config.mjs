const { addDynamicIconSelectors } = require('@iconify/tailwind')


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'tarawera': '#0a454d',
        'cerulean': '#0da8bc',
        'roman': '#e05f5f',
        'customgray': '#c5c5c5',
        'gray1': '#696969',
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), addDynamicIconSelectors()],
};

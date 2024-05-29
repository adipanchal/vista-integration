/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        hover: 'var(--hover-color)',
        accent: 'var(--accent-color)',
        textcolor: 'var(--text-color)',
      },
    },
  },
  plugins: [],
  // tailwind.config.js


}


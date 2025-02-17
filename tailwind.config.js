/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      rotate: {
        '-225': '-225deg', // Custom rotation for -225 degrees
      },
      screens: {
        'custom-1130': '1130px',
      },
    },
  },
  plugins: [],
}

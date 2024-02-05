/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cremis: ["cremis", "sans-serif"],
        cremisSig: ["cremisSig", "sans-serif"],
      },
      colors: {
        black2: "#161616"
      }
    },
  },
  plugins: [],
}




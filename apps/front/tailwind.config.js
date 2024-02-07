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
        black2: "#161616",
        earth: {
          1: "#F0EFEB",
          2: "#EDDCD2",
          3: "#DDBEA9",
          4: "#CB997E",
          5: "#BF8673",
          6: "#8C523A",
          7: "#613522"
        }
      }
    },
  },
  plugins: [],
}




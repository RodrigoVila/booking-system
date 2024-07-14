/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cremiss: ["cremiss", "sans-serif"],
        "cremiss-sig": ["cremiss-sig", "sans-serif"],
        "roboto-bold": ["roboto-bold", "sans-serif"],
        "roboto-light": ["roboto-light", "sans-serif"],
        "roboto-regular": ["roboto-regular", "sans-serif"],
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
          7: "#613522",
          8: "rgba(97,53,34,0.9)"
        }
      }
    },
  },
  plugins: [],
}




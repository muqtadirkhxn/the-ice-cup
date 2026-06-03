/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        vanilla: "#FFF8F1",
        chocolate: "#4A2C2A",
        strawberry: "#F2A1B3",
        mint: "#6BCFC1",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};

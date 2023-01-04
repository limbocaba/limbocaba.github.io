/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        Kanit: "kanit",
        cursive: "cursive",
        lobster: "lobster",
        passions: "passions"
      },
    },
  },
  plugins: [],
}

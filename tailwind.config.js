/** @type {import('tailwindcss').Config} */
module.exports = {
  output: {
    filename: "main.[contenthash].js",
    clean: true,  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
      }
    },
  },
  plugins: [],
}
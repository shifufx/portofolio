/** @type {import('tailwindcss').Config} */
module.exports = {
  // cache: false,
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
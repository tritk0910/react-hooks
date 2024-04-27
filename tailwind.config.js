/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        akira: ['"Akira Expanded"', "sans-serif"],
        main: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        "home-background": "url('/img/background.png')",
      },
    },
  },
  plugins: [],
};

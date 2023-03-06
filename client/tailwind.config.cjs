/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        login: '50rem',
        '5': '5rem',
        '10': '10rem',
        '15': '15rem',
        '20': '20rem',
        '25': '25rem',
        '30': '30rem',
        '35': '35rem'
      },
      fontSize: {

      }
    },
    colors: {
      bg: '#F6F5F7',
      cta: "#E4002B",
      link: '#0063AB',
      white: "#ffffff",
      error: "#fc8181",
    },
  },
  plugins: [],
};

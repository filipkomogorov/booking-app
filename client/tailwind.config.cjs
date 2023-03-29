/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        sizeSmall: '8px',
        sizeMedium: '16px',
        sizeLarge: '24px',
        sizeXl: '32px',
        sizeXxl: '40px',
        sizeDoubleXl: '64px',
        '20': '20rem',
        '22': '22rem',
      },
      width: {
        login: '50rem',
        desktop: '72rem'
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        login: '50rem',
        desktop: '72rem'
      },
      spacing: {
        sizeSmall: '8px',
        sizeMedium: '16px',
        sizeLarge: '24px',
        sizeXl: '32px',
        sizeXxl: '40px',
        sizeDoubleXl: '64px',
      },
      fontSize: {
        small: '1,4rem',
        medium: '1.6rem',
        large: '1.8rem',
        xl: '2rem',
        xxl: '2.2rem'
      }
    },
    colors: {
      bg: '#F6F5F7',
      cta: "#E4002B",
      link: '#0063AB',
      black: '#000000',
      white: "#ffffff",
      error: "#fc8181",
    },
    
  },
  plugins: [],
};

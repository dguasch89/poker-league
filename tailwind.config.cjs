/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        standings: '15% 1fr 15% 15% 15%',
      },
    },
  },
  plugins: [],
};

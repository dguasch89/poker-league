/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        standings: '10% 1fr 8% 10% 30%',
        standings6: '10% 1fr 8% 10% 15% 15%',
        seasonDetail: '12% repeat(10, 1fr)',
        schedule: '1fr 4fr 1fr 4fr ',
      },
    },
  },
  plugins: [],
};

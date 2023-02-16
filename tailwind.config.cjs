/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Complex site-specific column configuration
        standings: "10% 1fr 15% 15% 15%",
        schedule: "1fr 4fr 1fr 5fr ",
      },
    },
  },
  plugins: [],
};

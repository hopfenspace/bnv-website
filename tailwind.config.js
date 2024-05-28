/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};

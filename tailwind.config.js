/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#2B1AEA",
        "light-blue": "#E6E5FF40",
        "darker-blue": "#DFF0FF",
        "blue-grey": "#DBE4EE",
        "basic-blue": "#2495FD",
      },
      margin: {
        "4xl": "6.25rem",
      },
      width: {
        "4xl": "27rem",
      },
    },
  },
  plugins: [],
};

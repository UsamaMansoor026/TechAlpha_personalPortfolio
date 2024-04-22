/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my: {
          fontColor: "#333",
        },
      },
      fontFamily: {
        Neue: ['"Bebas Neue"'],
        Poppins: ['"Poppins", sans-serif'],
      },
    },
  },
  plugins: [],
};

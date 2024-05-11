/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./formkit.theme.mjs", "./src/**/*.{js,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Colors
        purple: "hsl(259, 100%, 65%)",
        lightred: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offwhite: "hsl(0, 0%, 94%)",
        lightgrey: "hsl(0, 0%, 86%)",
        smokeygrey: "hsl(0, 1%, 44%)",
        offblack: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

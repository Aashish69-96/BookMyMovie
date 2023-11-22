/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "theme-pink": "#FC5C65",
        "theme-light-pink":"#FF747C",
        "theme-blue": "#3498DB",
        "theme-light-blue": "#3BA6ED",
        "theme-white": "#F5F5F5",
        "theme-light-white": "#E6E6E6",
        "theme-dark": "#07030F",
        "theme-light-dark": "#100C1A",
        "theme-light-dark-2": "#1C1825",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   lightMode: "light",
  theme: {
    extend: {
      fontFamily: {
        "new-mono": ['Monoton', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

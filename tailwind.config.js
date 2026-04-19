/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#6d6aff',
          light: '#8b89ff',
          dark: '#5855ff',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      animation: {
        'fade-up':  'fadeUp 0.6s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'float':    'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

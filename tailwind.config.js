/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pure-black': '#000000',
        'charcoal': '#0a0a0a',
        'graphite': '#1a1a1a',
        'gunmetal': '#2a2a2a',
        'dark-chrome': '#3a3a3a',
        'titanium': '#4a4a4a',
        'silver': '#c0c0c0',
        'blood-red': '#8b0000',
        'blood-red-light': '#a00000',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'sweep': 'sweep 8s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

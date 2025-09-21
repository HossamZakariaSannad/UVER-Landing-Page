// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-indigo': {
          600: '#4f46e5',
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        'xl': "16px",
      },
      animation: {
        'gentle-float': 'gentleFloat 3s ease-in-out infinite',
      },
      keyframes: {
        gentleFloat: {
          '0%': { transform: 'rotate(-2deg) scale(1)' },
          '50%': { transform: 'rotate(2deg) scale(1.05)' },
          '100%': { transform: 'rotate(-2deg) scale(1)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
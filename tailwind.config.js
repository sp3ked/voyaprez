/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        }
      },
      boxShadow: {
        'glow': '0 0 30px rgba(168,85,247,0.15)',
      },
    },
  },
  plugins: [],
} 
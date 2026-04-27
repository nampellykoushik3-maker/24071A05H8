/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          dark: '#0f172a',
          gold: '#d4af37',
          light: '#f8fafc'
        }
      }
    },
  },
  plugins: [],
}

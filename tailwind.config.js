/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          deep: '#030303',
          surface: '#1a1a1a',
          white: '#ffffff',
          charcoal: '#404040',
          slate: '#767d88',
          midslate: '#7d848e',
          muted: '#a7a7a7',
          border: '#27272a',
          silver: '#c9ccd1',
          gold: '#d4a853',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

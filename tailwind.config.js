/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0f0f',
        'bg-secondary': '#1a1a1a',
        'bg-card': '#1f1f1f',
        'text-secondary': '#a3a3a3',
        accent: '#f59e0b',
        'accent-hover': '#d97706',
      },
    },
  },
  plugins: [],
}

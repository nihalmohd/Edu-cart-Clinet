/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '350px', // Change the default width from 640px to 480px
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      
    },
  },
  plugins: [],
}


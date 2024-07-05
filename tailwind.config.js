/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  // Agregar codigo para crear nuestras propias clases
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('/bg.jpg')"
      }
    },
  },
  plugins: [],
}


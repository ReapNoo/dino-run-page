/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBorder: '#38a3a5',       // Borde del dino y botones
        blueAccent: '#38a3a5',       // Relleno principal
        darkAccent: '#60324e',       // Púas del dino / títulos
        warmTan: '#e6d6ab',          // Panza del dino
        tundraBackground: '#d0e6ec', // Fondo de secciones / blanco azulado
        mountainBrown: '#714b3e',    // Color de montañas / marrón
      }
    },
  },
  plugins: [],
}
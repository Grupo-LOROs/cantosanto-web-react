/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cs: {
          // BASE: Gama Forestal Profunda
          dark: "#0F2620",      // Verde Noche (Fondos oscuros y textos principales)
          primary: "#1E453E",   // Verde Bosque (Botones, secciones fuertes)
          secondary: "#4C7065", // Verde Musgo (Iconos y detalles)
          
          // ACENTOS: Sustituimos el café por un Verde Jade/Salvia
          accent: "#7D9C88",    // ANTES: Café (#A67B5B) -> AHORA: Verde Salvia
          
          // NEUTROS: Piedra y Arena
          beige: "#F2F0E9",     // Blanco Hueso (Fondos claros)
          surface: "#E6E4DD",   // Beige Piedra (Tarjetas)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'], 
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
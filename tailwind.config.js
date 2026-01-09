/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta del diseño (según especificación del equipo)
        cs: {
          // Fondos
          beige: "#E4D7C6",
          dark: "#1B0B09",
          brown: "#3E1E11",

          // Acentos / tipografía
          accent: "#B54A17",

          // Utilidades
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        raleway: ["Raleway", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        inter: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        // Defaults
        serif: ["Cinzel", "serif"],
        sans: ["Raleway", "Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        caps: "0.08em",
        capsWide: "0.12em",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.18)",
      }
    },
  },
  plugins: [],
}

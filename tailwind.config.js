/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette aproximada del diseño (puedes ajustar con los valores exactos del Figma)
        cs: {
          beige: "#E8DDCF",
          beige2: "#F0E6DA",
          terracotta: "#B14A1F",
          terracotta2: "#9C3E18",
          brown: "#3A2419",
          brown2: "#2A1A12",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        caps: "0.08em",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.18)",
      }
    },
  },
  plugins: [],
}

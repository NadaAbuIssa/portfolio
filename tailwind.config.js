/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
      colors: {
        bkg: {
          1: "hsl(var(--color-bkg1) / <alpha-value>)",
          2: "hsl(var(--color-bkg2) / <alpha-value>)",
        },        
        text: "hsl(var(--color-text) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
      },
      fontFamily:{
        noto: ['Noto Serif', 'serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      

    },
  },
}

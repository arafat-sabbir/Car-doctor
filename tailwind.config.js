/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      clipPath: {
        polygon: 'polygon(19% 82%, 84% 82%, 99% 100%, 0% 100%)',
      },
    },
  },
  plugins: [require("daisyui")],
}


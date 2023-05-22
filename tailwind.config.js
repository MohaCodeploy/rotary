/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url(../public/background/Sfondo_1.png)"
      },
    },
  },
  plugins: [],
}


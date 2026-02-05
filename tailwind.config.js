/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        accent: "var(--accent)",
        card: "var(--card)"
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif']
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // Keep this for a potential light-mode toggle
  content: [
    "./src/**/*.{html,js}",
    // etc.
  ],
  theme: {
    extend: {
      // Add your custom terminal colors here
      colors: {
        'command-bg': '#0D1117', // A deep, off-black background
        'command-text': '#C9D1D9', // A light, readable gray for text
        'command-green': '#39FF14', // A vibrant, classic terminal green
      },
      // Add a monospaced font family
      fontFamily: {
        'mono': ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}
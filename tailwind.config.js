/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],

  presets: [keepPreset],
  darkMode: 'class',
  theme: {

    extend: {

      fontFamily: {
        'input-sans': ['Input Sans', 'sans-serif'],
        'plex-sans': ['Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


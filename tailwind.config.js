/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'primary': {
        DEFAULT: '#EEC584',
        'dark': '#e6a351'
      },
      'secondary': {
        'light': '#252836',
        DEFAULT: '#0C0820',
      },
      'isabelline': '#F2EFEA',
      'light': '#E5EAEF',
      'gray': colors.gray,
      'rose': colors.rose,
      'slate': colors.slate
    }
  },
  plugins: [],
}


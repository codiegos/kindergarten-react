/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Bubblegum Sans', 'cursive']
    },
    extend: {
      backgroundImage: {
        wave: 'url(./src/assets/backgrounds/wave.svg)',
        'wave-variant': 'url(./src/assets/backgrounds/wave-variant.svg)'
      },
      colors: {
        primary: '#AFFF9A',
        secondary: '#FCBB4D',
        tertiary: '#E6E451'
      }

    }
  },
  plugins: []
}

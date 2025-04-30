/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'marker': ['"Permanent Marker"', 'cursive'],
          'quicksand': ['Quicksand', 'sans-serif'],
        },
        colors: {
          purple: {
            600: '#6c4899',
            800: '#4c2a7f',
          }
        }
      },
    },
    plugins: [],
  }
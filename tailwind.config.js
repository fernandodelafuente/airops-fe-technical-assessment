/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        sidebar: '240px'
      },
      borderColor: {
        border: '#E6E6E6',
        divider: '#ECEDEF'
      },
      colors: {
        brand: {
          purple: '#ADABFF'
        },
        text: {
          primary: '#09090B',
          secondary: '#565656',
          tertiary: '#808593',
          muted: '#868686'
        }
      },
      boxShadow: {
        'shadow-xs': '0px 1px 2px 0px #1018280D',
        'shadow-sm': '0px 1px 3px 0px #1018281A',
      }
    },
  },
  plugins: [],
}


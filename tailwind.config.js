/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'gin-fizz': {
          '50': '#fffae1',
          '100': '#fff6c0',
          '200': '#ffeb85',
          '300': '#ffd73f',
          '400': '#ffc00b',
          '500': '#f4a600',
          '600': '#d37d00',
          '700': '#a85600',
          '800': '#8a4309',
          '900': '#75370e',
          '950': '#451b03',
        },
        'tuatara': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
        'accent-blue': {
          '50': '#eef8ff',
          '100': '#d9edff',
          '200': '#bce1ff',
          '300': '#8ecfff',
          '400': '#59b3ff',
          '500': '#3d98ff',
          '600': '#1b72f5',
          '700': '#145ce1',
          '800': '#174ab6',
          '900': '#19428f',
          '950': '#142957'
        },
      }
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*')
    }
  ]
}

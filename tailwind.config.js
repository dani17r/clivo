/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 't-',
  theme: {
    extend: {
      colors: {
        primary: '#dcf30d',
        secondary: '#bfaf03',
        third: '#867b01',
        accent: '#01b233',

        'dark-page': '#292929',

        positive: '#21ba45',
        negative: '#c10015',
        info: '#31ccec',
        warning: '#f2c037',

        'dark-deep': '#0a0a0a',
        'gray-dark': '#262626',
        'gray-neutral': '#87888c',
        'gray-light': '#dfe1e5',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors:{
        green:{
          300: '#88FF88',
        },
        dark: {
          500: '#2f2f2f',
        },
      },
    },
  },
  plugins: [],
}

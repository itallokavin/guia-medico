/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        verdeUnimed: '#00985c',
        laranjaUnimed: '#F37920',
      },
      fontFamily: {
        'UnimedSans' : 'UnimedSans',
        'UnimedSlab' : 'UnimedSlab'
      },
    },
  },
  plugins: [],
}

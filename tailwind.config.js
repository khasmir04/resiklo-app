module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#45BF55',
          DEFAULT: '#45BF55',
          dark: '#044d29',
        },
        secondary: {
          light: '#97ED8A',
          DEFAULT: '#97ED8A',
          dark: '#97ED8A',
        },
        tertiary: {
          light: '#85d7ff',
          DEFAULT: '#16B039',
          dark: '#009eeb',
        },
        black: {
          light: '#00261C',
          DEFAULT: '#1C1C1E',
          dark: '#00261C',
        },
        gray: {
          light: '#8E8E93',
          DEFAULT: '#8E8E93',
          dark: '#8E8E93',
        }
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

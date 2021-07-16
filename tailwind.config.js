module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#45BF55",
          DEFAULT: "#45BF55",
          dark: "#044d29",
        },
        secondary: {
          light: "#16B039",
          DEFAULT: "#97ED8A",
          dark: "#97ED8A",
        },
        tertiary: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        black: {
          light: "#00261C",
          DEFAULT: "#00261C",
          dark: "#00261C",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

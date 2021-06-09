module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-banner": "url('/src/images/bg.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

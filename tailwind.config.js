/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "{js,cjs,mjs,ts,cts,mts}",
  ],
  theme: {
    extend: {},
    fontSize: {
      logo: "52px",
    },
    colors: {
      rose: "rgb(170, 100, 100)",
      emerald: "#7fffd4",
      teal: "#008080",
      yellow: "#ffff00",
      gray: "#808080",
    },
  },
  plugins: [],
};

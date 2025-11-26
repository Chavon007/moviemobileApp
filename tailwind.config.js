/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6f94c4ff",
        accent: "#151312",
        light: {
          100: "#7f7891ff",
          200: "#495371ff",
          300: "#4e5256ff",
        },
        dark: {
          100: "#221d54ff",
          200: "#3e30daff",
        },
        accent: "#5a3da4ff",
      },
    },
  },
  plugins: [],
};

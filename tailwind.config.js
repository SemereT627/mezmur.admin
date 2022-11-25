const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#805535",
        secondary: "#D1C0B0",
        links: "#abb0be",
        success: {
          main: "#70C274",
        },
        warning: {
          main: "#FFE141",
        },
        error: {
          main: "#FF3434",
        },
        info: {
          main: "#2889CA",
        },
      },
      fontFamily: {
        sans: ["Poppins-Regular", ...defaultTheme.fontFamily.sans],
        serif: ["Poppins-Regular", ...defaultTheme.fontFamily.serif],
        mono: ["Poppins-Regular", ...defaultTheme.fontFamily.mono],
        "poppins-bold": ["Poppins-Bold", ...defaultTheme.fontFamily.sans],
        "poppins-semibold": [
          "Poppins-SemiBold",
          ...defaultTheme.fontFamily.sans,
        ],
        "poppins-medium": ["Poppins-Medium", ...defaultTheme.fontFamily.sans],
        "poppins-regular": ["Poppins-Regular", ...defaultTheme.fontFamily.sans],
        "poppins-light": ["Poppins-Light", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

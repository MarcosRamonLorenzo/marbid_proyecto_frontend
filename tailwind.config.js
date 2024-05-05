const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        first: "#5271FF",
        second: "#F26D3D",
        third: "#F25EA3",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      theme: {
        extend: {
          colors: {
            first: "#5271FF",
            second: "#F26D3D",
            third: "#F25EA3",
          },
        },
      },
    }),
  ],
};

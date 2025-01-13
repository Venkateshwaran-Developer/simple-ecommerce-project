const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs:'650px',
      sm: '960px',
      md: '1100px',
    },
    extend: {
      spacing: {
        '120': '29rem',
      },
    },
  },
  plugins: [],
});

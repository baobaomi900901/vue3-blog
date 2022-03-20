// Example `tailwind.config.js` file

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,md,html}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0042f6",
      },
    },
    fontFamily: {
      "yk": "YouSheBiaoTiHei"
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

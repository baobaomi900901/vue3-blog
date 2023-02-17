// Example `tailwind.config.js` file

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,md,html}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0042f6",
      },
      height: {
        '192': '48rem'
      }
    },
    fontFamily: {
      "yk": "YouSheBiaoTiHei"
    },
    screens: {
      'mobile': '390px',
      // => @media (min-width: 375px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

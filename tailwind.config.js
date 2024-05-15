/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'infinite-scroll-mobile': 'infinite-scroll-mobile 15s linear infinite',
        'infinite-rotate':'infinite-rotate 5s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-scroll-mobile': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-rotate':{
          from:{transform:'rotate(0deg)'},
          to:{transform:'rotate(360deg)'},
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "glass":"#121525",
        "color-1":"#4c5cf0",
        "color-2":"#ad4fa1",
        "color-3":"#aeafb0",
        "color-1-dark":"#4c5cf0",
      }
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      wide: '1px'
    },
    extend: {
      animation: {
        'small-bounce-middle': 'small-bounce-middle 2.25s linear infinite',
        'small-bounce-left': 'small-bounce-left 2.25s linear infinite',
        'small-bounce-right': 'small-bounce-right 2.25s linear infinite',
        'small-bounce-middle-rotate': 'small-bounce-middle-rotate 2.25s linear infinite',
        'small-bounce-left-rotate': 'small-bounce-left-rotate 2.25s linear infinite',
        'small-bounce-right-rotate': 'small-bounce-right-rotate 2.25s linear infinite',
      },
      keyframes: {
        'small-bounce-middle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },
        'small-bounce-left': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },
        'small-bounce-right': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },

        'small-bounce-middle-rotate': {
          '0%, 100%': { transform: 'translateY(0) rotate(6deg)' },
          '50%': { transform: 'translateY(-2%) rotate(6deg)' },
        },
        'small-bounce-left-rotate': {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-2%) rotate(-2deg)' },
        },
        'small-bounce-right-rotate': {
          '0%, 100%': { transform: 'translateY(0) rotate(-3deg)' },
          '50%': { transform: 'translateY(-2%) rotate(-3deg)' },
        },
      },
      colors: {}
    }
  },
  plugins: [
    require("flowbite/plugin"),
    // require("tailwindcss-animate")
  ],
};
export default config;

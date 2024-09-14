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
        'small-bounce': 'small-bounce 2s linear infinite',
      },
      keyframes: {
        'small-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },
        colors: {}
      }
    }
  },
  plugins: [
    require("flowbite/plugin"),
    // require("tailwindcss-animate")
  ],
};
export default config;

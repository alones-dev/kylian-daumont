import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#090F16",
        transparent: "transparent",
        white: "#F5F5F5",
        yellow: "#FFD34E",
        lightBlue: "#69A3C2",
        blue: "#399ED4",
        darkBlue: "#235B8E",
      },
      fontFamily: {
        satoshiBold: ["satoshiBold", "sans-serif"],
        satoshiMedium: ["satoshiMedium", "sans-serif"],
        satoshiRegular: ["satoshiRegular", "sans-serif"],
      },
      animation: {
        'moving': 'moving 3s infinite linear',
      },
      keyframes: {
        moving: {
          "50%": {transform: "translateY(-25%)"},
        }
      },
    },
  },
  plugins: [],
} satisfies Config;

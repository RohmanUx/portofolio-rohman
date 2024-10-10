// Importing only once from the correct source
import daisyui from "daisyui"; 
// import { nextui } from "@nextui-org/system";
import { nextui } from "@nextui-org/theme";
/** @type {import('tailwindcss').Config} */
export default {
  plugins: [nextui()], // Using the single instance of nextui
  plugins: [daisyui],

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-1": "#0097a7", // A deeper teal for primary accents
        "clr-2": "#00c853", // A vibrant green for highlights
        "clr-3": "#ffeb3b", // A bright yellow for emphasis
        "clr-4": "#d500f9", // A rich purple for contrasting elements
        "clr-5": "#00c2ff",
        "clr-6": "#33ff8c",
        "clr-7": "#ffc640",
        "clr-8": "#e54cff",
      },
      keyframes: {
        "aurora-gradient": {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        "marquee-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "aurora-gradient": "aurora-gradient 2s ease-in-out infinite",
        "marquee-right": "marquee-right 14s linear infinite",
      },
    },
    //...
  },
};

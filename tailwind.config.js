/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html" ,"./src/**/*.{js, ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'clr-1': '#0097a7', // A deeper teal for primary accents
        'clr-2': '#00c853', // A vibrant green for highlights
        'clr-3': '#ffeb3b', // A bright yellow for emphasis
        'clr-4': '#d500f9', // A rich purple for contrasting elements
      },
                  keyframes: {
        'aurora-gradient': {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% ',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
      animation: {
        'aurora-gradient': 'aurora-gradient 22s ease-in-out infinite',
      },
    },

    }, 
  plugins: [], 
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-stroke': {
            'text-shadow': '1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000, 1px 1px 0 #000',
          },
          '.text-stroke-lg': {
            'text-shadow': '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000',
          },
          '.text-stroke-sm': {
            'text-shadow': '0.5px 0.5px 0 #000, -0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],  
};

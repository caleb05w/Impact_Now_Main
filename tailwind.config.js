/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      borderStyle: ['responsive', 'hover'],
      borderWidth: ['responsive', 'hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      borderStyle: ['responsive','hover'],

      backgroundImage: {
        'prayer': "url('assets/bg.png')",
       }
      },

      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '800px',
        // => @media (min-width: 1024px) { ... }
  
        'lg': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  },
  plugins: [],
}


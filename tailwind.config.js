/** @type {import('tailwindcss').Config} */
export default {
  content: [    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent':  "#3abbd4",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
    'hero': '1023px',

        'desktop': '1280px',
        
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}


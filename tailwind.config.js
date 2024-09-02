/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'lp': '1100px',
      // => @media (min-width: 640px) { ... } // laptop

      'lpnav': '1100px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'tb': '850px',
      // => @media (min-width: 900px) { ... }


    },
    boxShadow: {
      'text-white': ' 0px 0px 0px white',
    },
  },
  plugins: [],
}

// Example of how to use :- 
{/* <div class="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-4">
  <div class="bg-blue-500">Item 1</div>
  <div class="bg-blue-500">Item 2</div>
  <div class="bg-blue-500">Item 3</div>
  <div class="bg-blue-500">Item 4</div>
</div> */}

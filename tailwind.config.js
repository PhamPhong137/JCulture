/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/input.css","./node_modules/flowbite/index.html","./node_modules/flowbite/input.css"],
  darkMode:'class',
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')
],
}

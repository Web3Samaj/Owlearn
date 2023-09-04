/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        shadow: ['ShadowHand'],
        meri: ['Merienda', 'cursive'],
        reeni: ['Reenie Beanie', 'cursive'],
        kabl: ['Kablammo', 'cursive'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

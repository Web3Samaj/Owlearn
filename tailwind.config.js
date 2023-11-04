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
        reeni: ['Reenie Beanie', 'cursive'],
        kabl: ['Kablammo', 'cursive'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        slide: 'slide 20s linear infinite',
        blob: 'blob 4s infinite',
        howery: 'howery 15s infinite',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0px)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        blob: {
          '0%': {
            transform: ' translate(0px , 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(10px , -10px) scale(1.05)',
          },
          '66%': {
            transform: ' translate(-5px , 10px) scale(0.9)',
          },
          '100%': {
            transform: ' translate(0px , 0px) scale(1)',
          },
        },
        howery: {
          '0%': {
            transform: ' translate(0px , 0px) ',
          },
          '33%': {
            transform: 'translate(10px , -12px) ',
          },
          '66%': {
            transform: ' translate(-10px , -15px) ',
          },
          '100%': {
            transform: ' translate(0px , 0px) ',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

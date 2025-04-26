/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: 'var(--clr-text)',
        cta:{
          text: 'var(--clr-cta-text)',
          hoverbg: 'var(--clr-cta-hover-background)',
        },
        headings: 'var(--clr-headings)',
        footer: 'var(--clr-text-footer)',
        footerBg: 'var(--clr-footer-background)',
        bodycopy: 'var(--clr-body-copy)',

        Verylightred: 'var(--clr-very-light-red)',
        lightred: 'var(--clr-light-red)',
        verydarkgrayblue: 'var(--clr-very-dark-gray-blue)',
        verydarkdesaturatedblue: 'var(--clr-very-dark-desaturated-blue)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      borderRadius:{
        'footer': 'var(--radius-footer)',
      },
      backgroundImage: {
        'cta': 'var(--gradient-img)',
      },
    },
  },
  plugins: [],
}


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
        bodycopy: 'var(--clr-body-copy)',
        Verylightred: 'var(--clr-very-light-red)',
        lightred: 'var(--clr-light-red)',
      },
      backgroundColor: {
        darkdesaturatedblue: 'var(--very-dark-desaturated-blue)',
        darkgrayblue: 'var(--very-dark-gray-blue)',
        footerBg: 'var(--clr-footer-background)',
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
        'section2': 'var(--gradient-img-sectiontwo)'
      },
    },
  },
  plugins: [],
}


const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1.5rem',
          borderRadius: '.25rem',
          border: '1px solid currentColor',
          fontWeight: '500',
          display: 'inline-flex',
          gap: '.5rem',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.balance-text': {
          textWrap: 'balance',
        },
      });
    }),
  ],
};

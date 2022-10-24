// /** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      yellow: { DEFAULT: '#FDED5A', 500: '#FFE870', 900: '#FFD84F' },
      gray: {
        400: '#828282',
        500: '#6B7280',
      },
    },
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        titilliumBold: 'TitilliumWeb-Bold',
        titilliumSemiBold: 'TitilliumWeb-SemiBold',
        titillium: 'TitilliumWeb-Regular',
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1.4rem',
          },
        ],
        sm: [
          '0.8rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.75rem',
          },
        ],
        medium: [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            fontWeight: '600',
          },
        ],
      },
    },
  },
  plugins: [],
};

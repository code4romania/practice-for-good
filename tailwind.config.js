// /** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '300px',
      ...defaultTheme.screens,
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      yellow: { DEFAULT: '#FDED5A', 500: '#FFE870', 900: '#FFD84F' },
      gray: {
        100: '#F8F8F8',
        200: '#E5E7EB',
        500: '#6B7280',
      },
      purple: {
        DEFAULT: '#6543C8',
        100: '#F7F7F7',
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
        small: [
          '1rem',
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          }],
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
        big: [
          '2.5rem',
          {
            lineHeight: '3.8125rem',
            fontWeight: '700',
          },
        ],
      },
      backgroundImage: {
        shape: 'url(./assets/images/shape-background.svg)',
      },
    },
  },
  plugins: [],
};

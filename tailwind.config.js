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
      yellow: {
        DEFAULT: '#FFF649',
        50: '#FFFDE7',
        100: '#FFF9C4',
        200: '#FFF59D',
        300: '#FFF176',
        400: '#FFEE58',
        500: '#FFEB3B',
        600: '#FDD835',
        700: '#FBC02D',
        800: '#F9A825',
        900: '#F57F17',
      },
      gray: {
        100: '#F7F7F7',
        200: '#E5E7EB',
        400: '#828282',
        500: '#6B7280',
      },
      purple: {
        DEFAULT: '#6543C8',
      },
    },
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        titilliumBold: 'TitilliumWeb-Bold',
        titilliumSemiBold: 'TitilliumWeb-SemiBold',
        titillium: 'TitilliumWeb-Regular',
      },
      boxShadow: {
        card: '0px 4px 10px rgba(0, 0, 0, 0.1)',
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
      backgroundImage: {
        shape: 'url(./assets/images/shape-background.svg)',
      },
    },
  },
  plugins: [],
};

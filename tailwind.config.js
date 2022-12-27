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
      blue: '#0000FA',
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
        1000: '#FFEB4F',
      },
      gray: {
        50: '#F1F1F1',
        100: '#F7F7F7',
        200: '#E5E7EB',
        300: '#E6EDF4',
        400: '#828282',
        500: '#6B7280',
        700: '#374159',
        900: '#151926',
        1000: '#7F88A7',
      },
      purple: {
        DEFAULT: '#6543C8',
      },
      red: {
        50: '#FEF2F2',
        100: '#FEE2E2',
        200: '#FECACA',
        300: '#FCA5A5',
        400: '#F87171',
        500: '#EF4444',
        600: '#DC2626',
        700: '#B91C1C',
        800: '#991B1B',
        900: '#7F1D1D',
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
        input: 'inset 0 0 0 1px #6543c8',
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
        search: 'url(./assets/images/background-search-image.png)',
      },
    },
  },
  plugins: [],
};

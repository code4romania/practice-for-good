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
        100: '#EFF0F3',
        300: '#E5E7EB',
        400: '#828282',
        500: '#6B7280',
        700: '#374159',
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
      padding: {
        '9px': '9px',
        '13px': '13px',
      },
    },
    fontSize: {
      small: [
        '1rem',
        {
          lineLeight: '1.75rem',
          fontWeight: '400',
        },
      ],
      medium: [
        '1.25rem',
        {
          lineLeight: '1.5rem',
          fontWeight: '600',
        },
      ],
      big: [
        '2.5rem',
        {
          lineLeight: '3.8125rem',
          fontWeight: '700',
        },
      ],
    },
  },
  plugins: [],
};

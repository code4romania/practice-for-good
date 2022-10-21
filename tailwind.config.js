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
        100: '#F8F8F8',
        200: '#E5E7EB',
        500: '#6B7280',
      },
      purple: {
        DEFAULT: '#6543C8',
      }
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
    },
  },
  plugins: [],
}

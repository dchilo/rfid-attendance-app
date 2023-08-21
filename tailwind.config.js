/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'custom-a': {
          '0%, 16.667%, 100%': { opacity: '1' },
          '33.333%, 83.333%': { opacity: '0' },
        },
        'custom-a2': {
          '0%, 100%': { opacity: '0' },
          '33.333%, 50%': { opacity: '1' },
          '16.667%, 66.667%': { opacity: '0' },
        },
        'custom-a3': {
          '0%, 50%, 100%': { opacity: '0' },
          '66.667%, 83.333%': { opacity: '1' },
        },
      },
      animation: {
        'custom-a': 'custom-a 8s infinite',
        'custom-a2': 'custom-a2 8s infinite',
        'custom-a3': 'custom-a3 8s infinite',
      },
    },
  },
  plugins: [],
  variants: {}
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        wool: {
          ink: '#1c1917',
          paper: '#fafaf9',
          mist: '#f5f5f4',
          line: '#d6d3d1',
          amber: '#d97706',
          deep: '#92400e',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(1.25rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'chip-in': {
          '0%': { opacity: '0', transform: 'translateY(0.5rem) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'reveal': {
          '0%': { opacity: '0', transform: 'scale(1.04)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'chip-in': 'chip-in 0.5s ease-out both',
        'reveal': 'reveal 1s ease-out both',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F9F7F2',
          soft: '#FDFCFB',
        },
        ink: {
          DEFAULT: '#1A2E2A',
          muted: '#3D4F4A',
          faint: '#5A6B66',
        },
        forest: {
          DEFAULT: '#2D4F43',
          deep: '#243F36',
        },
        terracotta: {
          DEFAULT: '#B05C3D',
          soft: '#C4785A',
        },
        beat: {
          1: '#B05C3D',
          2: '#8B5E3C',
          3: '#5C6B3A',
          4: '#2D4F43',
          5: '#3D5A6B',
        },
        line: '#E4DFD6',
        chip: '#F3F0EA',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 46, 42, 0.04), 0 8px 24px rgba(26, 46, 42, 0.06)',
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

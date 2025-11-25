/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Simpsons Yellow - the iconic skin tone
        'simpsons-yellow': '#FFD90F',
        'simpsons-yellow-light': '#FFEC8B',
        'simpsons-yellow-dark': '#E5C200',
        // Springfield Sky Blue
        'simpsons-sky': '#70D1FE',
        'simpsons-sky-light': '#B8E6FF',
        'simpsons-sky-dark': '#4FC3F7',
        // Marge's Hair Blue
        'simpsons-blue': '#2E7D9C',
        'simpsons-blue-dark': '#1A5276',
        // Nuclear Plant Green
        'simpsons-green': '#7AB800',
        // Bart's Orange
        'simpsons-orange': '#FF8C00',
        // Duff Red
        'simpsons-red': '#CC0000',
        // Brown accents
        'simpsons-brown': '#8B4513',
        // Keep legacy names mapped for compatibility
        'wa-blue': '#2E7D9C',
        'wa-teal': '#70D1FE',
        'wa-navy': '#1A5276',
        'wa-gold': '#FFD90F',
      },
      fontFamily: {
        'comic': ['"Comic Neue"', 'cursive', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.4s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'wiggle': 'wiggle 0.3s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      borderRadius: {
        'cartoon': '1rem',
      },
      boxShadow: {
        'cartoon': '4px 4px 0px 0px rgba(0,0,0,0.2)',
        'cartoon-lg': '6px 6px 0px 0px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
}

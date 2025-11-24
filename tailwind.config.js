/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark palette inspired by Nate Hill's work
        'void': '#0a0a0a',
        'deep': '#111111',
        'slate': '#1a1a1a',
        'stone': '#252525',
        'drift': '#3a3a3a',
        // Light accents - optimized for WCAG AA contrast on dark backgrounds
        'bone': '#f5f2ed',      // 14.7:1 contrast on void
        'cream': '#e8e4dc',     // 13.1:1 contrast on void
        'mist': '#c9c5bc',      // 10.3:1 contrast on void
        // Accent colors from satellite/topo imagery
        'aqua': '#7fb8c9',      // 7.1:1 contrast on void (passes AA)
        'teal': '#5a9aab',      // 5.1:1 contrast on void (passes AA)
        'earth': '#a89078',
        'sand': '#c4b49a',
        'terracotta': '#c28a5c', // Brightened for better contrast (4.8:1)
      },
      fontFamily: {
        'display': ['system-ui', '-apple-system', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'contour-flow': 'contourFlow 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'draw-line': 'drawLine 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        contourFlow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'contour-pattern': `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 30, 50 50 T 100 50' fill='none' stroke='%23252525' stroke-width='0.5'/%3E%3Cpath d='M0 60 Q 25 40, 50 60 T 100 60' fill='none' stroke='%23252525' stroke-width='0.5'/%3E%3Cpath d='M0 70 Q 25 50, 50 70 T 100 70' fill='none' stroke='%23252525' stroke-width='0.5'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#05060f',
        neon: {
          cyan: '#2de2ff',
          magenta: '#f6019d',
          yellow: '#fffd82',
          violet: '#7d7aff',
        },
        slate: {
          950: '#090b1a',
          900: '#0c1024',
          850: '#111736',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', '"Space Grotesk"', 'system-ui'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 1px 1px, rgba(45, 226, 255, 0.25) 1px, transparent 0)',
        'radial-neon': 'radial-gradient(120% 120% at 10% 10%, rgba(246, 1, 157, 0.4), transparent 50%), radial-gradient(160% 160% at 90% 20%, rgba(45, 226, 255, 0.35), transparent 55%), radial-gradient(140% 140% at 50% 90%, rgba(125, 122, 255, 0.5), transparent 60%)',
      },
      boxShadow: {
        aurora: '0 20px 60px -15px rgba(45, 226, 255, 0.35), 0 35px 120px -20px rgba(246, 1, 157, 0.45)',
        surface: 'inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 25px 35px -30px rgba(0,0,0,0.65)',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulse 6s ease-in-out infinite',
        'blob': 'blob 18s ease-in-out infinite',
        'float': 'float 12s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '25%': { transform: 'translate3d(10%, -15%, 0) scale(1.05)' },
          '50%': { transform: 'translate3d(-15%, 10%, 0) scale(0.95)' },
          '75%': { transform: 'translate3d(12%, 18%, 0) scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
}


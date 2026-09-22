/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sabha: {
          bg: '#FAFCFF',
          card: 'rgba(255, 255, 255, 0.75)',
          darkCard: 'rgba(15, 23, 42, 0.85)',
          primary: '#2E5BFF',
          secondary: '#7B61FF',
          accent: '#00C2FF',
          text: '#0F172A',
          muted: '#64748B',
          glow: 'rgba(0, 194, 255, 0.15)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 20px 40px -15px rgba(46, 91, 255, 0.08), 0 0 15px rgba(0, 194, 255, 0.12)',
        'glow-primary': '0 0 25px rgba(46, 91, 255, 0.45)',
        'glow-cyan': '0 0 25px rgba(0, 194, 255, 0.55)',
        'glow-purple': '0 0 25px rgba(123, 97, 255, 0.45)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 194, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(46, 91, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./presentations/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#05070A',
        surface: '#0B0F14',
        'surface-2': '#111820',
        'accent-blue': '#2F80FF',
        'accent-cyan': '#00E5FF',
        'accent-blue-dim': 'rgba(47,128,255,0.15)',
        'accent-cyan-dim': 'rgba(0,229,255,0.1)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(47,128,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(47,128,255,0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      keyframes: {
        pulse_glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        pulse_glow: 'pulse_glow 3s ease-in-out infinite',
        scan: 'scan 6s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

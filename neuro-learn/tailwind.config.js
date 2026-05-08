/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme color system
        'dark': {
          'bg-primary': '#0B1020',
          'bg-secondary': '#111827',
          'card-bg': '#151C2F',
          'surface': '#1B2540',
          'border': '#253150',
          'hover': '#1F2D45',
        },
        'text': {
          'primary': '#F3F4F6',
          'secondary': '#9CA3AF',
          'tertiary': '#6B7280',
        },
        'accent': {
          'blue': '#4F8CFF',
          'blue-light': '#6FA3FF',
          'blue-dark': '#3A6FCC',
          'purple': '#7C5CFF',
          'purple-light': '#9B7FFF',
          'purple-dark': '#5A3ECC',
          'cyan': '#22D3EE',
          'cyan-light': '#4FE4FF',
          'cyan-dark': '#00BAD8',
        },
      },
      backgroundImage: {
        'gradient-dark': 'radial-gradient(circle at top left, rgba(79,140,255,0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(124,92,255,0.1), transparent 35%)',
        'gradient-dark-light': 'radial-gradient(circle at top right, rgba(34,211,238,0.08), transparent 50%), radial-gradient(circle at bottom left, rgba(79,140,255,0.08), transparent 50%)',
        'gradient-card-hover': 'radial-gradient(circle at 0% 0%, rgba(79,140,255,0.1), transparent 40%), radial-gradient(circle at 100% 100%, rgba(124,92,255,0.08), transparent 40%)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0,0,0,0.35)',
        'card-hover': '0 20px 50px rgba(79,140,255,0.15)',
        'glow-blue': '0 0 30px rgba(79,140,255,0.2)',
        'glow-purple': '0 0 30px rgba(124,92,255,0.15)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'hero': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'gutter': '24px',
        'section': '96px',
        'card-gap': '32px',
      },
      borderRadius: {
        'card': '24px',
        'button': '16px',
        'input': '16px',
        'modal': '28px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(79,140,255,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(79,140,255,0.5)' },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#4F8CFF',
          secondary: '#7C5CFF',
          accent: '#22D3EE',
          neutral: '#111827',
          'base-100': '#0B1020',
          'base-200': '#111827',
          'base-300': '#151C2F',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
      },
    ],
  },
  plugins: [],
};

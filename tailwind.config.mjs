import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F2841',
          light: '#1A3A5C',
          dark: '#0A1E33',
        },
        accent: {
          DEFAULT: '#C9A961',
          light: '#D4B97A',
          dark: '#A88940',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          muted: '#C9C2B0',
        },
        border: {
          DEFAULT: 'rgba(245, 241, 232, 0.15)',
          light: 'rgba(26, 39, 66, 0.12)',
        },
        'surface-elev': 'rgba(245, 241, 232, 0.06)',
        // Seções claras (cream off-white)
        'light-bg': '#FAF7EF',
        'light-surface': '#F0EBE0',
        'on-light': '#1A2742',
        'on-light-muted': '#5A6478',
        // Legacy aliases — map para cream para manter componentes existentes
        'text-primary': '#F5F1E8',
        'text-secondary': '#C9C2B0',
        surface: '#1A3A5C',
        secondary: '#0A1E33',
        success: '#4ADE80',
        error: '#DC2626',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Questrial', 'system-ui', 'sans-serif'],
        sans: ['Questrial', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '68ch',
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
      borderRadius: {
        card: '16px',
        button: '8px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(0, 0, 0, 0.20), 0 1px 3px 0 rgba(0, 0, 0, 0.10)',
        'card-hover': '0 16px 48px 0 rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(201, 169, 97, 0.20)',
        nav: '0 1px 0 0 rgba(245, 241, 232, 0.12)',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [typography],
};

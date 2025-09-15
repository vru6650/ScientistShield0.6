import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        inter: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(0,0,0,0.05)',
        elevated: '0 8px 30px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      colors: {
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-foreground': 'hsl(var(--secondary-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        surface: 'hsl(var(--surface) / <alpha-value>)',
        text: 'hsl(var(--text) / <alpha-value>)',
        neutral: 'hsl(var(--neutral) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        danger: 'hsl(var(--danger) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

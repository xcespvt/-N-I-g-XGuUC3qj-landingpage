
import type {Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        body: ['var(--font-pt-sans)'],
        headline: ['var(--font-poppins)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary))' },
          '50%': { boxShadow: '0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))' },
        },
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
            from: { transform: 'translateX(-50%)' },
            to: { transform: 'translateX(0)' },
        },
        'border-glow-translate': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        'border-glow-scale': {
          '0%, 100%': { transform: 'scale(0.5) translateX(-50%)', opacity: '0.5' },
          '50%': { transform: 'scale(1.5) translateX(-50%)', opacity: '1' },
        },
        'star-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        'star-shine': {
          '0%, 100%': { transform: 'scale(0.8) translate(-50%, -50%)', opacity: '0.3' },
          '50%': { transform: 'scale(1.5) translate(-50%, -50%)', opacity: '1' },
        },
        'blob-bounce': {
          '0%': {
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
          },
          '25%': {
            transform: 'translate(-100%, -100%) translate3d(100%, 0, 0)',
          },
          '50%': {
            transform: 'translate(-100%, -100%) translate3d(100%, 100%, 0)',
          },
          '75%': {
            transform: 'translate(-100%, -100%) translate3d(0, 100%, 0)',
          },
          '100%': {
            transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        glow: 'glow 2s ease-in-out infinite',
        'marquee-left': 'marquee-left 25s linear infinite',
        'marquee-right': 'marquee-right 25s linear infinite',
        'border-glow-translate': 'border-glow-translate 10s ease-in-out infinite alternate',
        'border-glow-scale': 'border-glow-scale 10s ease-in-out infinite alternate',
        'star-rotate': 'star-rotate 14s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite alternate',
        'star-shine': 'star-shine 14s ease-in-out infinite alternate',
        'blob-bounce': 'blob-bounce 5s infinite ease',
      },
      textShadow: {
        glow: '0 0 4px hsl(var(--primary))',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function({ theme, addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: theme('textShadow.glow'),
        },
      }
      addUtilities(newUtilities)
    })
  ],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Wide geometric grotesque, answering the letterforms in the logo.
        display: ['Archivo', 'ui-sans-serif', 'sans-serif'],
        // Serif body copy: the service and regulatory prose runs long.
        body: ['Newsreader', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: 'hsl(var(--brand))',
          deep: 'hsl(var(--brand-deep))',
          lift: 'hsl(var(--brand-lift))',
          tint: 'hsl(var(--brand-tint))',
        },
        copper: {
          DEFAULT: 'hsl(var(--copper))',
          deep: 'hsl(var(--copper-deep))',
          lift: 'hsl(var(--copper-lift))',
        },
        ink: 'hsl(var(--ink))',
        paper: 'hsl(var(--paper))',
        rule: 'hsl(var(--rule))',
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
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontSize: {
        display: ['clamp(2.25rem, 5.5vw, 4rem)', { lineHeight: '1.02' }],
        title: ['clamp(1.875rem, 3.2vw, 2.75rem)', { lineHeight: '1.1' }],
      },
      boxShadow: {
        // Brand-tinted rather than neutral black, so cards sit in the palette.
        card: '0 1px 2px hsl(var(--brand) / 0.06), 0 8px 24px -12px hsl(var(--brand) / 0.18)',
        lift: '0 2px 4px hsl(var(--brand) / 0.08), 0 18px 40px -16px hsl(var(--brand) / 0.28)',
      },
      animation: {
        rise: 'rise 0.75s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        sweep: 'sweep 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

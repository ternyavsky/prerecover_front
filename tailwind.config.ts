import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        screens: {
            'not_found': { 'max': '576px' },
            'mobile': { 'max': '1023px' },
            'desktop': { 'min': '1023px' },
            'tablet': { 'min': '600px', 'max': '1023px' },
            'small_laptop': { 'min': '1024px', 'max': '1439px' },
            'laptop': { 'min': '1440px', 'max': '1919px' },
            'pc': { 'min': '1920px' },
        },
        fontFamily: {
            sans: ['var(--font-montserrat)']
        },
        colors: {
            'white': {
                DEFAULT: '#FFFFFF',
                'background': '#F5F8FC',
            },
            'dark': '#262626',
            'grey': {
                DEFAULT: '#B1B2B4',
                100: '#F2F4F5',
                200: '#E9EAEB',
                300: '#DFE0E1',
                400: '#D0D1D2',
                500: '#B1B2B4',
                600: '#97999B',
                700: '#7D7F82',
                800: '#646668',
                900: '#3C3D3E'
            },
            'blue': {
                DEFAULT: '#0064FA',
                100: '#EBF3FF'
            },
            'red': {
                400: '#D64657'
            }
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "skeleton-loading": {
                    '0%, 100%': { 'transform': '0.5' },
                    '50%': { 'transform': '1' }
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

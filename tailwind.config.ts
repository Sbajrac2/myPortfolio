
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'manga': ['Bangers', 'system-ui', 'sans-serif'],
				'code': ['Fira Code', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				panel: 'hsl(var(--panel))',
				'panel-border': 'hsl(var(--panel-border))',
				terminal: {
					bg: 'hsl(var(--terminal-bg))',
					text: 'hsl(var(--terminal-text))',
					accent: 'hsl(var(--terminal-accent))',
				},
				manga: {
					primary: 'hsl(var(--manga-primary))',
					secondary: 'hsl(var(--manga-secondary))',
					accent: 'hsl(var(--manga-accent))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-out': {
					'0%': { transform: 'translateY(0)', opacity: '1' },
					'100%': { transform: 'translateY(-20px)', opacity: '0' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'panel-flip': {
					'0%': { transform: 'rotateY(90deg)', opacity: '0' },
					'100%': { transform: 'rotateY(0)', opacity: '1' }
				},
				'matrix-rain': {
					'0%': { top: '-10%', opacity: '1' },
					'100%': { top: '100%', opacity: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 12px 2px var(--terminal-accent)' },
					'50%': { boxShadow: '0 0 18px 4px var(--terminal-accent)' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				},
				'rotate-in': {
					'0%': { transform: 'rotate(-5deg) scale(0.9)', opacity: '0' },
					'100%': { transform: 'rotate(0) scale(1)', opacity: '1' }
				},
				'floating': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out forwards',
				'fade-out': 'fade-out 0.4s ease-out forwards',
				'slide-in': 'slide-in 0.4s ease-out forwards',
				'slide-out': 'slide-out 0.4s ease-out forwards',
				'scale-in': 'scale-in 0.4s ease-out forwards',
				'panel-flip': 'panel-flip 0.5s ease-out forwards',
				'matrix-rain': 'matrix-rain 2.5s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'blink': 'blink 1s ease-in-out infinite',
				'rotate-in': 'rotate-in 0.6s ease-out forwards',
				'floating': 'floating 3s ease-in-out infinite'
			},
			backgroundImage: {
				'manga-pattern': "url('/patterns/manga-pattern.svg')",
				'grid-pattern': "radial-gradient(rgba(var(--panel-border), 0.1) 1px, transparent 0)",
				'terminal-gradient': 'linear-gradient(180deg, var(--terminal-bg), rgba(var(--terminal-bg), 0.8))',
				'panel-gradient': 'linear-gradient(to right, rgba(var(--panel), 0.7), rgba(var(--panel), 0.4))',
			},
			backdropFilter: {
				'manga': 'blur(8px) saturate(1.2)',
			},
			boxShadow: {
				'manga': '0 4px 20px -2px rgba(0, 0, 0, 0.2), 0 2px 6px -1px rgba(0, 0, 0, 0.1)',
				'panel': '0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
				'terminal': '0 0 15px rgba(var(--terminal-accent), 0.3)',
				'inner-light': 'inset 0 1px 3px rgba(255, 255, 255, 0.2)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

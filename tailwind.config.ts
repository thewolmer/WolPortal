import type { Config } from 'tailwindcss';
const config = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			fontFamily(utils: any) {
				return {
					geist: ['var(--font-geist)'],
					mono: ['var(--font-geist-mono)'],
				};
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},

			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			typography: (theme: any) => ({
				DEFAULT: {
					css: {
						color: theme('colors.foreground'),
						h1: { color: theme('colors.primary') },
						h2: { color: theme('colors.primary') },
						h3: { color: theme('colors.primary') },
						h4: { color: theme('colors.primary') },
						h5: { color: theme('colors.primary') },
						h6: { color: theme('colors.primary') },
						a: {
							color: theme('colors.primary.DEFAULT'),
							'&:hover': {
								color: theme('colors.foreground'),
							},
						},
						code: {
							// color: theme('colors.foreground'),
							backgroundColor: theme('colors.card.DEFAULT'),
							padding: '2px 4px',
							borderRadius: '4px',
							border: '0.1px solid',
							fontWeight: '500',
						},
						hr: {
							color: theme('colors.border'),
						},
						'pre code': {
							backgroundColor: theme('colors.card'),
							// color: theme('colors.foreground'),
							borderRadius: '6px',
							padding: '8px',
							overflowX: 'auto',
						},
						pre: {
							backgroundColor: theme('colors.card.DEFAULT'),
							// color: theme('colors.card.foreground'),
							borderRadius: '6px',
							padding: '16px',
							overflowX: 'auto',
						},
						strong: { color: theme('colors.primary'), fontWeight: '900' },
					},
				},
			}),
		},
	},
	plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;

export default config;

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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Seattle ProWash Ultra Simple Brand Colors */
				'seattle-blue': 'hsl(var(--seattle-blue))',
				'seattle-orange': 'hsl(var(--seattle-orange))',
				'text-charcoal': 'hsl(var(--text-charcoal))',
				
				/* Legacy Brand Colors (mapped to new system) */
				'brand-blue': 'hsl(var(--brand-blue))',
				'brand-blue-light': 'hsl(var(--brand-blue-light))', 
				'brand-navy': 'hsl(var(--brand-navy))',
				'brand-orange': 'hsl(var(--brand-orange))',
				'brand-orange-light': 'hsl(var(--brand-orange-light))',
				'brand-yellow': 'hsl(var(--brand-yellow))',
				'brand-white': 'hsl(var(--brand-white))',
				'brand-gray': 'hsl(var(--brand-gray))',
				'brand-gray-text': 'hsl(var(--brand-gray-text))',
				
				/* Updated StoryBrand Colors */
				'moss-green': 'hsl(var(--moss-green))',
				'moss-green-light': 'hsl(var(--moss-green-light))',
				'slate-charcoal': 'hsl(var(--slate-charcoal))',
				'off-white': 'hsl(var(--off-white))',
				'light-gray': 'hsl(var(--light-gray))',
				
				/* New Colors for Design Update */
				'bright-orange': 'hsl(var(--bright-orange))',
				'navy': 'hsl(var(--navy))',
				'dark-teal': 'hsl(var(--dark-teal))',
				
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			spacing: {
				'18': '4.5rem', /* 72px */
				'24': '6rem',   /* 96px - adjusted for tablet */
				'32': '8rem',   /* 128px - adjusted for desktop */
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

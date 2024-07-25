/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Using modern 'rgb' 
				primary: {
					100: 'rgb(var(--color-primary-100) / <alpha-value>)',
					200: 'rgb(var(--color-primary-200) / <alpha-value>)',
					300: 'rgb(var(--color-primary-300) / <alpha-value>)',
				},
				accent: {
					100: 'rgb(var(--color-accent-100) / <alpha-value>)',
					200: 'rgb(var(--color-accent-200) / <alpha-value>)',
				},
				light: {
					100: 'rgb(var(--color-light-100) / <alpha-value>)',
					200: 'rgb(var(--color-light-200) / <alpha-value>)',
				},
				dark: {
					100: 'rgb(var(--color-dark-100) / <alpha-value>)',
					200: 'rgb(var(--color-dark-200) / <alpha-value>)',
				},
			},
			margin: {
				navigation: 'var(--margin-navigation)',
				heading: 'var(--margin-heading)',
				subheading: 'var(--margin-subheading)',
				section: 'var(--margin-section)',
				highlight: 'var(--margin-highlight)',
				paragraph: 'var(--margin-paragraph)',
			}
		},
	},
	plugins: [],
}

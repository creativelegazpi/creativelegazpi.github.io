/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'bs-sm': '576px',
				'bs-md': '768px',
				'bs-lg': '992px',
				'bs-xl': '1200px',
				'bs-xxl': '1400px',
			},
		},
	},
	plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			tienne: ['Tienne', 'serif']
		}
	},
	extend: {
		screens: {
			xs: '350px'
		}
	},
	plugins: [require('tailwindcss-animate')]
};

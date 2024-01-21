import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
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
				primary: '#5DD15B',
				dark: {
					100: '#181A1B',
					200: '#2D3030'
				}
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				montserrat: ['Montserrat', 'sans-serif'],
				tienne: ['Tienne', 'serif']
			},
			screens: {
				xs: '350px'
			}
		},
		plugins: [require('tailwindcss-animate')]
	}
};

export default config;

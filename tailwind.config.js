/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				void: '#160526',
				midnight: '#3D1855',
				candy: '#E42DFF',
			},
			height: {
				'9/10': '90%',
			},
			spacing: {
				modal: '35%',
			},
			minHeight: {
				'1/10': '70vh',
			},
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				deepDarkBlue: 'var(--deepDarkBlue)',
				deepBlue: 'var(--deepBlue)',
				blueColor: 'var(--blueColor)',
				yellowColor: 'var(--yellowColor)',
				redColor: 'var(--redColor)',
				whiteColor: 'var(--whiteColor)',
			},
			fontFamily: {
				fontLight: 'var(--fontLight)',
				fontMedium: 'var(--fontMedium)',
				fontBold: 'var(--fontBold)',
			},
			spacing: (() => {
				let spacing = {};
				for (let i = 0; i < 1000; i++) {
					const num = parseFloat((i * 0.1).toFixed(1));
					spacing[num] = `${num}rem`;
				}
				return spacing;
			})(),
			fontSize: (() => {
				let fontSize = {};
				for (let i = 0; i < 1000; i++) {
					const num = parseFloat((i * 0.1).toFixed(1));
					fontSize[num] = `${num}rem`;
				}
				return fontSize;
			})(),
		},
	},
	plugins: [],
};

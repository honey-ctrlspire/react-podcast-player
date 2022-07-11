module.exports = {
	purge: {
		enabled: true,
		content: ['./src/**/*.js'],
	},
	theme: {
		colors: {
			transparent: 'transparent',
			athensgray: '#EFEFF2',
			black: '#000000',
			blueribbon: '#0F62FE',
			emperror: '#525252',
			frenchgray: '#C2C2CA',
			mercury: '#E5E5E5',
			mineshaft: {
				default: '#393939',
				10: 'rgba(57,57,57,0.1)',
				20: 'rgba(57,57,57,0.2)',
			},
			wildsand: '#F4F4F4',
			white: '#FFFFFF',
		},
		backgroundColor: (theme) => ({
			...theme('colors'),
		}),
		spacing: {
			px: '1px',
			0: '0',
			2: '0.125rem',
			3: '0.1875rem',
			5: '0.3125rem',
			6: '0.375rem',
			7: '0.4375rem',
			8: '0.5rem',
			9: '0.5625rem',
			10: '0.625rem',
			12: '0.75rem',
			13: '0.8125rem',
			14: '0.875rem',
			15: '0.9375rem',
			16: '1rem',
			17: '1.0625rem',
			20: '1.25rem',
			22: '1.375rem',
			25: '1.5625rem',
			30: '1.875rem',
			32: '2rem',
			42: '2.625rem',
			45: '2.8125rem',
			48: '3rem',
			50: '3.125rem',
			60: '3.75rem',
			70: '4.375rem',
			85: '5.3125rem',
			100: '6.25rem',
			150: '9.375rem',
			165: '10.3125rem',
			500: '31.25rem',
			570: '35.625rem',
			575: '35.9375rem',
			'-px': '-1px',
			'-3': '-0.1875rem',
			'-15': '-0.9375rem',
			'-24': '-1.5rem',
			'-60': '-3.75rem',
			'-full-2': 'calc(100% + 2px)',
		},
		opacity: {
			10: '.1',
			50: '.5',
			100: '1',
		},
		extend: {
			animation: {
				spinner: 'circle-button-spinning 0.65s ease infinite',
			},
			inset: (theme) => ({
				...theme('spacing'),
			}),
			borderRadius: {
				10: '0.625rem',
			},
			keyframes: {
				'circle-button-spinning': {
					'0%': { transform: 'rotate(-45deg)' },
					to: { transform: 'rotate(315deg)' },
				},
			},
			borderWidth: {
				6: '6px',
			},
			height: {
				128: '32rem',
			},
			maxWidth: (theme) => ({
				...theme('spacing'),
			}),
			minWidth: (theme) => ({
				...theme('spacing'),
			}),
			transitionProperty: {
				'transform-opacity': 'transform, opacity',
			},
			transitionTimingFunction: {
				panel: 'cubic-bezier(0.66, -0.41, 1, 1)',
			},
			willChange: {
				width: 'width',
			},
		},
	},
	plugins: [],
	corePlugins: {
		// ...
		backdropOpacity: false,
		backgroundOpacity: false,
		borderOpacity: false,
		divideOpacity: false,
		ringOpacity: false,
		textOpacity: false,
	},
};

module.exports = {
	content: ['./src/**/*.js'],
	theme: {
		spacing: {
			px: '1px',
			0: '0',
			2: '0.125rem',
			3: '0.1875rem',
			5: '0.3125rem',
			6: '0.375rem',
			7: '0.4375rem',
			12: '0.75rem',
			13: '0.8125rem',
			14: '0.875rem',
			16: '1rem',
			20: '1.25rem',
			30: '1.875rem',
			32: '2rem',
			42: '2.625rem',
			48: '3rem',
			70: '4.375rem',
			80: '5rem',
			85: '5.3125rem',
			150: '9.375rem',
			165: '10.3125rem',
			570: '35.625rem',
			575: '35.9375rem',
			'-px': '-1px',
			'-3': '-0.1875rem',
			'-15': '-0.9375rem',
			'-24': '-1.5rem',
			'-60': '-3.75rem',
			'-full-2': 'calc(100% + 2px)',
		},
		extend: {
			animation: {
				spinner: 'circle-button-spinning 0.65s ease infinite',
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
			colors: {
				athensgray: '#EFEFF2',
				frenchgray: '#C2C2CA',
				mineshaft: '#393939',
				wildsand: '#F4F4F4',
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
		},
	},
	plugins: [],
};

import React from 'react';
import Button from './Button';

export default function ButtonSpeed(props) {
	const { selectedValue, text, value, onClick } = props;

	return (
		<Button
			onClick={onClick}
			className={`flex items-center text-emperror text-sm py-14 px-20 text-left w-full hover:bg-mercury ${
				selectedValue === value ? 'bg-mercury' : ''
			}`}
		>
			<span className="mr-auto">{text}</span>
			{selectedValue === value ? (
				<svg
					width="13"
					height="8"
					viewBox="0 0 13 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M4.95 6.4L1.45 2.9L0.75 3.6L4.25 7.1L4.95 7.8L12.05 0.7L11.35 0L4.95 6.4Z"
						fill="#525252"
					/>
				</svg>
			) : (
				''
			)}
		</Button>
	);
}

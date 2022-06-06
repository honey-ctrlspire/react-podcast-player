import React from 'react';
import Button from './Button';

export default function ButtonPause({ onPause, disabled }) {
	return (
		<Button
			className="transition-colors relative p-7 rounded-full opacity-50 hover:opacity-100"
			aria-label="Pause"
			onClick={onPause}
			disabled={disabled}
		>
			<svg
				className="block svg-icon-pause"
				focusable="false"
				width="22"
				height="26"
				viewBox="0 0 22 26"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<path
					d="M2.98171 0.568115C1.72603 0.568115 0.708984 1.58516 0.708984 2.84084V23.2954C0.708984 24.5511 1.72603 25.5681 2.98171 25.5681H5.25444C6.51012 25.5681 7.52717 24.5511 7.52717 23.2954V2.84084C7.52717 1.58516 6.51012 0.568115 5.25444 0.568115H2.98171ZM16.6181 0.568115C15.3624 0.568115 14.3453 1.58516 14.3453 2.84084V23.2954C14.3453 24.5511 15.3624 25.5681 16.6181 25.5681H18.8908C20.1465 25.5681 21.1635 24.5511 21.1635 23.2954V2.84084C21.1635 1.58516 20.1465 0.568115 18.8908 0.568115H16.6181Z"
					fill="#393939"
				/>
			</svg>
		</Button>
	);
}

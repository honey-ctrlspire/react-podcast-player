import React from 'react';

export default function SliderVolume({ volume, onChange }) {
	return (
		<input
			className="slider-track-input absolute top-1/2 -left-px  p-0 h-30 cursor-pointer -mt-15 appearance-none -w-full-2 slider-volume bg-transparent mousetrap"
			type="range"
			step="1"
			min="0"
			max="100"
			aria-valuemin="0"
			aria-valuemax="100"
			aria-valuenow={volume}
			value={volume}
			onChange={onChange}
		/>
	);
}

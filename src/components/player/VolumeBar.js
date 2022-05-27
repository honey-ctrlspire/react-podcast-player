import React from 'react';

import Button from '../buttons/Button';
import VolumeHigh from '../buttons/ButtonVolumeHigh';
import VolumeLow from '../buttons/ButtonVolumeLow';

export default function VolumeBar({ volume, onChangeVolume, onVolumeSwitch }) {
	return (
		<div className="flex items-center">
			<Button onClick={onVolumeSwitch}>
				{volume ? <VolumeHigh /> : <VolumeLow />}
			</Button>
			<div className="w-85">
				<div className="relative grow shrink basis-0 h-2">
					<div className="absolute h-full w-full left-0 top-0 bg-mineshaft opacity-10"></div>
					<div
						className="absolute h-full w-0 left-0 top-0 bg-mineshaft"
						style={{
							width: `${volume + 1}%`,
							willChange: 'width',
						}}
					/>
					<input
						className="slider-track-input absolute top-1/2 -left-px  p-0 h-30 cursor-pointer -mt-15 appearance-none -w-full-2 bg-transparent mousetrap"
						type="range"
						step="1"
						min="0"
						max="100"
						aria-valuemin="0"
						aria-valuemax="100"
						aria-valuenow={volume}
						value={volume}
						onChange={onChangeVolume}
					/>
				</div>
			</div>
		</div>
	);
}

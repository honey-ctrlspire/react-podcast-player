import React from 'react';
import { useSelector } from 'react-redux';

import Time from './Time';

export default function Tooltip() {
	const { audio } = useSelector((state) => state);
	const { positionTooltip, holdProgressBar, recordsPlayer } = audio;

	const { activeBar } = holdProgressBar;
	const { translate, barWidth } = positionTooltip;
	const { duration } = recordsPlayer;

	if (activeBar) {
		return (
			<div
				className="absolute bg-mineshaft rounded bottom-20 text-white left-0 -ml-24 p-4 text-center w-48 text-16 will-change-transform"
				style={{ transform: `translate3d(${translate}px,0,0)` }}
			>
				{<Time start={(translate / barWidth) * duration} />}
			</div>
		);
	}

	return null;
}

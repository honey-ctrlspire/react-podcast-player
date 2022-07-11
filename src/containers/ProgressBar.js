import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import Time from '../components/Time';
import { PodcastPlayerContext } from '../contexts/PodcastPlayerContext';

export default function ProgressBar(props) {
	const { onMouseDown, onMouseUp, onMouseOver, onMouseOut, onMouseMove } =
		props;

	const { handleSetProgress } = useContext(PodcastPlayerContext);
	const audioState = useSelector((state) => state.audio);
	const { holdProgressBar, recordsPlayer, positionTooltip } = audioState;

	const { activeBar, holding } = holdProgressBar;
	const { progress, duration } = recordsPlayer;
	const { translate, barWidth } = positionTooltip;

	const progressBar = (progress / duration) * 100;

	return (
		<div
			className={`flex items-center h-12 relative w-full ${
				activeBar ? 'is-active' : 'is-inactive'
			}`}
		>
			<div className="text-xs text-mineshaft font-semibold pr-12 right-full opacity-50">
				<Time start={progress} />
			</div>
			<div
				className="relative flex-grow flex-shrink basis-0 h-2"
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				onMouseMove={onMouseMove}
			>
				<div className="absolute h-full w-full left-0 top-0 opacity-10 bg-mineshaft hover:bg-blueribbon" />
				<div
					className="absolute h-full w-0 left-0 top-0 will-change-width max-w-full bg-mineshaft slider-active"
					style={{ width: `${progressBar}%` }}
				/>
				<input
					type="range"
					className="slider-track-input absolute top-1/2 -left-px  p-0 h-30 cursor-pointer -mt-15 appearance-none -w-full-2 bg-transparent mousetrap"
					step="1"
					min="0"
					max={duration}
					aria-valuemin={0}
					aria-valuemax={duration}
					aria-valuenow={progress}
					value={progress}
					onChange={() =>
						handleSetProgress({ holding, translate, barWidth })
					}
					onMouseDown={onMouseDown}
					onMouseUp={onMouseUp}
				/>
			</div>
			<div className="text-xs text-mineshaft font-semibold ml-15 pr-12 left-full opacity-50">
				-
				<Time start={progress} end={duration} />
			</div>
			{props.children}
		</div>
	);
}

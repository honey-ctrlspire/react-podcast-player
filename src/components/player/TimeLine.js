import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProgressBar from './ProgressBar';
import TooltipProgress from './TooltipContainer';
import { setHoldProgressBar } from '../../store/reducer/audio';
import { PodcastPlayerContext } from '../../contexts/PodcastPlayerContext';

export default function TimeLine() {
	const dispatch = useDispatch();
	const { holdProgressBar, recordsPlayer } = useSelector((state) => state);
	const { activeBar, holding } = holdProgressBar;
	const { progress } = recordsPlayer;
	const { audio, handleClearInterval, handleUpdateProgress } =
		useContext(PodcastPlayerContext);

	let newMouseMoveFunction = null;

	function handleMouseOver() {
		dispatch(setHoldProgressBar({ activeBar: !activeBar }));
	}

	function handleMouseOut() {
		dispatch(setHoldProgressBar({ activeBar: !activeBar }));
	}

	function handleMouseDown() {
		if (!holding) {
			handleClearInterval();
			dispatch(setHoldProgressBar({ holding: !holding }));
		}
	}

	function handleMouseUp() {
		if (holding) {
			audio.currentTime = progress;

			handleUpdateProgress();
			dispatch(setHoldProgressBar({ holding: !holding }));
		}
	}

	function handleMouseMove(callback) {
		newMouseMoveFunction = callback;
	}

	return (
		<div className="grow m-auto max-w-575 w-570">
			<ProgressBar
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onMouseMove={newMouseMoveFunction}
			>
				<TooltipProgress
					onMouseMove={handleMouseMove}
					onChange={null}
				/>
			</ProgressBar>
		</div>
	);
}

import React, { useContext, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ProgressBar from './ProgressBar';
import Tooltip from '../components/Tooltip';
import { setHoldProgressBar, setPositionTooltip } from '../store/reducer';
import { PodcastPlayerContext } from '../contexts/PodcastPlayerContext';

export default function TimeLine() {
	const dispatch = useDispatch();
	const audioState = useSelector((state) => state.audio);
	const { holdProgressBar, recordsPlayer } = audioState;
	const { activeBar, holding } = holdProgressBar;
	const { progress } = recordsPlayer;
	const { audio, handleClearInterval, handleUpdateProgress } =
		useContext(PodcastPlayerContext);

	let newMouseMoveFunction = useRef(null);

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
			audio.current.currentTime = progress;

			handleUpdateProgress();
			dispatch(setHoldProgressBar({ holding: !holding }));
		}
	}

	function handleMouseMove(callback) {
		newMouseMoveFunction.current = callback;
	}

	function handleTooltip({ translate, barWidth }) {
		dispatch(
			setPositionTooltip({
				translate,
				barWidth,
			})
		);
	}

	function handlerMouseMove(evt) {
		const translate = evt.clientX - evt.target.getBoundingClientRect().left;
		const barWidth = evt.target.getBoundingClientRect().width;

		if (translate >= 0) {
			handleTooltip({ translate, barWidth });
		}
	}

	return (
		<div className="grow m-auto max-w-500 w-full">
			<ProgressBar
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onMouseMove={handlerMouseMove}
			>
				<Tooltip onMouseMove={handleMouseMove} onChange={null} />
			</ProgressBar>
		</div>
	);
}

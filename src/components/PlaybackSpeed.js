import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { speed } from '../config/playbackRate.json';
import { setPlaybackRate } from '../store/reducer';
import Button from './buttons/Button';
import ButtonSpeed from './buttons/ButtonSpeed';
import { PodcastPlayerContext } from '../contexts/PodcastPlayerContext';

export default function PlaybackSpeed() {
	const dispatch = useDispatch();
	const { audio } = useContext(PodcastPlayerContext);
	const [openPanel, isPanelOpen] = useState(false);
	const { playbackRate } = useSelector((state) => state.audio);

	const selectedSpeed =
		playbackRate.text !== 'Normal'
			? `${playbackRate.text}x`
			: playbackRate.text;

	function handleChangeSpeed(playbackRate) {
		audio.current.playbackRate = playbackRate.value;

		dispatch(setPlaybackRate(playbackRate));
		isPanelOpen(false);
	}

	return (
		<div className="flex items-center justify-end relative w-60">
			<Button
				className="text-xs transition-colors bg-mineshaft-10 hover:bg-mineshaft-20 relative py-7 px-9  rounded-10"
				// data-tooltip="Playback playbackRate"
				onClick={() => isPanelOpen(!openPanel)}
			>
				{selectedSpeed}
			</Button>
			<CSSTransition
				in={openPanel}
				timeout={350}
				classNames="playback"
				unmountOnExit
			>
				<div className="absolute bottom-45 left-0 bg-wildsand transition-transform-opacity duration-200 ease-panel min-w-150">
					{speed.map((item, idx) => (
						<ButtonSpeed
							key={idx}
							onClick={() => handleChangeSpeed(item)}
							selectedValue={playbackRate.value}
							{...item}
						/>
					))}
				</div>
			</CSSTransition>
		</div>
	);
}

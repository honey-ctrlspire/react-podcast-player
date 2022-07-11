import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from './buttons/Button';
import { setAutoplay } from '../store/reducer';
import { PodcastPlayerContext } from '../contexts/PodcastPlayerContext';

export default function AutoPlay() {
	const dispatch = useDispatch();
	const { audio } = useContext(PodcastPlayerContext);
	const { autoplay } = useSelector((state) => state.audio);

	function handleChangeAutoPlay() {
		audio.current.autoplay = !autoplay;

		dispatch(setAutoplay(!autoplay));
	}

	return (
		<Button
			className={`ml-8 text-xs rounded-10 py-7 px-14 w-full max-w-100 focus:border-none focus:outline-none ${
				autoplay
					? 'bg-mineshaft hover:bg-black text-white'
					: 'bg-mineshaft-10 hover:bg-mineshaft-20 text-mineshaft'
			}`}
			onClick={handleChangeAutoPlay}
		>
			{`Autoplay ${autoplay ? 'On' : 'Off'}`}
		</Button>
	);
}

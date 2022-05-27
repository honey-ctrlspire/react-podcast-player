import React, { useContext, useState } from 'react';

import { PodcastPlayerContext } from '../../contexts/PodcastPlayerContext';
import VolumeBar from './VolumeBar';

export default function Volume() {
	const { audio } = useContext(PodcastPlayerContext);
	const [volume, setVolume] = useState(100);

	function handleAudioVolume(volume) {
		audio.volume = volume;
	}

	function handleChangeVolume(evt) {
		const volume = parseInt(evt.target.value, 10);

		handleAudioVolume(volume / 100);
		setVolume(volume);
	}

	function handleVolumeSwitch() {
		if (volume > 0) {
			handleAudioVolume(0);
			setVolume(0);
		} else {
			handleAudioVolume(volume / 100);
		}
	}

	return (
		<VolumeBar
			volume={volume}
			onChangeVolume={handleChangeVolume}
			onVolumeSwitch={handleVolumeSwitch}
		/>
	);
}

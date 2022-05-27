import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import ButtonControls from '../buttons/ButtonControls';
import { PodcastPlayerContext } from '../../contexts/PodcastPlayerContext';

export default function Controls() {
	const { audio, handleAudioCurrentTime } = useContext(PodcastPlayerContext);
	const { progress } = useSelector((state) => state.recordsPlayer);

	function handleSeekForward(sec = 10) {
		handleAudioCurrentTime(progress + sec);
	}

	function handleSeekBack() {
		handleAudioCurrentTime(progress - 15);
	}

	function handlePlayerDisabledSeekBack() {
		if (audio.currentTime < 15) {
			return true;
		}
		return false;
	}

	function handlePlayerDisabledSeekForward() {
		if (audio.currentTime === audio.duration) {
			return true;
		}
		return false;
	}

	return (
		<ButtonControls
			onSeekForward={handleSeekForward}
			onSeekBack={handleSeekBack}
			onPlayerDisabledSeekBack={handlePlayerDisabledSeekBack}
			onPlayerDisabledSeekForward={handlePlayerDisabledSeekForward}
		/>
	);
}

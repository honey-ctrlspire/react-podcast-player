import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import ButtonControls from './buttons/ButtonControls';
import { PodcastPlayerContext } from '../contexts/PodcastPlayerContext';

export default function Controls() {
	const { audio, handleAudioCurrentTime } = useContext(PodcastPlayerContext);
	const { recordsPlayer } = useSelector((state) => state.audio);
	const { progress } = recordsPlayer;

	function handleSeekForward() {
		handleAudioCurrentTime(progress + 15);
	}

	function handleSeekBack() {
		handleAudioCurrentTime(progress - 15);
	}

	function handlePlayerDisabledSeekBack() {
		if (audio.current.currentTime < 15) {
			return true;
		}
		return false;
	}

	function handlePlayerDisabledSeekForward() {
		if (audio.current.currentTime === audio.current.duration) {
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

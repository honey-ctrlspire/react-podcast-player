import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRecordsPlayer } from '../store/reducer';

export default function useAudio() {
	const dispatch = useDispatch();
	const { audio } = useSelector((state) => state);
	const { autoplay, playbackRate, selectedAudio, recordsPlayer } = audio;
	const { duration, nowPlaying } = recordsPlayer;

	const intervalId = useRef();
	const audioElement = useRef(document.createElement('audio'));

	const handleUpdateProgress = useCallback(() => {
		intervalId.current = setInterval(() => {
			const progress = audioElement.current.currentTime;

			dispatch(setRecordsPlayer({ progress }));
		}, 900);
	}, [dispatch]);

	const handleClearInterval = useCallback(() => {
		if (intervalId.current !== null) {
			clearInterval(intervalId.current);
			intervalId.current = null;
		}
	}, []);

	const handleLoading = useCallback(() => {
		dispatch(setRecordsPlayer({ load: false }));
	}, [dispatch]);

	const handlePlay = useCallback(() => {
		handleUpdateProgress();

		dispatch(setRecordsPlayer({ nowPlaying: true }));
	}, [dispatch, handleUpdateProgress]);

	const handlePause = useCallback(() => {
		handleClearInterval();
		dispatch(setRecordsPlayer({ nowPlaying: false }));
	}, [dispatch, handleClearInterval]);

	const handleCanPlay = useCallback(() => {
		const duration = audioElement.current.duration;
		dispatch(setRecordsPlayer({ duration }));
	}, [dispatch]);

	useEffect(() => {
		audioElement.current.src = selectedAudio.url;
		audioElement.current.autoplay = autoplay;
		audioElement.current.playbackRate = playbackRate.value;

		audioElement.current.load();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedAudio, audioElement]);

	useEffect(() => {
		audioElement.current.addEventListener('canplay', handleCanPlay);
		audioElement.current.addEventListener('play', handlePlay);
		audioElement.current.addEventListener('pause', handlePause);
		audioElement.current.addEventListener('loadedmetadata', handleLoading);

		return () => {
			// Clean up the event listeners
			audioElement.current.removeEventListener('canplay', handleCanPlay);
			audioElement.current.removeEventListener('play', handlePlay);
			audioElement.current.removeEventListener('pause', handlePause);
			audioElement.current.removeEventListener(
				'loadedmetadata',
				handleLoading
			);
		};
	}, [handleCanPlay, handlePlay, handlePause, handleLoading]);

	function handleSwitchControlPlaying() {
		if (!audioElement.current.src.length) {
			return;
		}

		if (nowPlaying) {
			audioElement.current.pause();
		} else {
			audioElement.current.play();
		}
	}

	function handleSetProgress({ holding, translate, barWidth }) {
		if (holding) {
			const progress = ((translate / barWidth) * duration).toFixed(6);

			dispatch(setRecordsPlayer({ progress }));
		}
	}

	function handleAudioCurrentTime(time) {
		const progress = (audioElement.current.currentTime = time);

		dispatch(setRecordsPlayer({ progress }));
	}

	return {
		audio: audioElement,
		audioProps: {
			handleCanPlay,
			handlePlay,
			handlePause,
			handleLoading,
			handleSetProgress,
			handleClearInterval,
			handleUpdateProgress,
			handleSwitchControlPlaying,
			handleAudioCurrentTime,
		},
	};
}

import { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
	setLoading,
	setAudioPlaying,
	setAudioProgress,
	setAudioDuration,
} from '../store/reducer/recordsPlayer';

export default function useAudio() {
	const dispatch = useDispatch();
	const { audio, recordsPlayer } = useSelector((state) => state);
	const { playlist, selectedAudio } = audio;
	const { duration, nowPlaying, load } = recordsPlayer;

	const intervalId = useRef();
	const audioElement = useRef(document.createElement('audio'));
	// const [nextPlay, setNextPlay] = useState(false);

	const handleUpdateProgress = useCallback(() => {
		intervalId.current = setInterval(() => {
			dispatch(setAudioProgress(audioElement.current.currentTime));
		}, 900);
	}, [dispatch]);

	const handleClearInterval = useCallback(() => {
		if (intervalId.current !== null) {
			clearInterval(intervalId.current);
			intervalId.current = null;
		}
	}, []);

	const handleLoading = useCallback(() => {
		// dispatch(setLoading());
	}, []);

	const handlePlay = useCallback(() => {
		handleUpdateProgress();

		dispatch(setAudioPlaying(true));
	}, [dispatch, handleUpdateProgress]);

	const handlePause = useCallback(() => {
		handleClearInterval();
		dispatch(setAudioPlaying(false));
	}, [dispatch, handleClearInterval]);

	const handleCanPlay = useCallback(() => {
		dispatch(setAudioDuration(audioElement.current.duration));
	}, [dispatch]);

	useEffect(() => {
		audioElement.current.src = selectedAudio.url;
		audioElement.current.load();

		// dispatch(setLoading());
	}, [selectedAudio]);

	useEffect(() => {
		audioElement.current.addEventListener('canplay', handleCanPlay);
		audioElement.current.addEventListener('play', handlePlay);
		audioElement.current.addEventListener('pause', handlePause);
		audioElement.current.addEventListener('loadedmetadata', handleLoading);

		// loadSrc();

		// return () => {
		// 	// Clean up the event listeners
		// 	audioElement.current.removeEventListener('canplay', handleCanPlay);
		// 	audioElement.current.removeEventListener('play', handlePlay);
		// 	audioElement.current.removeEventListener('pause', handlePause);
		// 	audioElement.current.removeEventListener(
		// 		'loadedmetadata',
		// 		handleLoading
		// 	);

		// 	// audioElement.current = null;
		// };
	}, [handleCanPlay, handlePlay, handlePause, handleLoading]);

	useEffect(() => {
		audioElement.current.src = selectedAudio ? selectedAudio.url : '';
		audioElement.current.load();
	}, [selectedAudio]);

	function handleSwitchControlPlaying() {
		if (!audioElement.current.src.length) {
			return;
		}

		// audioElement.current.autoplay = true;
		audioElement.current.playbackRate = 2;
		// audioElement.current.click();
		// audioElement.current.play();

		if (nowPlaying) {
			audioElement.current.pause();
		} else {
			audioElement.current.play();
		}
	}

	function handleSetProgress({ holding, translate, barWidth }) {
		console.log({ holding, translate, barWidth });
		const progress = ((translate / barWidth) * duration).toFixed(6);

		if (holding) {
			dispatch(setAudioProgress(parseFloat(progress)));
		}
	}

	function handleAudioCurrentTime(time) {
		const progress = (audioElement.current.currentTime = time);

		dispatch(setAudioProgress(progress));
	}

	function getData(playingShowId) {
		// eslint-disable-next-line
		const dataItem = playlist.filter((item) => {
			if (item.id === playingShowId) {
				return item;
			}
		});

		return Promise.resolve(...dataItem);
	}

	return {
		audio: audioElement.current,
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
			getData,
		},
	};
}

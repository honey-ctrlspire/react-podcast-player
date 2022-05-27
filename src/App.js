import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Audio from './components/player/Audio';
import { setAudioState } from './store/reducer/audio';
import './styles/app.css';

export default function App({ playlist }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAudioState({ playlist, selectedAudio: playlist[0] }));
	}, [playlist, dispatch]);

	return (
		<main>
			<Audio playlist={playlist} />
		</main>
	);
}

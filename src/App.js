import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Audio from './containers/Audio';
import { setAudioState, setRecordsPlayer } from './store/reducer';
import './styles/app.css';

export default function App({ playlist }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setAudioState({ playlist, selectedAudio: playlist[0] }));
		dispatch(setRecordsPlayer({ load: true }));
	}, [playlist, dispatch]);

	return (
		<main>
			<Audio playlist={playlist} />
		</main>
	);
}

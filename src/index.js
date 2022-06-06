import React from 'react';
import PropTypes from 'prop-types';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { PodcastPlayerProvider } from './contexts/PodcastPlayerContext';

const AudioPlayer = ({ playlist = [] }) => {
	if (!playlist.length) return null;

	return (
		<Provider store={store}>
			<PodcastPlayerProvider>
				<App playlist={playlist} />
			</PodcastPlayerProvider>
		</Provider>
	);
};

AudioPlayer.propTypes = {
	playlist: PropTypes.array,
};

export { AudioPlayer };
// render(<AudioPlayer />, document.getElementById('root'));

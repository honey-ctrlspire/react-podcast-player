import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { PodcastPlayerProvider } from './contexts/PodcastPlayerContext';
import { feed } from './config/playlist.json';

const AudioPlayer = ({ playlist = [] }) => {
	if (!feed.length) return null;

	return (
		<Provider store={store}>
			<PodcastPlayerProvider>
				<App playlist={feed} />
			</PodcastPlayerProvider>
		</Provider>
	);
};

render(<AudioPlayer />, document.getElementById('root'));

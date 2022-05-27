import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import { feed } from './songs/playlist.json';
import { PodcastPlayerProvider } from './contexts/PodcastPlayerContext';

const AudioPlayer = () => (
	<Provider store={store}>
		<PodcastPlayerProvider>
			<App playlist={feed} />
		</PodcastPlayerProvider>
	</Provider>
);

// export { AudioPlayer };
render(<AudioPlayer />, document.getElementById('root'));

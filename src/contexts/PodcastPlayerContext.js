import React from 'react';
import useAudio from '../hooks/useAudio';

const PodcastPlayerContext = React.createContext({});

const PodcastPlayerProvider = ({ children }) => {
	const { audio, audioProps } = useAudio();

	return (
		<PodcastPlayerContext.Provider value={{ audio, ...audioProps }}>
			{children}
		</PodcastPlayerContext.Provider>
	);
};

export { PodcastPlayerContext, PodcastPlayerProvider };

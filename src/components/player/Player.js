import React from 'react';

import Actions from './Actions';
// import Clodcast from './Clodcast';
import Controls from './Controls';
// import NextUp from './NextUp';
import PlaybackSpeed from './PlaybackSpeed';
import TimeLine from './TimeLine';
import Volume from './Volume';

export default function Player() {
	return (
		<>
			<Controls />
			{/* <Clodcast /> */}
			<Actions />
			<TimeLine />
			<Volume />
			<PlaybackSpeed />
			<button className="text-12 rounded-xl px-13 bg-mineshaft text-white">
				Autoplay On
			</button>
			{/* <NextUp onSwitchControlPlaying={onSwitchControlPlaying} /> */}
		</>
	);
}

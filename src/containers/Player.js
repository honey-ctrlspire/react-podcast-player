import React from 'react';

import AutoPlay from '../components/AutoPlay';
import Border from '../components/Border';
import Controls from '../components/Controls';
import PlaybackSpeed from '../components/PlaybackSpeed';
import TimeLine from './TimeLine';
import Volume from './Volume';

export default function Player() {
	return (
		<>
			<Controls />
			{/* <Clodcast /> */}
			<TimeLine />
			{/* <PlayerActions /> */}
			<Volume />
			<Border className="flex items-center border-l border-solid border-mineshaft-10 pl-10 max-h-30">
				<PlaybackSpeed />
				<AutoPlay />
			</Border>
			{/* <NextUp onSwitchControlPlaying={onSwitchControlPlaying} /> */}
		</>
	);
}

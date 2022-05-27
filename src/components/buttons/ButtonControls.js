import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import ButtonGroup from './ButtonGroup';
import Play from './ButtonPlay';
import Pause from './ButtonPause';
import SeekBack from './ButtonSeekBack';
import SeekForward from './ButtonSeekForward';
import Spinner from '../player/Spinner';

import { PodcastPlayerContext } from '../../contexts/PodcastPlayerContext';

export default function ButtonControls(props) {
	const {
		onSeekBack,
		onSeekForward,
		onPlayerDisabledSeekBack,
		onPlayerDisabledSeekForward,
	} = props;

	const { handleSwitchControlPlaying } = useContext(PodcastPlayerContext);
	const { load, nowPlaying } = useSelector((state) => state.recordsPlayer);

	return (
		<ButtonGroup>
			<li className="relative">
				<SeekBack
					seconds={15}
					disabled={onPlayerDisabledSeekBack() || load}
					onSeekBack={onSeekBack}
				/>
			</li>
			<li className="relative">
				{!nowPlaying ? (
					<Play onPlay={handleSwitchControlPlaying} disabled={load} />
				) : (
					<Pause
						onPause={handleSwitchControlPlaying}
						disabled={load}
					/>
				)}
				{load ? <Spinner /> : null}
			</li>
			<li className="relative">
				<SeekForward
					seconds={15}
					onSeekForward={onSeekForward}
					disabled={onPlayerDisabledSeekForward() || load}
				/>
			</li>
		</ButtonGroup>
	);
}

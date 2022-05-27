import React from 'react';
import ButtonPlay from './ButtonPlay';

export default function ButtonPlayQueue({
	id,
	showId,
	onUpdateShowId,
	onPlayQueue,
	onSwitchControlPlaying,
}) {
	if (showId !== id) {
		return (
			<span className="play-hover absolute top-6 left-6 rounded-full border-2 border-solid border-white select-none bg-mineshaft">
				<ButtonPlay
					onPlay={() => {
						onUpdateShowId(id);
						onPlayQueue(id);
						return onSwitchControlPlaying();
					}}
				/>
			</span>
		);
	}

	return null;
}

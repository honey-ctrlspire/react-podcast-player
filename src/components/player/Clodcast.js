import React from 'react';
import { useSelector } from 'react-redux';

export default function Clodcast() {
	const { selectedAudio } = useSelector((state) => state.audio);
	const { author, cover, show } = selectedAudio;

	return (
		<div className="player-cloudcast" dir="ltr">
			<div className="player-cloudcast-image">
				<figure>
					<img src={cover} alt="" />
				</figure>
			</div>
			<div className="player-cloudcast-details">
				<div className="player-cloudcast-title">{show}</div>
				<div className="player-cloudcast-author">{author}</div>
			</div>
		</div>
	);
}

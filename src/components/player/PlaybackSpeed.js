import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from '../buttons/Button';

export default function PlaybackSpeed() {
	const [openPanel, isPanelOpen] = useState(false);

	const speed = ['0.25', '0.5', '0.75', 'Normal', '1.25', '1.5', '1.75', '2'];

	return (
		<div className="relative">
			<Button
				className="transition-colors hover:bg-athensgray relative p-7 rounded-full queuelist tooltip"
				data-tooltip="Playback speed"
				onClick={() => isPanelOpen(!openPanel)}
			>
				1.5x
			</Button>
			<CSSTransition
				in={openPanel}
				timeout={350}
				classNames="playback"
				unmountOnExit
			>
				<div className="absolute bottom-70 left-0 bg-wildsand transition-transform-opacity duration-200 ease-panel min-w-150 px-20 py-16">
					{speed.map((s, idx) => (
						<li key={idx}>{s}</li>
					))}
				</div>
			</CSSTransition>
		</div>
	);
}

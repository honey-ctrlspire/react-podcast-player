import React from 'react';
import { useSelector } from 'react-redux';

import Player from './Player';

export default function Audio() {
	const { mode } = useSelector((state) => state.audio);
	const { changeMode } = mode;

	return (
		<div
			className="fixed left-0 right-0 bottom-0 flex items-center z-10 h-60 px-15"
			data-theme={changeMode ? 'dark' : null}
		>
			<div className="flex items-center mx-auto relative w-full">
				<Player />
			</div>
		</div>
	);
}

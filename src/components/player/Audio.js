import React from 'react';
import { useSelector } from 'react-redux';

import Player from './Player';

export default function Audio() {
	const { changeMode } = useSelector((state) => state.mode);

	return (
		<div
			className="fixed left-0 right-0 bottom-0 flex items-center z-10 h-80"
			data-theme={changeMode ? 'dark' : null}
		>
			<div className="flex mx-auto relative w-full">
				<Player />
			</div>
		</div>
	);
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NextUpButton from './NextUpButton';
import QueuePanel from './queue-panel/QueuePanel';

import { setQueue } from '../store/reducer';

export default function NextUp() {
	const dispatch = useDispatch();
	const { playlist } = useSelector((state) => state.audio);

	const [isOpenQueue, setOpenQueue] = useState(false);

	useEffect(() => {
		dispatch(setQueue(playlist));
	}, [playlist, dispatch]);

	function handleOpenQueue() {
		setOpenQueue((isOpenQueue) => !isOpenQueue);
	}

	return (
		<>
			<NextUpButton onOpenQueue={handleOpenQueue} />
			<QueuePanel
				isOpenQueue={isOpenQueue}
				onSwitchQueue={handleOpenQueue}
			/>
		</>
	);
}

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { CSSTransition } from 'react-transition-group';

import QueuePanelView from './QueuePanelView';
import QueuePanelHead from './QueuePanelHead';
import QueuePanelItem from './QueuePanelItem';
import { setAudioState } from '../../../store/reducer';
import { removeFromQueue } from '../../../store/reducer';

export default function QueuePanel({ onSwitchQueue, isOpenQueue }) {
	const dispatch = useDispatch();

	const {
		queue: { queue },
		audio: { selectedAudio },
	} = useSelector((state) => state);

	function handleRemoveFromQueue(index) {
		dispatch(removeFromQueue(index));
	}

	function handlePlayQueueItem(item) {
		dispatch(setAudioState({ selectedAudio: item }));
	}

	function getDataQueue() {
		if (queue.length) {
			return queue.map((item, idx) => (
				<QueuePanelItem
					{...item}
					idx={idx}
					key={item.id}
					onRemoveFromQueue={handleRemoveFromQueue}
					onPlayQueue={handlePlayQueueItem}
					selectedAudio={selectedAudio}
				/>
			));
		}

		return <span className="up-next-learn">there is no show in line</span>;
	}

	return (
		<CSSTransition
			in={isOpenQueue}
			timeout={350}
			classNames="queue"
			unmountOnExit
		>
			<QueuePanelView>
				<QueuePanelHead onClose={onSwitchQueue} />
				<Scrollbars
					style={{ height: 'calc(100% - 65px)' }}
					renderThumbVertical={(props) => (
						<div {...props} className="rounded bg-frenchgray" />
					)}
				>
					<div className="queuelist-content">{getDataQueue()}</div>
				</Scrollbars>
			</QueuePanelView>
		</CSSTransition>
	);
}

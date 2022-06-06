import React, { useContext, useState } from 'react';

import { PodcastPlayerContext } from '../contexts/PodcastPlayerContext';
import Button from '../components/buttons/Button';
import SliderVolume from '../components/SliderVolume';
import VolumeHigh from '../components/buttons/ButtonVolumeHigh';
import VolumeLow from '../components/buttons/ButtonVolumeLow';

export default function Volume() {
	const coxtent = useContext(PodcastPlayerContext);
	const audio = coxtent.audio.current;

	const [volume, setVolume] = useState(100);

	function handleAudioVolume(volume) {
		audio.volume = volume;
	}

	function handleChangeVolume(evt) {
		const volume = parseInt(evt.target.value, 10);

		handleAudioVolume(volume / 100);
		setVolume(volume);
	}

	function handleVolumeSwitch() {
		if (volume > 0) {
			handleAudioVolume(0);
			setVolume(0);
		} else {
			handleAudioVolume(1);
			setVolume(100);
		}
	}

	return (
		<div className="flex items-center pr-25">
			<Button className="mr-14 w-22 h-17" onClick={handleVolumeSwitch}>
				{volume ? <VolumeHigh /> : <VolumeLow />}
			</Button>
			<div className="w-85">
				<div className="relative grow shrink basis-0 h-2">
					<div className="absolute h-full w-full left-0 top-0 bg-mineshaft opacity-10" />
					<div
						className="absolute h-full w-0 left-0 top-0 bg-mineshaft will-change-width max-w-full"
						style={{ width: `${volume + 1}%` }}
					/>
					<SliderVolume
						volume={volume}
						onChange={handleChangeVolume}
					/>
				</div>
			</div>
		</div>
	);
}

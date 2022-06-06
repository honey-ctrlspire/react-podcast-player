import React from 'react';

import useAudioTime from '../hooks/useAudioTime';

export default function Time({ start, end }) {
	const { getFullTime } = useAudioTime({ start, end });

	return <span>{getFullTime()}</span>;
}

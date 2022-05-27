import React from 'react';
import PropTypes from 'prop-types';

import Time from './Time';

const TooltipProgress = ({ activeBar, translate, barWidth, duration }) => {
	if (activeBar) {
		return (
			<div
				className="absolute bg-mineshaft rounded bottom-20 text-white left-0 -ml-24 p-4 text-center w-48 text-16"
				style={{
					transform: `translate3d(${translate}px,0,0)`,
					willChange: 'transform',
				}}
			>
				{<Time start={(translate / barWidth) * duration} />}
			</div>
		);
	}

	return null;
};

TooltipProgress.propTypes = {
	activeBar: PropTypes.bool,
	translate: PropTypes.number,
	barWidth: PropTypes.number,
	duration: PropTypes.number,
};

export default TooltipProgress;

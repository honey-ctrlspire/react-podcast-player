import React from 'react';

const QueuePanel = ({ children }) => {
	return (
		<div className="absolute bottom-70 right-0  w-570 h-575 bg-white rounded-md transition-transform-opacity duration-200 ease-panel shadow-2xl">
			{children}
		</div>
	);
};

export default QueuePanel;

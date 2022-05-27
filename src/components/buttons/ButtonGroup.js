import React from 'react';

export default function ButtonGroup({ children }) {
	return (
		<div>
			<ul className="flex items-center">{children}</ul>
		</div>
	);
}

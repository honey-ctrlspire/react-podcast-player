import React from 'react';

const ButtonGroup = ({ children }) => {
	return (
		<div>
			<ul className="flex items-center">{children}</ul>
		</div>
	);
};

export default ButtonGroup;

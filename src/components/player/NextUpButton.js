import React from 'react';

import Button from '../buttons/Button';

export default function NextUpButton({ onOpenQueue }) {
	return (
		<ul className="player-options">
			<li className="player-options-item">
				<Button
					className="transition-colors hover:bg-athensgray relative p-7 rounded-full queuelist tooltip"
					data-tooltip="Queue"
					onClick={onOpenQueue}
				>
					<svg
						height="18"
						viewBox="0 0 18 18"
						width="18"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g fill="none" fillRule="evenodd">
							<path d="M.867.109C.387-.144 0 .059 0 .565v4.87c0 .503.39.71.867.457L4.643 3.46c.476-.252.476-.663 0-.916z"></path>
							<g
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
							>
								<path d="M1 17h16M10 3h7M1 10h16" />
							</g>
						</g>
					</svg>
				</Button>
			</li>
		</ul>
	);
}

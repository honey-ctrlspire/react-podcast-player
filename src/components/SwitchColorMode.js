import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMode } from '../../store/reducer';

const SwitchColorMode = ({ changeMode, handleChangeMode }) => {
	return (
		<div className="relative bg-white  rounded text-mineshaft p-16 w-165 shadow-xl popper-player-mode">
			<label className="flex flex-1 items-center ">
				<div className="text-14 text-mineshaft  mr-5">Dark mode</div>
				<div className="flex flex-1 justify-end">
					<span
						className={`switch-mode relative inline-block bg-mineshaft opacity-10 cursor-pointer p-px w-32 transition-colors hover:bg-athensgray rounded-full ${
							changeMode ? 'is-checked' : ''
						}`.trim()}
						onClick={(evt) => {
							evt.preventDefault();
							return handleChangeMode();
						}}
					>
						<input className="hidden" type="chgeckbox" />
					</span>
				</div>
			</label>
		</div>
	);
};

export default function PopperContainer() {
	const dispatch = useDispatch();
	const { mode } = useSelector((state) => state.audio);
	const { isOpen, changeMode } = mode;

	function setIsOpenPopper() {
		dispatch(setMode({ isOpen: !isOpen }));
	}

	function handleChangeMode() {
		dispatch(setMode({ changeMode: !changeMode }));
	}

	return (
		<div className="relative">
			<button
				className={`transition-colors hover:bg-athensgray relative p-7 rounded-full focus:border-none focus:outline-none ${
					isOpen ? 'is-active' : 'tooltip'
				}`}
				type="button"
				aria-label="Favorite this show"
				data-tooltip="View mode"
				onClick={() => setIsOpenPopper()}
			>
				<svg
					className="block svg-icon-options"
					focusable="false"
					height="1em"
					width="1em"
					viewBox="0 0 12 12"
					aria-hidden="true"
				>
					<path d="M10.5 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM6 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-4.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
				</svg>
			</button>
			<div
				className="absolute -top-60 left-1/2 -translate-x-1/2"
				x-placement="top"
				style={{ display: !isOpen ? 'none' : false }}
			>
				{isOpen ? (
					<SwitchColorMode
						changeMode={changeMode}
						handleChangeMode={handleChangeMode}
					/>
				) : null}
				<div className="popper-arrow absolute h-0 w-0 border-6 border-solid border-transparent"></div>
			</div>
		</div>
	);
}

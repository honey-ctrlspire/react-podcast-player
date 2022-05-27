import React from 'react';
import Button from './Button';

const SeekBtnForward = ({ onSeekForward, seconds, disabled }) => {
	return (
		<Button
			className="transition-colors hover:bg-athensgray relative p-7 rounded-full forward tooltip"
			type="button"
			data-tooltip="Keep tapping to seek faster"
			onClick={() => onSeekForward(seconds)}
			disabled={disabled}
		>
			<div className="flex items-center">
				<svg
					width="23"
					height="24"
					viewBox="0 0 23 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.7019 0.0037579C13.9039 -0.0154967 14.1084 0.0550316 14.2572 0.203877L16.3341 2.28079C16.4698 2.41556 16.5378 2.59214 16.5378 2.76937C16.5378 2.94659 16.4698 3.12318 16.3341 3.25794L14.2572 5.33485C14.0597 5.53331 13.763 5.59337 13.5036 5.4863C13.2451 5.37922 13.0763 5.12597 13.0763 4.84628V3.74652L11.488 5.33485C11.2904 5.53331 10.9938 5.59337 10.7344 5.4863C10.4759 5.37922 10.3071 5.12597 10.3071 4.84628V3.73751C5.63445 4.19921 1.99946 8.12635 1.99946 12.9231C1.99946 18.0319 6.12141 22.1539 11.2302 22.1539C16.3389 22.1539 20.4609 18.0319 20.4609 12.9231C20.4609 10.3682 19.4282 8.06756 17.7566 6.39675C17.668 6.31169 17.5973 6.20981 17.5485 6.09708C17.4998 5.98435 17.4741 5.86302 17.4728 5.74022C17.4716 5.61741 17.4948 5.49559 17.5413 5.38189C17.5877 5.26819 17.6563 5.1649 17.7432 5.07806C17.83 4.99122 17.9333 4.92257 18.047 4.87615C18.1607 4.82973 18.2825 4.80647 18.4053 4.80772C18.5281 4.80896 18.6495 4.8347 18.7622 4.88343C18.8749 4.93215 18.9768 5.00288 19.0619 5.09147C21.0659 7.09448 22.307 9.8695 22.307 12.9231C22.307 19.0297 17.3367 24 11.2302 24C5.12363 24 0.15332 19.0297 0.15332 12.9231C0.15332 7.12826 4.63175 2.36513 10.3071 1.89317V0.692455C10.3071 0.412765 10.4759 0.159512 10.7344 0.0524355C10.9928 -0.0546407 11.2895 0.00541654 11.488 0.203877L13.0763 1.79221V0.692455C13.0763 0.412765 13.2451 0.159512 13.5036 0.0524355C13.5682 0.0256664 13.6346 0.0101762 13.7019 0.0037579ZM11.6412 9.72665L11.3347 13.5361H12.7897C12.9964 13.2075 13.3216 12.9989 13.7812 12.9989C14.3849 12.9989 14.8179 13.4335 14.8179 14.0824C14.8179 14.7184 14.3903 15.1317 13.7866 15.1317C13.2411 15.1317 12.8086 14.8166 12.732 14.3384H11.2302C11.2533 15.519 12.2639 16.4081 13.774 16.4063C15.3423 16.4063 16.3774 15.4468 16.3774 14.0409C16.3774 12.7745 15.4941 11.8595 14.259 11.8595C13.5916 11.8595 13.1318 12.1213 12.8798 12.5265H12.7951L12.9159 11.0157H15.9681V9.72665H11.6412ZM7.66229 9.72846L6.00905 10.8553V12.2795L7.57755 11.2194H7.66229V16.2332H9.31733V9.72846H7.66229Z"
						fill="#393939"
					/>
				</svg>
			</div>
		</Button>
	);
};

export default SeekBtnForward;

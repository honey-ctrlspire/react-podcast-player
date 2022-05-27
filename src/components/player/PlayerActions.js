import React from 'react';
import SwitchColorMode from './SwitchColorMode';

// import AddToFavoritesBtn from '../../buttons/ButtonFavorite';

export default function PlayerActions() {
	return (
		<div className="flex">
			<ul className="flex items-center">
				{/* <li className='svg-icon-group-item'>
          <AddToFavoritesBtn />
        </li> */}
				<li className="relative">
					<SwitchColorMode />
				</li>
			</ul>
		</div>
	);
}

import React from 'react';
import Popper from './Popper';

// import AddToFavoritesBtn from '../../buttons/ButtonFavorite';

export default function PlayerActions() {
	return (
		<div className="flex">
			<ul className="flex items-center">
				{/* <li className='svg-icon-group-item'>
          <AddToFavoritesBtn />
        </li> */}
				<li className="relative">
					<Popper />
				</li>
			</ul>
		</div>
	);
}

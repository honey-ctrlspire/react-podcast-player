import React from 'react';
import Popper from '../popper/popper_container';

// import AddToFavoritesBtn from '../../buttons/button_add_to_favorites';
import './style.css';

const Actions = () =>  {

  return(
    <div className='track-actions'>
      <ul className='svg-icon-group'>
        {/* <li className='svg-icon-group-item'>
          <AddToFavoritesBtn />
        </li> */}
        <li className='svg-icon-group-item'>
          <Popper/>
        </li>
      </ul>
    </div>
  )
}

export default Actions;
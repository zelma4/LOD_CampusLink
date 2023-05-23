import './General.css';
import React, { useState } from 'react';
import Burger from './Burger';
import CarouselMenu from './CarouselMenu/CarouselMenu';
import { Link } from 'react-router-dom';

function General() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='header'>
      <nav>
      <div className="left-item">
      <Burger />
      </div>
      <div className="center-item">
        <Link to="/general">
          <button className='button_logo'>
            CampusLink
          </button>
        </Link>
      </div>
      <div className="right-item">
        <div className="header_messenger">
          {<img  src="/Messenger.svg" alt="Messenger" title="Messenger" className="Messenger" />}
        </div>
        <div className="header_profile">
          <Link to="/profile">
            {<img  src="./Profile.svg" alt="Profile" title="Profile" className="Profile" />}
          </Link>
        </div>
      </div> 
      </nav>
      <CarouselMenu />

    </div>
  );
}

export default General;

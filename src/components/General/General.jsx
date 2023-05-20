import './General.css';
import React, { useState } from 'react';
import Burger from './Burger';
import CarouselMenu from './CarouselMenu/CarouselMenu';
import Search from "./Search/Search";

function General() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='header'>
      <nav>
        <div className="center-item">
          <button className='button_logo'>
            CampusLink
          </button>
        </div>
        <div className="right-item">
          <div className="header_profile">
            {<img  src="./Profile.svg" alt="Profile" title="Profile" className="Profile" />}
          </div>
          <div className="header_messenger">
            {<img  src="/Messenger.svg" alt="Messenger" title="Messenger" className="Messenger" />}
          </div>
        </div>
        <div className="left-item">
          <div className="header_search">
            <Search />
          </div>
        </div>
      </nav>
      <CarouselMenu />
    </div>
  );
}

export default General;

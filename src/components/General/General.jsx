import './General.css';
import React, { useState } from 'react';
import Navbar from './Burger/burger';
import CarouselMenu from './CarouselMenu/CarouselMenu';
import FreeSolo from "./Search/Search";

function General() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='header'>
      <button className='button_logo'>
        CampusLink
      </button>
      <div className="header_profile">
        {<img  src="./Profile.svg" alt="Profile" title="Profile" className="Profile" />}
		  </div>
		  <div className="header_messenger">
        {<img  src="/Messenger.svg" alt="Messenger" title="Messenger" className="Messenger" />}
		  </div>
      <div className="header_search">
        <FreeSolo />
      </div>
      <CarouselMenu />
      <Navbar />
    </div>
  );
}

export default General;

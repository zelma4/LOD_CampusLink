import { Carousel } from 'bootstrap';
import './General.css';
import React, { useState } from 'react';


function General() {
  return (
    <div className="header">
      <div className="container">
        <button className='button_logo'>
          CampusLink
        </button>
		    <div className="header_search">
		    </div>
		    <div className="header_menu">
		    </div>
		    <div className="header_profile">
          {<img  src="./Profile.svg" alt="Profile" title="Profile" className="Profile" />}
		    </div>
		    <div className="header_messenger">
          {<img  src="/Messenger.svg" alt="Messenger" title="Messenger" className="Messenger" />}
		    </div>
      </div>
    </div>  
  );
}

export default General;

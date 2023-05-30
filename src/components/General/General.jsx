import './General.css';
import React from 'react';
import CarouselMenu from './CarouselMenu/CarouselMenu';
import { Link } from 'react-router-dom';

function General() {
  return (
    <div className='header'>
      <nav>
        <div className="left-item">
            <Link to="/general">
              <button className='button_logo'>
                CampusLink
              </button>
            </Link>
            <Link to="/subjects">
              <button className='button_subjects'>
                <div className="subject_name">Subjects</div> 
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

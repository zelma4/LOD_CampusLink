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
            
        </div>
        <div className="right-item">
        <div className="button_students">
            <Link to="/students" >
            {<img src="/Students.svg" alt="Students" title="Students" className='students' />}
            </Link>
          </div>
          <div className='button_subjects'>
            <Link to="/subjects">
                {<img  src="/Subjects.svg" alt="Subjects" title="Subjects" className="subjects" />}
            </Link>
          </div>
          <div className="button_profile">
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

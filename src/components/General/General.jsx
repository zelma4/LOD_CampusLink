import './General.css';
import React from 'react';
import CarouselMenu from './CarouselMenu/CarouselMenu';
import Navbar from '../Navbar/Navbar';

function General() {
  return (
    <div className='header'>
      <Navbar />
      <CarouselMenu />
    </div>
  );
}

export default General;

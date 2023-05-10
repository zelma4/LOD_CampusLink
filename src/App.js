import './App.css';
import General from './components/General/General';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile/Profile'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ReactDOM from "react-dom";
function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="App">
       <Profile /> 
      {/* <General />
      <div className='Carousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="1.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>CampusLink</h3>
          <p>New opportunities in communication between students</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="2.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>We can do all together!</h3>
          <p>If you have any questions or suggestions, write, we are happy to hear from you</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="3.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Help</h3>
          <p>
            We can help you with every question you have!
          </p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>*/}
  </div> 
  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;

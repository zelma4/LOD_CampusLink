import React, {useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./CarouselMenu.css";

function CarouselMenu() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return(
      <div className='CarouselMenu'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className="items_slide"
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
              className="items_slide"
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
              className="items_slide"
              src="3.webp"
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
      </div>
    );
}

export default CarouselMenu;
import React from "react";
import { Carousel } from "react-bootstrap";
// import Youngistaan from "../images/Youngistaan.jpg";
// import Volunteer from "../images/volunteer.jpg";
import  y1 from "../images/y1.jpg";
import  y2 from "../images/y2.jpg";
import  y3 from "../images/y3.jpg";


export const Events = () => {

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={y2} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={y1} alt="Second slide" />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={y3} alt="Third slide" />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
};

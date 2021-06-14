import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselBig = ({images}) => {

  return (
    <>
      <div >
        <Carousel autoPlay interval="5000" transitionTime="700">
          {images.map(img => (<div><img src={img}  alt={''}/></div>))}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselBig;
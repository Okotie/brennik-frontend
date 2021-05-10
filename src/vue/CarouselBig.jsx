import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';

const CarouselBig = ({images}) => {

  return (
    <>
      <div >
        <Carousel
          plugins={[
            'centered',
            'infinite',
            'arrows',
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 2,
              },
            },
          ]}
        >
          {images.map(img => (<img style={{height:'370px'}} src={img}  alt={''}/>))}
        </Carousel>
      </div>
    </>
  );
}

export default CarouselBig;
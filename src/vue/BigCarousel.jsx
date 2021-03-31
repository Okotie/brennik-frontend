import React, {useState} from 'react';
import '../bigCarousel.css';

const BigCarousel = () => {

  return (
    <>
      <div class="gallery js-flickity"
        data-flickity-options='{ "wrapAround": true }'>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
      </div>
    </>
  );
}

export default BigCarousel;
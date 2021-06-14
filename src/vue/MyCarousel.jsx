import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

class MyCarousel extends React.Component {
  constructor({images}) {
    super()
    this.state = {
      value: 0,
      slides:
        images.slice(0, 5).map(img => (<img src={img}  alt={''} style={{minHeight: 'auto', maxWidth: 'auto', height: '330px', margin: 'auto', display: 'block',}}/>)),
      thumbnails:
        images.slice(0, 5).map(img => (<img src={img}  alt={''} style={{height:'50px'}}/>)),
    }
    this.onchange = this.onchange.bind(this);
  }

  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Carousel
          value={this.state.value}
          slides={this.state.slides}
          onChange={this.onchange}
        />
        <Dots scroll arrows thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
    );
  }
}
export default MyCarousel;
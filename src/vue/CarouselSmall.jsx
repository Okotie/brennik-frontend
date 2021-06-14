import React, {useState} from 'react';
/*import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';*/
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  img: {
    minHeight: 'auto',
    maxWidth: 'auto',
    height: '370PX',
    margin: 'auto',
    display: 'block',
  },
}));

function Content({ index }) {
  return "Test" + index;
}
const CarouselSmall = ({images}) => {
  const classes = useStyles()

  const [value, setValue] = useState(0);

  function onChange(value) {
    setValue(value);
  }
  const onchange = (value) => {
    setValue(value);
  };

  const slides = () => {
    return [
      (<img className={classes.img} src={'https://i.pinimg.com/736x/79/81/0c/79810c5a590581159c637c8c574aab73.jpg'} alt={''}/>),
      (<img className={classes.img} src={'https://i.pinimg.com/originals/57/b7/aa/57b7aadf862a82a515cd0b03c618f8a1.jpg'} alt={''}/>),
      (<img className={classes.img} src={'https://i.pinimg.com/736x/9e/b7/eb/9eb7eb5180518f0949fbc050cd7af224.jpg'} alt={''}/>),
    ]
    //images.map(img => (<img style={{height:'400px'}} src={img}  alt={''}/>))
  };

  const thumbnails = () => {
    return [
      (<img src={'https://brainhubeu.github.io/react-carousel/static/mona-7a1ceae9bdb8c43272eb101c091c5408.jpg'} />),
      (<img src={'https://brainhubeu.github.io/react-carousel/static/scream-ee207a05c1e6fed03aafa156cc511abe.jpg'} />),
      (<img src={'https://brainhubeu.github.io/react-carousel/static/starry-night-39eed0a107ddb6c9f980eb3081a8bdd3.jpg'} />),
    ]
    //images.map(img => (<img style={{height:'400px'}} src={img}  alt={''}/>))
  };

  return (
    <>
      <div>
        {/*<Carousel
          value={value}
          onChange={onChange}
          plugins={[
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3
              }
            },
            "arrows",
            "infinite"
          ]}
        >
          <Content index={1} />
          <Content index={2} />
          <Content index={3} />
        </Carousel>
        <Dots value={value} onChange={onChange} number={3} thumbnails={thumbnails}/>*/}


        {/*<Carousel*/}
        {/*  value={value}*/}
        {/*  slides={slides}*/}
        {/*  onChange={onchange}*/}
        {/*/>*/}
        {/*<Dots number={slides.length} thumbnails={thumbnails} value={value} onChange={onchange}/>*/}
      </div>
    </>
  );
}

export default CarouselSmall;
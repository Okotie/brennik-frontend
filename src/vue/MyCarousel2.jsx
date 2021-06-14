import React, {useEffect, useState} from 'react';
/*import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';*/

const MyCarousel2 =({images})=> {

  const initialState = {
    value: 0,
    slides: [],
    thumbnails: [],
  };
  const [state, setState] = useState(initialState);

  useEffect(() => {
      setState({
        value: 0,
        slides:
          images.slice(0, 5).map(img =>
            (<img src={img}  alt={''}
                  style={{minHeight: 'auto', maxWidth: 'auto', height: '330px', width: '300px',
                    margin: 'auto', display: 'block', border: '2px solid red'}}
            />)
          ),
        thumbnails:
          images.slice(0, 5).map(img => (<img src={img}  alt={''} style={{height:'50px'}}/>)),
      });
  }, [images]);

   const onchange = (value) => {
     setState({
       value: value,
       slides: state.slides,
       thumbnails: state.thumbnails,
     });
  };
  return(
   <>
     <div>
       {/*<Carousel
         value={1}
         slides={state.slides}
         onChange={onchange}
         itemWidth={300}
       />
       <Dots scroll arrows thumbnails={state.thumbnails} value={state.value} onChange={onchange} number={state.slides.length} />*/}
     </div>
   </>
 )
}
export default MyCarousel2;
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import arrowUp from '../assets/icons/long-arrow-up2.png'


const useStyles = makeStyles(() => ({
  scrollTop: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    width: '60px',
    height: '45px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${arrowUp})`,
    backgroundSize: 'cover',
    zIndex: '1000',
    cursor: 'pointer',
    animation: 'fadeIn 0.3s',
    transition: 'opacity 0.4s',
    //filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.3))',
    opacity: '0.8',
    '&:hover' :{ 
      filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.3))',
      opacity: '1',
    },
  },

}));


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)
  const classes = useStyles();

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div>
      <div className={classes.scrollTop} onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
    </div>
  );
}

export default ScrollArrow;
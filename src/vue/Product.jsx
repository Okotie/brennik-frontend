import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css'
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
  main: {
    textDecorationLine: 'none',
    margin: '10px',
    width: '200px', 
    height: '100%',
    boxShadow: '0 0 8px rgba(100,100,100,0.1)',
    backgroundColor: 'rgba(255,255,255,1)',
    cursor: 'pointer',
    '&:hover' :{
      boxShadow: '0 0 8px rgba(100,100,100,0.3)',
      transform: 'scale(1.1)',
    },
    '&:active' :{
      transform: 'translate(1px, 1px)',
    },
  },
  containers: {
    margin: '10px',
    marginBottom: '0px',
  },
  img: {
    height: '160px',
    width: '100%',
    backgroundSize: 'cover',
  },
  info: {
    marginTop: '5px',
    margin: '0 auto',
    float: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: '0px',
    fontFamily: 'Bellota Text',
    fontSize: '14px',
    fontWeight: '600',
    color: 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontFamily: 'Montserrat',
    color: 'rgba(121,127,131,1)',
    fontSize: '15px',
    textAlign: 'right',
  },
  button: {
    border: 'none',
    fontFamily: 'Montserrat',
    width: '100%',
    height: '2em',
    marginTop: '5px',
    color: '#1a1a1a',
    textDecoration: 'none',
    fontSize: '16px',
    backgroundColor: 'rgb(205,205,205)',
    cursor: 'pointer',
    transition: 'all 0.6s ease',
    '&:hover' :{
      backgroundColor: '#a7a7a7',
    },
    '&:focus' :{
      outline: 'none !important',
    },
  },
  flagNew: {
    fontFamily: 'Bellota Text',
    height: '30px',
    marginRight: '10px',
    padding: '5px',
    backgroundColor: '#70C45B',
    clipPath:'polygon(0% 0%, 100% 0, 100% 100%, 76% 82%, 0% 100%)',
    float: 'right', 
    color: 'black',
    fontSize: '10px',
  },
  flagShadow: {
    filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.8))',
  },
  flagSoon: {
    fontFamily: 'Bellota Text',
    height: '30px',
    marginRight: '10px',
    padding: '5px',
    backgroundColor: '#FAB73D',
    clipPath:'polygon(0% 0%, 100% 0, 100% 82%, 65% 100%, 0% 82%)',
    float: 'right', 
    color: 'black',
    fontSize: '10px',
  },
}));


const Product =({ id, name, price, flagNew, flagSoon, image, onClick })=> {
  const classes = useStyles();
  return (

    <Link className={classes.main}  to={`/products/${id}`}>
      {Boolean(flagNew) && (
        <div className={classes.flagShadow}>
          <div className={classes.flagNew}>New</div>
        </div>
      )}
      {Boolean(flagSoon) && (
        <div className={classes.flagShadow}>
          <div className={classes.flagSoon}>Soon</div>
        </div>
      )}

      <div className={classes.containers}>

        <div className={classes.img} style={{backgroundImage: `url(${image})`}}/>
        <div className={classes.info}>
          <div className={classes.title}>{name}</div>
          <div className={classes.price}>{price + ' ₽'}</div>
        </div>

      </div>
      <button className={classes.button}>в корзину</button>
    </Link>

  );
}

export default Product;
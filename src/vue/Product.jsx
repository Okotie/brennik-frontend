import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css'
import {Link} from "react-router-dom";
import AddToShop from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(() => ({
  main: {
    textDecorationLine: 'none',
    margin: '10px',
    width: '200px', 
    height: '100%',
    boxShadow: '0 0 3px rgba(0,0,0,0.4)',
    backgroundColor: 'rgba(255,255,255,1)',
    cursor: 'pointer',
    '&:hover' :{
      boxShadow: '0 0 8px rgba(0,0,0,0.6)',
      transform: 'scale(1.05)',
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
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontWeight: '400',
    color: 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    color: 'rgba(121,127,131,1)',
    fontSize: '15px',
    textAlign: 'right',
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


const Product =({ id, name, price, flagNew, flagSoon, image })=> {
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
        <button style={{width: '100%'}} className={'buttonViolet'}>
          в корзину<AddToShop style={{float: 'right'}} />
        </button>

      </div>
    </Link>

  );
}

export default Product;
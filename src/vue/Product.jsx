import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css'
import {Link} from "react-router-dom";
import ButtonBuy from "./product/ButtonBuy";

const useStyles = makeStyles(() => ({
  main: {
    margin: '10px',
    width: '200px', 
    height: '100%',
    boxShadow: '0 0 3px rgba(0,0,0,0.2)',
    borderRadius: '5px',
    backgroundColor: 'rgba(255,255,255,1)',
    cursor: 'pointer',
    '&:hover' :{
      transform: 'scale(1.012)',
    },
    '&:active' :{
      transform: 'translate(1px, 1px)',
    },
  },
  containers: {
    margin: '10px',
    marginBottom: '0px',
  },
  link: {
    textDecorationLine: 'none',
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
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: 'black',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  flagNew: {
    fontFamily: 'Roboto',
    fontWeight: '400',
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
    filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.5))',
  },
  flagSoon: {
    fontFamily: 'Roboto',
    fontWeight: '400',
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

const Product =({product})=> {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      {Boolean(product.flagNew) && (
        <div className={classes.flagShadow}>
          <div className={classes.flagNew}>New</div>
        </div>
      )}
      {Boolean(product.flagSoon) && (
        <div className={classes.flagShadow}>
          <div className={classes.flagSoon}>Soon</div>
        </div>
      )}

      <div className={classes.containers}>


        <Link className={classes.link} to={`/products/${product.vendorCode}`}>
          <div className={classes.img} style={{backgroundImage:  `url(http://45.147.179.34:8080/brennik/product/image/${product.images[0]})`}}/>
          <div className={classes.info}>
            <div className={classes.title}>{product.name}</div>
            <div style={{textAlign: 'right',}} className={'price'}>{product.price + ' ₽'}</div>
          </div>
        </Link>
        <ButtonBuy product={product}/>

      </div>
    </div>

  );
}

export default Product;
import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css'
import Product from './Product';
import axios from "axios";
import {getProductAPI} from "./api/api";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: '30px',
  },
  title: {
    color: '#3b3b3b',
    fontFamily: 'Raleway',
    textAlign: 'center',
  },
  products: {
    display: 'flex', 
    justifyContent: 'space-evenly',
    flexWrap: 'wrap', 
  },
  hr: {
    width: '40%', 
  },
  
}));


export default function ProductList({type}) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const title = (type) => {
    return(
      ((type === 'NEW') && 'новинки') || ((type === 'SOON') && 'доступно к предзаказу')
    )
  }

  useEffect(() => {
    ((type === 'NEW') && getProductAPI.getNewProduct(setProducts)) ||
    ((type === 'SOON') && getProductAPI.getSoonProduct(setProducts));
  }, []);


  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="h4">{title(type)}</Typography>
      <hr className={classes.hr}/>
      <div className={classes.products}>


        {products.map((product) => (
          <Product product={product}/>
        ))}

      </div>
      <hr/>
    </div>
  );
}
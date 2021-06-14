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
  const [product, setProduct] = useState([]);

  const title = (type) => {
    return(
      ((type === 'NEW') && 'новинки') || ((type === 'SOON') && 'доступно к предзаказу')
    )
  }

  useEffect(() => {
    ((type === 'NEW') && getProductAPI.getNewProduct(setProduct)) ||
    ((type === 'SOON') && getProductAPI.getSoonProduct(setProduct));
  }, []);


  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="h4">{title(type)}</Typography>
      <hr className={classes.hr}/>
      <div className={classes.products}>


        {product.map(({ vendorCode, images, description,name, ...props }) => (
          <Product
            vendorCode={vendorCode}
            name={name}
            price={props.price}
            image={images[0]}
          />
        ))}

      </div>
      <hr/>
    </div>
  );
}
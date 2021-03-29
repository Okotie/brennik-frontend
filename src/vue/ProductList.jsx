import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css'
import Product from './Product';
import {products} from "../assets/mock/product";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: '30px',
  },
  title: {
    color: '#3b3b3b',
    fontFamily: 'Bellota Text',
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
  const [selectedProduct, setselectedProduct] = useState(false);
  const handleClick = (product) => () => {
    setselectedProduct(product);
  };

  const title = (type) => {
    return(
      ((type === 'NEW') && 'новинки') || ((type === 'SOON') && 'доступно к предзаказу')
    )
  }

  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="h4">{title(type)}</Typography>
      <hr className={classes.hr}/>
      <div className={classes.products}>


        {products.map(({ id, imgs, description,name, ...props }) => (
          <Product
            onClick={handleClick({ imgs, description, ...props })}
            id={id}
            name={name}
            price={props.price}
            //flagNew={checkFlag(props.flagNew)}
            //flagSoon={checkFlag(props.flagSoon)}
            image={imgs[0]}
          />
        ))}

      </div>
      <hr/>
    </div>
  );
}
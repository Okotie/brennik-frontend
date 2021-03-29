import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import {products} from "../assets/mock/product";
import Product from "./Product";


const useStyles = makeStyles((theme) => ({
  container: {
    //border: 'solid black',
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  sidebar: {
    height: '',
    //border: 'solid pink',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 3px rgba(0,0,0,0.4)',
  },
  main: {
    //border: 'solid blue',
  },
  products: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
}));

const ProductPage = () => {
  const classes = useStyles();
  const [selectedProduct, setselectedProduct] = useState(false);

  const handleClick = (product) => () => {
    setselectedProduct(product);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>sidebar</div>
        <div className={classes.main}>
          <div className={classes.products}>
            {products.map(({ id, imgs, description,name, ...props }) => (
              <Product
                onClick={handleClick({ imgs, description, ...props })}
                id={id}
                name={name}
                price={props.price}
                flagNew={props.flagNew}
                flagSoon={props.flagSoon}
                image={imgs[0]}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
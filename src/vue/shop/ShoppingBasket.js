import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {products} from "../../assets/mock/product";
import Typography from "@material-ui/core/Typography";
import BasketProduct from "./BasketProduct";
import {BasketContext} from "../cart/BasketProvider";
import {getProductAPI} from "../api/api";


const useStyles = makeStyles(() => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '2%',
    fontSize: '17px',
    fontFamily: 'Raleway',
    alignItems: 'center',
    border: '1px solid blue',
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
  title: {
    color: '#3b3b3b',
    fontFamily: 'Raleway',
    textAlign: 'center',
    border: '1px solid red'
  },
}));

const ShoppingBasket = () => {
  const classes = useStyles();
  const { basket, count, price } = React.useContext(BasketContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductAPI.getProductsByCodes(basket.map(b => (b.id)), setProducts);
  }, []);

  return(
    <>
      {basket.length > 0 &&
      <div className={classes.container}>
        <Typography className={classes.title} style={{textAlign: 'left',}} variant="h4">
          корзина
        </Typography>
        <div className={classes.columns}>
          <div style={{border: '1px solid red',}}>
            <Typography className={classes.title} variant="h5">
              добавленные товары:
            </Typography>
            <div>
              {products.map((product) => (
                <div >
                  <div className={classes.title}>
                    <BasketProduct
                      product={product}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{border: '1px solid green',  }}>
            <Typography className={classes.title} variant="h6">
              ваш заказ:
              <Typography className={'price'} style={{fontWeight: 600}} variant="subtitle1">
                {'количество товаров: ' + count  + ' шт.'}
              </Typography>
              <Typography className={'price'} style={{fontWeight: 800}} variant="subtitle1">
                {price  + ' ₽'}
              </Typography>
            </Typography>
          </div>
        </div>

      </div>
      }
      {!basket.length > 0 &&
      <div className={classes.container}>
        <Typography className={classes.title} style={{textAlign: 'center',}} variant="h4">
          В корзине пока ничего нет
         </Typography>
      </div>
      }
    </>
  )
};

export default ShoppingBasket;
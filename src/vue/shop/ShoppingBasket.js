import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
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
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
  title: {
    color: '#3b3b3b',
    fontFamily: 'Raleway',
    textAlign: 'center',
  },
}));

const ShoppingBasket = () => {
  const classes = useStyles();
  const { basket, count, price } = React.useContext(BasketContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductAPI.getProductsByCodes(basket.map(b => (b.id)), setProducts);
  }, [basket]);

  return(
    <>
      {basket.length > 0 &&
      <div className={classes.container}>
        <Typography className={classes.title} style={{textAlign: 'left',}} variant="h4">
          корзина
        </Typography>
        <div className={classes.columns}>
          <div>
            <Typography className={classes.title} variant="h5">
              добавленные товары:
            </Typography>
            <div>

              {products.map(
                (product) => (
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
          <div>
            <Typography className={classes.title} variant="h6">
              ваш заказ:
              <Typography className={'price'} style={{fontWeight: 600}} variant="subtitle1">
                {'количество товаров: ' + count  + ' шт.'}
              </Typography>
              <Typography className={'price'} style={{fontWeight: 800}} variant="subtitle1">
                {'общая стоимость: ' + price  + ' ₽'}
              </Typography>

              <button style={{width: '80%'}} className={'buttonGreen'}
                      onClick={() => {}}>оформить заказ</button>
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
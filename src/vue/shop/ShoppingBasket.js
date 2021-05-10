import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {products} from "../../assets/mock/product";
import Typography from "@material-ui/core/Typography";
import BasketProduct from "./BasketProduct";


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
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")));

  useEffect(() => {
    setBasket(basket);
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  return(
    <>
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
              {products.map(
                (product) => (basket.filter(p => p.id === product.id).length > 0) && (
                     <div >
                         <div className={classes.title}>
                           <BasketProduct
                             basket={basket}
                             setBasket={setBasket}
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
              {/*<Typography className={'price'} style={{fontWeight: 800}} variant="subtitle1">{price * countFromBasket + ' ₽'}</Typography>*/}
            </Typography>
          </div>
        </div>

      </div>

    </>
  )
};

export default ShoppingBasket;
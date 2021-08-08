import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {getProductAPI} from "../api/api";
import OrderProduct from "./OrderProduct";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
  title: {
    color: '#3b3b3b',
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'center',
  },
}));

const CurrentOrders = ({order}) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductAPI.getProductsByCodes(order.products.map(p => (p.id)), setProducts);
  }, []);

  const getOrderProduct = (id) => {
    return order.products.filter(p => p.id === id).map(p => p)[0];
  };

  return(
    <>
      <Typography className={classes.title} style={{textAlign: 'left',}} variant="h6">
        {'Заказ № ' + order.id}
      </Typography>
      <Typography className={classes.title} style={{textAlign: 'left',}} variant="h6">
        {'стоимость заказа: ' + order.price + ' ₽'}
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection:'row',
          flexWrap: 'wrap'
        }}
      >
        {products.map(
          (prod) => (
            <div>
              <div className={classes.title}>
                <OrderProduct
                  product={prod}
                  count={getOrderProduct(prod.vendorCode).count}
                />
              </div>
            </div>
          ))}
      </div>
    </>
  )
};

export default CurrentOrders;
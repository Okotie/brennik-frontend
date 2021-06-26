import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {getProductAPI} from "../api/api";
import OrderProduct from "./OrderProduct";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
  title: {
    color: '#3b3b3b',
    fontFamily: 'Raleway',
    textAlign: 'center',
  },
}));

const CurrentOrders = ({order}) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductAPI.getProductsByCodes(order.products.map(p => (p.id)), setProducts);
  }, []);

  return(
    <>
      <Typography className={classes.title} style={{textAlign: 'left',}} variant="h6">
        {'заказ № ' + order.id}
      </Typography>
      {products.map(
        (prod) => (
          <div>
            <div className={classes.title}>
              <OrderProduct
                product={prod}
                count={prod.count}
              />
            </div>
          </div>
        ))}
    </>
  )
};

export default CurrentOrders;
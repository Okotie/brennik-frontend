import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DeleteIcon from '@material-ui/icons/Delete';
import {BasketContext} from "../cart/BasketProvider";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 800,
  },
  image: {
    width: 90,
    height: 90,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  link: {
    textDecorationLine: 'none',
    color: 'black'
  },
}));

export default function BasketProduct({product}) {
  const classes = useStyles();
  const { basket, addToBasket, removeItem, decrementToBasket } = React.useContext(BasketContext);

  const countFromBasket = basket.find((p) => p.id === product.vendorCode).count;
  const disabledAddFromBasket = basket.find((p) => p.id === product.vendorCode).count === product.countOnShop;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={7} alignItems='center'>
          <Grid item>
            <Link className={classes.link} to={`/products/${product.vendorCode}`}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} src={product.images[0]}/>
              </ButtonBase>
            </Link>
          </Grid>
          <Grid item xs container direction="column">
            <Link className={classes.link} to={`/products/${product.vendorCode}`}>
              <Typography gutterBottom variant="subtitle1" style={{
                fontFamily: 'Montserrat',
                textAlign: 'left',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '200px',
              }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{
                fontFamily: 'Montserrat',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '230px',
                textAlign: 'left',
              }}>
                {product.description}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography className={'price'} style={{fontWeight: 800,}} variant="subtitle1">{product.price + ' ₽'}</Typography>
          </Grid>
          <Grid item>
            <div>
              <button onClick={() => {decrementToBasket(product.vendorCode)}}>-</button>
              <span>{'кол-во: ' + countFromBasket}</span>
              <button onClick={() => {addToBasket(product)}} disabled={disabledAddFromBasket}
                      title={disabledAddFromBasket && 'К сожалению в магазине нет столько товара'}>+</button>
            </div>
          </Grid>
          <Grid item>
            <DeleteIcon color="secondary" style={{ cursor: 'pointer'}} onClick={() => {removeItem(product.vendorCode)}}/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
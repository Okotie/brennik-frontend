import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DeleteIcon from '@material-ui/icons/Delete';

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
}));

export default function BasketProduct({basket, setBasket, product}) {
  const classes = useStyles();

  const decrementFromBasket = () => {
    setBasket(
      basket.find((p) => p.id === product.id)?.count === 1
        ? basket.filter((p) => p.id !== product.id)
        : basket.map((p) =>
          p.id === product.id
            ? {
              ...p,
              count: p.count - 1
            }
            : p
        )
    );
  };

  const addFromBasket = () => {
    setBasket(
      basket.map((p) =>
        (p.id === product.id) && (p.count < product.countOnShop)
          ? {
            ...p,
            count: p.count + 1
          }
          : p
      )
    );
  };

  const clearFromBasket = () => {
    setBasket(basket.filter((p) => p.id !== product.id));
  };

  const countFromBasket = basket.find((p) => p.id === product.id).count;
  const disabledAddFromBasket = basket.find((p) => p.id === product.id).count === product.countOnShop;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={7} alignItems='center'>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product.imgs[0]}/>
            </ButtonBase>
          </Grid>
          <Grid item xs container direction="column">
            <Typography gutterBottom variant="subtitle1" style={{
              fontFamily: 'Montserrat',
              textAlign: 'left',
            }}>
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" style={{
              fontFamily: 'Montserrat',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '400px',
              textAlign: 'left',
            }}>
              {product.description}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={'price'} style={{fontWeight: 800}} variant="subtitle1">{product.price * countFromBasket + ' ₽'}</Typography>
          </Grid>
          <Grid item>
            <div>
              <button onClick={decrementFromBasket}>-</button>
              <span>{'кол-во: ' + countFromBasket}</span>
              <button onClick={addFromBasket} disabled={disabledAddFromBasket} title={disabledAddFromBasket && 'К сожалению в магазине нет столько товара'}>+</button>
            </div>
          </Grid>
          <Grid item>
            <DeleteIcon color="secondary" style={{ cursor: 'pointer'}} onClick={clearFromBasket}/>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
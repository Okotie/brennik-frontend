import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '10px',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 350,
  },
  image: {
    width: 30,
    height: 30,
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

export default function OrderProduct({product, count}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1} alignItems='center'>
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
                fontFamily: 'Roboto',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '200px',
                fontSize: '12px',
              }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{
                fontFamily: 'Roboto',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '130px',
                textAlign: 'left',
                fontSize: '10px',
              }}>
                {product.description}
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography className={'price'} style={{fontWeight: 800, fontSize: '12px',}}
                        variant="subtitle1">{product.price + ' ₽'}</Typography>
          </Grid>
          <Grid item>

            <span style={{width: '40%', margin: '3px', fontSize: '12px',}}>{count + ' шт.'}</span>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
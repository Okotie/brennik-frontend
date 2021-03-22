import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css'
import Product from './Product';

const useStyles = makeStyles(() => ({
  main: {
    marginTop: '30px',
  },
  title: {
    color: '#3b3b3b', 
    fontFamily: 'JetBrains Mono', 
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


export default function New1Products() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant="h4">новые поступления</Typography>
      <hr className={classes.hr}/>

      <div className={classes.products}>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
      </div>
      <hr/>
    </div>
  );
}
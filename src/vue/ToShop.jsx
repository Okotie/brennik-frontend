import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../index.css'

const useStyles = makeStyles(() => ({
  main: {
    //transform: 'rotate(90deg)',
    margin: '20px', 
    width: '70px',
    //height: '100px',
    //clipPath:'polygon(0% 80%, 50% 70%, 100% 80%, 100% 100%, 0% 100%)',
    filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.5))',
    cursor: 'pointer',
  },
  polygons: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center', 
    clipPath:'polygon(0% 0%, 70% 0, 100% 50%, 70% 100%, 0% 100%)',
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '100%',
    '&:hover' :{
      backgroundColor: '#9966FF',
    },
  },
  title: {
    border: 'solid black',
    fontFamily: 'JetBrains Mono',
    color: '#330066',
    transform: 'rotate(90deg)',
  },
  
}));


export default function ToShop() {
  const classes = useStyles();
  return (
    
    <div className={classes.main}>
      <div className={classes.polygons}>
        <div className={classes.title}>в магазин</div>
      </div>
    </div>
  );
}
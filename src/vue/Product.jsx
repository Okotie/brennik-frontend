import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ScrollArrow from './ScrollArrow';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import shopImg from '../assets/img/saga.jpg'
import clubImg from '../assets/img/club.jpg'
import '../index.css'

const useStyles = makeStyles(() => ({
  main: {
    margin: '20px', 
    width: '200px', 
    height: '260px',
    boxShadow: '0 0 3px rgba(0,0,0,0.4)',
    backgroundColor: 'white',
    cursor: 'pointer',
    '&:hover' :{
      boxShadow: '0 0 8px rgba(0,0,0,0.6)',
    },
  },
  containers: {
    margin: '10px',
  },
  img: {
    height: '160px', 
    backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0657/9717/products/viking-warband_d1fdde27-414b-4687-9a2a-f0338b4d5fcb.jpg?v=1571438779'})`, 
    backgroundSize: 'cover', 
  },
  info: {
    paddingTop: '5px',
    margin: '0 auto',
    float: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
  },
  title: {
    fontFamily: 'JetBrains Mono', 
    fontSize: '14px', 
    fontWeight: '800',
    color: '#3b3b3b',
  },
  // subtitle: {
  //   fontFamily: 'JetBrains Mono', 
  //   fontSize: '12px', 
  //   //fontWeight: 'bold',
  //   //fontStyle: 'italic', 
  //   color: '#CFCFCF',
  // },
  price: {
    fontFamily: 'Segoe UI', 
    marginTop: '10px',
    color: '#0A0A2A',
    fontSize: '12px', 
    fontWeight: '700', 
    //textAlign: 'right',
  },
  info__button: {
    //float: 'right', 
  },
  button: {
    fontFamily: 'JetBrains Mono', 
    //float: 'right', 
    marginTop: '5px',
    border: 'none',
    color: 'white',
    padding: '4px 15px',
    textDecoration: 'none',
    fontSize: '12px',
    Overflow: 'hidden',
    backgroundColor: '#9966FF',
    boxShadow: '2px 2px 2px rgba(0,0,0,0.4)',
    cursor: 'pointer',
    transition: 'all 0.6s ease',
    '&:hover' :{
      boxShadow: '1px 1px 2px rgba(0,0,0,0.4)',
      backgroundColor: '#6633CC',
    },
    '&:active' :{
      boxShadow: '1px 1px 2px rgba(0,0,0,0.4)',
      transform: 'translate(3px, 3px)',
      transform: 'translateY(1px)',
    },
    '&:focus' :{
      outline: 'none !important',
    },
  },
  flagNew: {
    fontFamily: 'JetBrains Mono', 
    height: '30px',
    marginRight: '10px',
    padding: '5px',
    backgroundColor: '#70C45B',
    clipPath:'polygon(0% 0%, 100% 0, 100% 100%, 76% 82%, 0% 100%)',
    float: 'right', 
    color: 'black',
    //textShadow: 'black 0 0 3px',
    fontSize: '10px',
  },
  flagShadow: {
    filter: 'drop-shadow(2px 2px 1px rgba(0,0,0,0.8))',
  },
  flagSoon: {
    fontFamily: 'JetBrains Mono', 
    height: '30px',
    marginRight: '10px',
    padding: '5px',
    backgroundColor: '#FAB73D',
    clipPath:'polygon(0% 0%, 100% 0, 100% 82%, 65% 100%, 0% 82%)',
    float: 'right', 
    color: 'black',
    //textShadow: 'black 0 0 2px',
    fontSize: '10px',
  },
}));


export default function Product() {
  const classes = useStyles();
  return (
    <div className={classes.main}>

      <div className={classes.flagShadow}>
        <div className={classes.flagNew}>New</div>
      </div>

      <div className={classes.flagShadow}>
        <div className={classes.flagSoon}>Soon</div>
      </div>

      <div className={classes.containers}>
        <div className={classes.img}></div>
        <div className={classes.info}>
          <div className={classes.text}>
            <div className={classes.title}> 
              Название товара
            </div>
            {/* <div className={classes.subtitle}> 
              краткое описание или что-нибудь
            </div> */}
          </div>
          <div className={classes.info__button}>
            <div className={classes.price}>
              10 000 руб.
            </div>
            <button className={classes.button}>
              в корзину
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
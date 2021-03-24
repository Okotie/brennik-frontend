import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ScrollArrow from '../vue/ScrollArrow';
import shopImg from '../assets/img/shop.jpg'
import '../index.css'
import NewProductsBlock from './ProductList';
import ProductPage from './ProductPage';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Switch} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'rgb(255, 255, 255, 0.8)',
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(7px)',
  },
  buttonMenu: {
    fontFamily: 'JetBrains Mono',
    position: 'relative',
    padding: '0.7em 1em',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
    margin: '0em 0.8em',
    border: '1px solid',
    transition: 'all 0.6s ease',
    borderBottomColor: 'black',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    borderLeftColor: 'transparent',
    '&:hover': {
      backgroundColor: '#FAFAFA',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline/>
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography style={{color: '#330066', fontFamily: 'JetBrains Mono', margin: '0 25px 0 0 '}} variant="h3">
            БРЕННИК
          </Typography>

          <Link to={'/'}>
            <button className={classes.buttonMenu}>главная</button>
          </Link>

          <Link to={'/products'}>
            <button className={classes.buttonMenu}>магазин</button>
          </Link>

          <Link to={'/'}>
            <button className={classes.buttonMenu}>новости</button>
          </Link>

          <Link to={'/'}>
            <button className={classes.buttonMenu}>контакты</button>
          </Link>

        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
    </>
  );
}

export default Header;
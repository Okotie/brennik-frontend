import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../index.css'
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Badge, IconButton} from "@material-ui/core";
import {BasketContext} from "./cart/BasketProvider";

const useStyles = makeStyles((theme) => ({
  header: {
    background: 'rgb(255, 255, 255, 0.8)',
    boxShadow: '0 0 5px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(7px)',
  },
  buttonMenu: {
    float: 'right',
    fontFamily: 'JetBrains Mono',
    padding: '0.7em 1em',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    fontSize: '16px',
    margin: '0em 0.8em',
    border: '1px solid',
    transition: 'all 0.6s ease',
    borderBottomColor: '#C9C9C9',
    borderRightColor: 'transparent',
    borderTopColor: '#C9C9C9',
    borderLeftColor: 'transparent',
    '&:hover': {
      backgroundColor: '#FAFAFA',
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
    },
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Header = () => {
  const classes = useStyles();
  const { count } = React.useContext(BasketContext);

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

          <Link to={'/shop'}>
            <button className={classes.buttonMenu}>магазин</button>
          </Link>

          <Link to={'/news'}>
            <button className={classes.buttonMenu}>новости</button>
          </Link>

          <Link to={'/about'}>
            <button className={classes.buttonMenu}>о нас</button>
          </Link>

          <Link to={'/contacts'}>
            <button className={classes.buttonMenu}>контакты</button>
          </Link>

          <Link style={{margin: '0 0 0 auto'}} to={'/shoppingBasket'}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={count} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
    </>
  );
}

export default Header;
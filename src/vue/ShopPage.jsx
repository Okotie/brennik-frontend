import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Product from "./Product";
import {getProductAPI} from "./api/api";
import {FiltersContext} from "./filters/FiltersProvider";
import Filters from "./filters/Filters";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    display: '-webkit-flex',
    fontSize: '17px',
    fontFamily: 'Roboto',
  },
  sidebar: {
    height: '100%',
    minWidth: '20%',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0 0 3px rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  main: {
  },
  products: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
}));

const ShopPage = () => {
  const classes = useStyles();

  const { filters, filtersToBackend } = React.useContext(FiltersContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductAPI.getProductByFilters(filtersToBackend, setProducts);
  }, [filtersToBackend]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Filters filters={filters}/>
        </div>

        <div className={classes.main}>
          {/*<div className={classes.navTop}>*/}
          {/*  <form className={classes.search} style={{maxWidth: '400px',}}>*/}
          {/*    <input className={classes.input} type="text" placeholder="Поиск..."/>*/}
          {/*    <button type="submit"  className={classes.inputButton}>*/}
          {/*      <i className={'fas fa-search'}/>*/}
          {/*      <SearchIcon style={{verticalAlign: 'middle',}}/>*/}
          {/*    </button>*/}
          {/*  </form>*/}
          {/*</div>*/}
          <div className={classes.products}>
            {products.map((product) => (<Product product={product}/>))}

          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
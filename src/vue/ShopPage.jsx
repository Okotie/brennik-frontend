import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Product from "./Product";
import {getProductAPI} from "./api/api";
import {FiltersContext} from "./filters/FiltersProvider";
import Filters from "./filters/Filters";
import Pagination from "@material-ui/lab/Pagination";

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
    minWidth: '350px',
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
  const { filters, filtersToBackend, dischargeFilter } = React.useContext(FiltersContext);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState({});

  useEffect(() => {
    getProductAPI.getProductByFilters(filtersToBackend, 0, setProducts, setPage);
  }, [filtersToBackend]);

  const handleChange = (event, value) => {
    getProductAPI.getProductByFilters(filtersToBackend, value - 1, setProducts, setPage);
  };

  const handleDischarge = () => {
    dischargeFilter();
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Filters filters={filters}/>
          <div
            style={{textAlign: 'center'}}
          >
            <button
              className={'buttonWhite'}
              onClick={handleDischarge}
            >
              сбросить фильтры
            </button>
          </div>
        </div>

        <div className={classes.main}>
          <Pagination count={page.totalPages} page={page.numberPage ?? ""} onChange={handleChange} />
          <div className={classes.products}>
            {
              (products !== null && products.length > 0 && products.map((product) => (<Product product={product}/>))) ||
              (<div style={{margin: '15px'}}> Ничего не найдено</div>)
            }
          </div>
          <Pagination count={page.totalPages} page={page.numberPage ?? ""} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

export default ShopPage;
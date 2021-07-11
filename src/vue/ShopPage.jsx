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
  const [page, setPage] = useState({});
  const [pageNumber, setPageNumber] = React.useState(0);

  useEffect(() => {
    getProductAPI.getProductByFilters(filtersToBackend, pageNumber - 1, setProducts, setPage);
    setPageNumber(page.numberPage)
  }, [filtersToBackend]);

  const handleChange = (event, value) => {
    getProductAPI.getProductByFilters(filtersToBackend, value - 1, setProducts, setPage);
    setPageNumber(value);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <Filters filters={filters}/>
        </div>

        <div className={classes.main}>
          <Pagination count={page.totalPages} page={page.numberPage ?? ""} onChange={handleChange} />
          <div className={classes.products}>
            {products.map((product) => (<Product product={product}/>))}

          </div>
          <Pagination count={page.totalPages} page={page.numberPage ?? ""} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

export default ShopPage;
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: '10%',
    marginRight: '10%',
  },
  productPage: {
    marginLeft: '10%',
    marginRight: '10%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  productImage: {
    border: 'solid red',
    height: '500px',
    backgroundImage: `url(${'https://cdn.shopify.com/s/files/1/0657/9717/products/viking-warband_d1fdde27-414b-4687-9a2a-f0338b4d5fcb.jpg?v=1571438779'})`,
    backgroundSize: 'cover',
  },
  productBriefInfo: {
    border: 'solid black',
  },
  productTitle: {
    border: 'solid black',
    fontFamily: 'JetBrains Mono',
    margin: '10px',
    fontSize: '14px',
    fontWeight: '800',
    color: '#3b3b3b',
  },
  productDescription: {
    border: 'solid black',
    fontFamily: 'JetBrains Mono',
    margin: '10px',
    fontSize: '12px',
    color: '#3b3b3b',
  },
  productPrice: {
    border: 'solid black',
    fontFamily: 'Segoe UI',
    margin: '10px',
    color: '#0A0A2A',
    fontSize: '12px',
    fontWeight: '700',
  },
  productCountInfo: {
    border: 'solid black',
    fontFamily: 'Segoe UI',
    margin: '10px',
    color: '#0A0A2A',
    fontSize: '12px',
    fontWeight: '700',
  },
  productCarouselImgs: {
    border: 'solid blue',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    height: '300px',
  },
  productFullInfo: {
    border: 'solid pink',
    gridColumnStart: '1',
    gridColumnEnd: '3',
    height: '300px',
  },
}));


const ProductPage = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.productPage}>

          <div className={classes.productImage}>
            <div className={classes.productCarouselImgs}></div>
          </div>

          <div className={classes.productBriefInfo}>
            <div className={classes.productTitle}>Название</div>
            <div className={classes.productDescription}>Описание товара</div>
            <div className={classes.productCountInfo}>на складе - много</div>
            <div className={classes.productPrice}>12458 руб.</div>
          </div>

          <div className={classes.productFullInfo}></div>
        </div>
      </div>

    </>
  );
}

export default ProductPage;
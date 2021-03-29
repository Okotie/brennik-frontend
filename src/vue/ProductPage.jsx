import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import {products} from "../assets/mock/product";


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2%',
    marginLeft: '10%',
    marginRight: '10%',
    fontSize: '17px',
  },
  productPage: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  productBriefInfo: {
    textAlign: 'left'
  },
  productTitle: {
    fontFamily: 'Montserrat',
    margin: '10px',
    fontSize: '25px',
    fontWeight: '800',
    color: '#3b3b3b',
  },
  productCharacteristics: {
    fontFamily: 'Raleway',
    fontWeight: '500',
    margin: '10px',
    color: '#131313',
  },
  productPrice: {
    fontFamily: 'Montserrat',
    color: 'rgba(121,127,131,1)',
    margin: '10px',
    fontSize: '22px',
  },
  productCountInfo: {
    fontFamily: 'Segoe UI',
    margin: '10px',
    color: '#0A0A2A',
    fontSize: '12px',
    fontWeight: '700',
  },
  productButtonBuy: {
    margin: '10px',
    border: 'none',
    fontFamily: 'Montserrat',
    height: '2em',
    color: '#ffffff',
    padding: '0 10px 0 10px',
    textDecoration: 'none',
    fontSize: '16px',
    backgroundColor: '#9966FF',
    cursor: 'pointer',
    transition: 'all 0.6s ease',
    '&:hover' :{
      backgroundColor: '#6633CC',
    },
    '&:focus' :{
      outline: 'none !important',
    },
  },
  productCarouselImgs: {
    height: '400px',
    overflow: 'hidden',

  },
  img: {
    minHeight: 'auto',
    maxWidth: 'auto',
    height: '370PX',
    margin: 'auto',
    display: 'block',
  },
  productFullInfo: {
    marginTop: '10px',
    gridColumnStart: '1',
    gridColumnEnd: '3',
  },
  productDescription: {
    margin: '10px',
    fontFamily: 'Raleway',
  },
}));


const Item= (props)=> {
  return (
    <Paper>
      <div style={{backgroundImage: `url(${props.item.img})`}}/>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  )
}


const ProductPage = ({productId}) => {
  const classes = useStyles();

  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: 'https://cdn.shopify.com/s/files/1/0657/9717/products/viking-warband_d1fdde27-414b-4687-9a2a-f0338b4d5fcb.jpg?v=1571438779'
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: 'https://cdn.shopify.com/s/files/1/0657/9717/products/viking-warband_d1fdde27-414b-4687-9a2a-f0338b4d5fcb.jpg?v=1571438779'
    }
  ]


  return (
    <>
      {products.map(({id, name, description, price, flagSoon, flagNew, imgs}) => (id === 4) && (
        <div className={classes.container}>
          <div className={classes.productPage}>
            <div className={classes.productCarouselImgs}>
              <Carousel>{imgs.map(
                img => //<div className={classes.img} style={{backgroundImage: `url(${img})`}}/>)}
                  <img className={classes.img} src={img} alt={''}/>)}
              </Carousel>
            </div>

            <div className={classes.productBriefInfo}>


              <div className={classes.productTitle}>{name}</div>
              <div className={classes.productCharacteristics}>
                Характеристики:<br/>
                - вес<br/>
                - ширина<br/>
                - высота<br/>
              </div>
              <div className={classes.productCountInfo}>на складе - много</div>
              <div className={classes.productPrice}>{price + ' ₽'}</div>
              <button className={classes.productButtonBuy}>в корзину</button>
            </div>

            <div className={classes.productFullInfo}>
              <hr/>
              <div className={classes.productTitle}>Описание</div>
              <div className={classes.productDescription}>{description}</div>
            </div>
            <div className={classes.productFullInfo}>
              <hr/>
              <div className={classes.productTitle}>Комплектация</div>
              <div className={classes.productDescription}>
                - 72 квадрата местности<br/>
                - 1 дорожка подсчёта очков<br/>
                - 40 фишек подданных<br/>
              </div>
            </div>
          </div>
        </div>
      ))}


    </>
  );
}

export default ProductPage;
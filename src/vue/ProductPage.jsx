import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Carousel from 'react-material-ui-carousel'
import {products} from "../assets/mock/product";
import AddToShop from '@material-ui/icons/AddShoppingCart';


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
    fontWeight: '800',
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
  flagNew: {
    margin: '10px',
    color: '#70C45B',
    fontWeight: '800',
  },
  flagSoon: {
    margin: '10px',
    color: '#FAB73D',
    fontWeight: '800',
  },
}));

const ProductPage = ({match}) => {
  const classes = useStyles()
 
  return (
    <>
      {products.map(({id, name, description, price, flagSoon, flagNew, imgs}) => (id === Number(match.params.productId)) && (
        <div className={classes.container}>
          <div className={classes.productPage}>
            <div className={classes.productCarouselImgs}>
              <Carousel>{imgs.map(img => <img className={classes.img} src={img} alt={''}/>)}</Carousel>
            </div>

            <div className={classes.productBriefInfo}>

              <div className={classes.productTitle}>{name}</div>
              {Boolean(flagNew) && (<div className={classes.flagNew}>Новинка</div>)}
              {Boolean(flagSoon) && (<div className={classes.flagSoon}>Скоро в продаже</div>)}
              <div className={classes.productCharacteristics}>
                Характеристики:<br/>
                - вес<br/>
                - ширина<br/>
                - высота<br/>
              </div>
              <div className={classes.productCountInfo}>на складе - много</div>
              <div className={classes.productPrice}>{price + ' ₽'}</div>
              <button className={'buttonViolet'}>
                в корзину <AddToShop style={{float: 'right', marginLeft: '0.5em'}} />
              </button>
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
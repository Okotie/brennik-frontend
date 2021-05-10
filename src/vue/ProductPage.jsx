import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import {products} from "../assets/mock/product";
import AddToShop from '@material-ui/icons/AddShoppingCart';
import CarouselSmall from './CarouselSmall'
import MyCarousel from './MyCarousel'
import Tabs from './Tabs'

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
    textAlign: 'left',
    marginLeft: '10px',
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
  productCountInfo: {
    fontFamily: 'Segoe UI',
    margin: '10px',
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
  const classes = useStyles();

  const tabContent = (description) => (
    [
      { title: 'Описание', content: description },
      { title: 'Комплектация', content: '- 72 квадрата местности ' + <br/> +
          '- 1 дорожка подсчёта очков' + <br/> +
          '- 40 фишек подданных' },
    ]
  );

  const changeLocalStorageBasket = () => {
    const basket = JSON.parse(
      localStorage.getItem("basket") || "[]"
    );

    const id = Number(match.params.productId);

    if (basket.filter(p => p.id === id).length > 0) {
      basket.filter(p => p.id === id).map(p => (p.count += 1))
    } else {
      basket.push({
        id: id,
        count: 1,
      });
    }

    localStorage.setItem('basket', JSON.stringify(basket));
  };
 
  return (
    <>
      {products.map(({id, name, description, price, flagSoon, flagNew, count, imgs}) => (id === Number(match.params.productId)) && (
        <div className={classes.container}>
          {/*<CarouselSmall images={imgs} style={{border: 'solid red', height: '400px',}}/>*/}
          <div className={classes.productPage}>
            <div className={classes.productCarouselImgs}>

              <MyCarousel images={imgs}/>
              {/*<Carousel>{imgs.map(img => <img className={classes.img} src={img} alt={''}/>)}</Carousel>*/}
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
              <div className={classes.productCountInfo}>на складе - |||</div>
              <div style={{fontSize: '22px', margin: '10px',}} className={'price'}>{price + ' ₽'}</div>
              <button className={'buttonViolet'} style={{margin: '10px', width: '10em'}} onClick={changeLocalStorageBasket}>
                в корзину
              </button>
            </div>

            <div className={classes.productFullInfo}>
              <Tabs items={tabContent(description)} />
              {/*<div className={classes.productTitle}>Описание</div>*/}
            </div>
          </div>
        </div>
      ))}


    </>
  );
}

export default ProductPage;
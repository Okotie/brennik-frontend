import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Tabs from './Tabs'
import {BasketContext} from "./cart/BasketProvider";
import {getProductAPI} from "./api/api";
import ImageGallery from "react-image-gallery";


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
    objectFit: 'cover',
    minHeight: 'auto',
    maxWidth: 'auto',
    height: '320PX',
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
  thumbnail: {
    objectFit: 'cover',
    height: '40px',
    overflow: 'hidden',
    width: '100%',
  },
}));

const ProductPage = ({match}) => {
  const classes = useStyles();
  const { addToBasket } = React.useContext(BasketContext);
  const [product, setProduct] = useState({
    vendorCode:0,
    name:'',
    description:'',
    price:0,
    count:0,
    images:[],
    categories:[],
    flagNew:false,
    flagSoon:false,
  });

  useEffect(() => {
    getProductAPI.getProductByCode(match, setProduct);
  }, []);

  const tabContent = (description) => (
    [
      { title: 'Описание', content: description },
      { title: 'Комплектация', content: '- 72 квадрата местности ' + <br/> +
          '- 1 дорожка подсчёта очков' + <br/> +
          '- 40 фишек подданных' },
    ]
  );
 
  return (
    <>
      <div className={classes.container}>
        <div className={classes.productPage}>
          <div className={classes.productCarouselImgs}>
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              items={product.images.map((img) => ({
                original: img,
                sizes: '100x100',
                renderItem: () => <img alt="item" className={classes.img} src={img} />,
                renderThumbInner: () => <img alt="thumb" className={classes.thumbnail} src={img} />,
              }))}
            />
          </div>

          <div className={classes.productBriefInfo}>

            <div className={classes.productTitle}>{product.name}</div>
            {Boolean(product.flagNew) && (<div className={classes.flagNew}>Новинка</div>)}
            {Boolean(product.flagSoon) && (<div className={classes.flagSoon}>Скоро в продаже</div>)}
            <div className={classes.productCharacteristics}>
              Характеристики:<br/>
              - вес<br/>
              - ширина<br/>
              - высота<br/>
            </div>
            <div className={classes.productCountInfo}>на складе - |||</div>
            <div style={{fontSize: '22px', margin: '10px',}} className={'price'}>{product.price + ' ₽'}</div>
            <button className={'buttonViolet'} style={{margin: '10px', width: '10em'}}
                    onClick={() => {addToBasket({id: product.vendorCode, price: product.price})}}>
              в корзину
            </button>
          </div>

          <div className={classes.productFullInfo}>
            <Tabs items={tabContent(product.description)} />
            {/*<div className={classes.productTitle}>Описание</div>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import '../index.css';
import Tabs from './Tabs'
import {getProductAPI} from "./api/api";
import ImageGallery from "react-image-gallery";
import ButtonBuy from "./product/ButtonBuy";
import ButtonPreOrder from "./product/ButtonPreOrder";
import {Chip} from "@material-ui/core";


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
    fontFamily: 'Roboto',
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
  thumbnail: {
    objectFit: 'cover',
    height: '40px',
    overflow: 'hidden',
    width: '100%',
  },
}));

const ProductPage = ({match}) => {
  const classes = useStyles();
  const [product, setProduct] = useState({
    vendorCode:'',
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
    getProductAPI.getProductByMatch(match, setProduct);
  }, []);

  const tabContent = (product) => (
    [
      { title: 'Описание', content: product.description },
      { title: 'Комплектация', content: product.complication },
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
                renderItem: () => <img alt="item" className={classes.img} src={'http://45.147.179.34:8080/brennik/product/image/' + img} />,
                renderThumbInner: () => <img alt="thumb" className={classes.thumbnail} src={'http://45.147.179.34:8080/brennik/product/image/' + img} />,
              }))}
            />
          </div>

          <div className={classes.productBriefInfo}>

            <div className={classes.productTitle}>{product.name}</div>
            {Boolean(product.flagNew) && (<div className={'flagNew'}>Новинка</div>)}
            {Boolean(product.flagSoon) && (<div className={'flagSoon'}>Скоро в продаже</div>)}
            {
              Boolean(product.count === null && product.count < 1) &&
              (<div className={'flagNotAvailable'}>Нет в наличии</div>)
            }
            <div className={classes.productCharacteristics}>

              Категории:  {' '}

              {product.categories.map(c =>
                (<Chip
                  className={classes.input}
                  variant={"outlined"}
                  clickable={false}
                  size="small"
                  label={c.name}
                  color="primary"
                  style={{borderColor: '#6633CC', color: '#6633CC'}}
                />)
              )}
            </div>
            <div className={classes.productCharacteristics}>
              Артикул:
              <div style={{display: 'inline', fontFamily: 'Roboto', color: '#666666'}}>{' '+ product.vendorCode}</div>
            </div>
            <div className={classes.productCharacteristics}>
              Количество:
              <div style={{display: 'inline', fontFamily: 'Roboto', color: '#666666'}}>
                {
                  ((product.count  === null || product.count < 1) && ' отсутствует') ||
                  ((product.count < 10 && ' мало') || (' много'))
                }
              </div>
            </div>
            <div style={{fontSize: '22px', margin: '10px',}} className={'price'}>{product.price + ' ₽'}</div>
            <div style={{margin: '10px', width: '15em'}}>
              {
                ((product.count !== null && product.count > 0) && (<ButtonBuy product={product}/>)) ||
                (<ButtonPreOrder product={product}/>)
              }
            </div>

          </div>

          <div className={classes.productFullInfo}>
            <Tabs items={tabContent(product)} />
            {/*<div className={classes.productTitle}>Описание</div>*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
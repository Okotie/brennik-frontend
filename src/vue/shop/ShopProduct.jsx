import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {products} from "../../assets/mock/product";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
  img: {
    height: '150px',
    width: '20%',
    backgroundSize: 'cover',
    margin: '10px',
  },
}));

const ShoppingProduct = ({id, description, imgs, name, price}) => {
  const classes = useStyles();

  return(
    <>
      <div className={classes.container} style={{border: '1px solid blue',}}>
                  <div >
                    <div className={classes.img} style={{display: 'inline-block', verticalAlign: 'middle',  backgroundImage: `url(${imgs[0]})`,
                      border: '1px solid blue',}}/>
                      <div style={{display: 'inline-block', maxWidth: '400px'}}>
                        <div>
                          {name}
                        </div>
                        <div>
                          {description}
                        </div>
                      </div>
                      <div style={{display: 'inline-block', }}>
                        {price + ' ₽'}
                      </div>
                    </div>
      </div>

    </>
  )
};

export default ShoppingProduct;
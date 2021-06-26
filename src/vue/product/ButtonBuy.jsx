import React from 'react';
import {BasketContext} from "../cart/BasketProvider";
import {useHistory} from "react-router";

const ButtonBuy =({product})=> {
  const { basket, addToBasket, decrementToBasket  } = React.useContext(BasketContext);
  const history = useHistory();

  const fromBasket = basket.find((p) => p.id === product.vendorCode);
  const disabledAddFromBasket = fromBasket != null && (fromBasket.count >= product.count);

  const routeToBasket = () => {
    let path = '../shoppingBasket';
    history.push(path);
  }

  return(
   <>

     {
       (fromBasket === undefined &&
         <button style={{width: '100%'}} className={'buttonViolet'}
                 onClick={() => {addToBasket({ id: product.vendorCode, price: product.price })}}
         >
           в корзину
         </button>
       ) ||
       (fromBasket != null &&
         <div>
           <button style={{width: '15%'}} className={'buttonYellow'}
                   onClick={() => {decrementToBasket(product.vendorCode)}}>-1</button>
           <button style={{width: '65%', fontSize: '0.8em'}} className={'buttonViolet'}
                   onClick={routeToBasket}
           >
             <span style={{fontSize: '0.8em',}}>{'в корзине ' + fromBasket.count + ' шт.'}</span>
           </button>
           <button style={{width: '20%'}} className={'buttonGreen'}
                   onClick={() => {addToBasket({id: product.vendorCode, price: product.price})}}
                   disabled={disabledAddFromBasket}
                   title={disabledAddFromBasket && 'К сожалению больше нельзя добавить - в магазине нет столько товара'}>+1</button>
         </div>
       )
     }
   </>
 )
}
export default ButtonBuy;
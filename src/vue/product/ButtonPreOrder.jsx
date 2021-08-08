import React from 'react';
import {BasketContext} from "../cart/BasketProvider";
import {useHistory} from "react-router";

const ButtonPreOrder =({product})=> {
  const { basket, addToBasket, decrementToBasket  } = React.useContext(BasketContext);
  const history = useHistory();

  const fromBasket = basket.find((p) => p.id === product.vendorCode);

  const routeToBasket = () => {
    let path = '../shoppingBasket';
    history.push(path);
  }

  return(
   <>

     {
       (fromBasket === undefined &&
         <button style={{width: '100%'}} className={'buttonGrey'}
                 onClick={() => {addToBasket({ id: product.vendorCode, price: product.price })}}
         >
           предзаказать
         </button>
       ) ||
       (fromBasket != null &&
         <div>
           <button style={{width: '15%'}} className={'buttonYellow'}
                   onClick={() => {decrementToBasket(product.vendorCode)}}>-1</button>
           <button style={{width: '65%'}} className={'buttonGrey'}
                   onClick={routeToBasket}
           >
             <span>{'в корзине ' + fromBasket.count + ' шт.'}</span>
           </button>
           <button style={{width: '20%'}} className={'buttonGreen'}
                   onClick={() => {addToBasket({id: product.vendorCode, price: product.price})}}
           >+1</button>
         </div>
       )
     }
   </>
 )
}
export default ButtonPreOrder;
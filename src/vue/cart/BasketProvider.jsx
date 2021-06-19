import React from "react";

function getBasketFromLocalStorage() {
  return JSON.parse(localStorage.getItem("basket") || "[]");
}

const BasketContext = React.createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = React.useState(getBasketFromLocalStorage());
  const [count, setCount] = React.useState(0);
  const [price, setPrice] = React.useState(0);

  function onUpdate() {
    localStorage.setItem("basket", JSON.stringify(basket));

    if (basket.length > 0) {
      let newCount = basket.reduce((cnt, item) => {return (cnt + item.count);}, 0);
      setCount(newCount);

      let newPrice = basket.reduce((price, item) => {return (price + item.count * item.price);}, 0);
      setPrice(newPrice);
    } else {
      setCount(0);
      setPrice(0);
    }
  }
  React.useEffect(onUpdate, [basket]);

  const removeItem = (id) => {
    setBasket([...basket].filter(item => item.id !== id));
    onUpdate();
  };

  const addToBasket = ({id, price}) => {
    let item = basket.find((item) => item.id === id);
    if (item != null) {
      item.count++;
      onUpdate();
    } else {
      setBasket(
        basket.concat({
          id: id,
          count: 1,
          price: price,
          ...{id, price}
        })
      );
    }
  };

  const decrementToBasket = (id) => {
    let item = basket.find((item) => item.id === id);
    if (item != null && item.count > 1) {
      item.count--;
      onUpdate();
    } else {
      removeItem(id);
    }
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        count,
        price,
        removeItem,
        addToBasket,
        decrementToBasket,
        clearBasket
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export { BasketContext, BasketProvider };
import React from "react";

function getOrdersFromLocalStorage() {
  return JSON.parse(localStorage.getItem("orders") || "[]");
}

const OrderContext = React.createContext();

function OrderProvider({ children }) {
  const [orders, setOrders] = React.useState(getOrdersFromLocalStorage());

  function onUpdate() {
    localStorage.setItem("orders", JSON.stringify(orders));
  }
  React.useEffect(onUpdate, [orders]);

  const removeItem = (id) => {
    setOrders([...orders].filter(item => item.id !== id));
    onUpdate();
  };

  const addToOrders = ({id, price, products}) => {
    setOrders(
      orders.concat({
        id: id,
        products: products,
        price: price,

        ...{id, price, products}
      })
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addToOrders,
        removeItem
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
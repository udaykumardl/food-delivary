

import React, { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingItem = items.find((element) => element.name === item.name);
    if (existingItem) {
      setItems((prevItems) =>
        prevItems.map((existingItem) =>
          existingItem.name === item.name
            ? { ...existingItem, quantity: Number(existingItem.quantity) + Number(item.quantity) }
            : existingItem
        )
      );
    } else {
      setItems((prevItems) => [...prevItems, { ...item, quantity: Number(item.quantity) }]);
    }
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const updateItemsHandler = (updatedItems) => {
    setItems(updatedItems.map(item => ({ ...item, quantity: Number(item.quantity) })));
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItems: updateItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

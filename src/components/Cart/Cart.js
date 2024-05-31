

import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../Store/cart-context'; // Ensure this path is correct

const Cart = (props) => {
  let totalAmount = 0;
  
  const cartcntxt = useContext(CartContext);

  const increaseQuantityHandler = (itemIndex) => {
    const updatedItems = [...cartcntxt.items];
    updatedItems[itemIndex].quantity += 1;
    cartcntxt.updateItems(updatedItems); // Assuming you have an updateItems method in CartContext
  };

  const decreaseQuantityHandler = (itemIndex) => {
    const updatedItems = [...cartcntxt.items];
    updatedItems[itemIndex].quantity -= 1;
    cartcntxt.updateItems(updatedItems); // Assuming you have an updateItems method in CartContext
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntxt.items.map((item, index) => (
        item.quantity ? (
          <li className={classes.li} key={index}>
            <span>Name: {item.name}</span>
            <span>Price: {item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <span>
              <button onClick={() => increaseQuantityHandler(index)}>+</button>
              <button onClick={() => decreaseQuantityHandler(index)}>-</button>
            </span>
          </li>
        ) : ''
      ))}
    </ul>
  );

  cartcntxt.items.forEach((item) => {
    totalAmount += Number(item.price) * item.quantity;
  });

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;

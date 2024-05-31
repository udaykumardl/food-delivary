import CartContext from "./cart-context";

const CartProvider=props=>{
    const addItemToCartHandler=item=>{}

    const removeItemToHandler=id=>{}


    const cartContext={
        items:[],
        totalAmount:0,
        addItem :addItemToCartHandler,
        removeItem:removeItemToHandler
    }
    return <CartContext.Provider value={CartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;
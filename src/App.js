
import './App.css';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import { Fragment ,useState} from 'react';
import Cart from './components/Cart/Cart';
import CartProvider from './components/Store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown &&  <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}
export default App;
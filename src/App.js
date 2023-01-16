import React, { createContext, useState } from 'react'
import Productcard from './Components/Productcard';
import Pdata from './product-data.json'
import './App.css'
import Cart from './Components/Cart';


export const Global = createContext();
function App() {

  const [data , setData] = useState(Pdata);


  const [cart , setCart] = useState([]);

  // console.log(cart);
  const addToCart = (data) =>{
    setCart([...cart, { ...data , quantity : 1}]);
  }

  return (
    <div>
      <Global.Provider value={{data : data, addToCart: addToCart, cart: cart}}>
        <Productcard />
        <Cart/>
      </Global.Provider>
    </div>
  )
}

export default App
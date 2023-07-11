import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './Component/Global/NavBar/Navbar'
import Footer from "./Component/Global/Footer/Footer"
import Router from './Router/Router';
import Loading from './Component/Loading/Loading';
import productItems from "./utils/Services.json"
function App() {
  const productItem = productItems;
  const [cartItems, setCartItems] = useState([])
  const [IsLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  const handleAddProduct = (item) => {
    console.log(item)
    let isPresent = false;
    cartItems.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      return;
    }
    setCartItems([...cartItems, item]);
  }
  return (
    <div className="App ">
      {IsLoading ?
        <Loading />
        :
        <>
          <Navbar size={cartItems.length} cartItems={cartItems} setCartItems={setCartItems} />
          <Router
            productItems={productItem}
            handleAddProduct={handleAddProduct} />
          <Footer />
        </>
      }

    </div>
  );
}

export default App;

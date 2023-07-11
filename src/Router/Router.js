

import Home from "../Component/Home/Home"
import CartItem from "../Component/CartItem/CartItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Router = ({ productItems, cartItems, setCartItems, handleAddProduct }) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home productItems={productItems} handleAddProduct={handleAddProduct} />} />

                <Route path="/shoppingCart" element={<CartItem cartItems={cartItems} setCartItems={setCartItems} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
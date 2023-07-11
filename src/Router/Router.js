

import Home from "../Component/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Router = ({ productItems, cartItems, setCartItems, handleAddProduct }) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home productItems={productItems} handleAddProduct={handleAddProduct} />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;
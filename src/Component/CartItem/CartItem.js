import React from 'react'

const CartItem = ({ cartItems, setCartItems }) => {

    return (
        <div>
            {
                cartItems.map((item) => (
                    <div>
                        <img src={item.img1} />
                        <p>{item.title}</p>
                    </div>

                ))
            }
        </div>
    )
}
export default CartItem
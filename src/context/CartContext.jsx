import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState(['Un producto']);

    return(
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
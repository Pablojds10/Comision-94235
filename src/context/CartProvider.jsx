import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((prod) => prod.id === item.id);
            if (existingItem) {
                return prevCart.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, count: prod.count + item.count }
                        : prod
                )
            } else {
                return [...prevCart, item]
            }
        })
    }

    const getQuantity = () => {
        const quantities = cart.map(item => item.count)
        const total = quantities.reduce((acc, current) => acc + current,0)    
        return total
    }

    const getTotal = () => {
        const precios = cart.map(item => item.count*item.price)
        const total = precios.reduce((acc, current) => acc + current,0)    
        return total
    }

    const clearCart = () => {
        setCart([])
    }

    return (
    <CartContext.Provider value={{ addToCart, getQuantity, cart, getTotal, clearCart }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider

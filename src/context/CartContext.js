import { useState, createContext } from "react"

export const CartContext = createContext()



export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (producttoAdd) => {
      if (!isInCart(producttoAdd.id)) {
        setCart([...cart, producttoAdd])
      } else {
        console.log ("ya fue agregado a carrito")
      }
    }
  
    const isInCart = (id) => {
      return cart.some (prod => prod.id === id)
    }

    
  
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {children}
        </CartContext.Provider>
        
    )
}
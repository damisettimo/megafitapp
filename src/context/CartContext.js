import { useState, useEffect, createContext } from "react"


export const CartContext = createContext()


export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const totalQty = getQuantity()
    setTotalQuantity(totalQty)
  }, [cart])

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

    const removeItem = (id) => {
      const cartWithoutProduct = cart.filter(prod => prod.id !== id)
      setCart(cartWithoutProduct)
  }
    const getQuantity = () => {
      let accu = 0

      cart.forEach(prod => {
          accu += prod.quantity
      })

      return accu
  }


    
  
    console.log(cart)

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity}}>
            {children}
        </CartContext.Provider>
        
    )
}
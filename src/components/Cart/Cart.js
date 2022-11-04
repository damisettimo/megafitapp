import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const Cart = () => {

    const {cart, removeItem, total, clearCart} = useContext(CartContext)

    return(
        <div>
            <h2>Tu Orden:</h2>
            {
                cart.map(prod =>(
                    <div>
                        <h2>{prod.name}</h2>
                        <h3>Precio Unitario ${prod.price}</h3>
                        <h3>Cantidad:{prod.quantity}</h3>   
                        <button onClick={()=>removeItem(prod.id)}>Remover</button>
                    </div>
                ))
            }
            <div>
            <h2>Total:${total}</h2>
            <button onClick={()=> clearCart()}>Vaciar Carrito</button>

            </div>
        </div>    
    )
}


export default Cart
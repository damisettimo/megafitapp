import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd})=> {
   const [count, setCount] = useState(initial)

   const decrease = () => {
      setCount (count - 1)
   }

   const increase = () => {
       setCount (count + 1) 
   }

   return(
       <div >          
            <div>
                <button disabled={count <= 1} onClick={decrease}>-</button>
                <span>{count}</span>
                <button disabled={count >= stock} onClick={increase}>+</button>
            </div>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
       </div>
   )

}
export default ItemCount
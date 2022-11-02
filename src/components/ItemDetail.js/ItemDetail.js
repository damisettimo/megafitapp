import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext' 

const ItemDetail = ({ id, name, img, description, price, stock }) => {
   
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
        
    }
    return ( 
        <div>
            
            <div>
                    <h2>{name}</h2>
                    <img src={img} alt="logo MegaFit-Sup"/>
                    <h3>Descripcion:{description}</h3>
                    <p>${price}</p>
                    <section>
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    </section>
            </div>
        </div>

    )

}

export default ItemDetail
import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail.js/ItemDetail"
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ([])
    const [loading, setLoading] = useState(true)
    
    const {productId} = useParams()
 
    useEffect (()=>{
        getProductById(productId)
            .then(product =>{
                setProduct(product)
            }).finally(() => {
                setLoading(false)
            })

    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    const onAdd = (quantity) => {
        console.log (`Compraste ${quantity} unidades`)
    }

    return(
        <div>
            <h2>Detalle de Suplemento</h2>
            <ItemDetail {...product} />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />

        </div>
    )
}

export default ItemDetailContainer
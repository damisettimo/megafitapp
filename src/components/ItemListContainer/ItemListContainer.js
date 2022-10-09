import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
       
        asyncFunction(categoryId).then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    
    return (
        <div>
            <h2>Nuestros Suplementos</h2>
            { products.map ((prod) => {
                return (
                    
                    <div className="row align-items-center" key={prod.id}>
                        <div className="col card" style={{ width: "18rem"}}>
                            <div className="col card-body">
                                <h5 className="card-title">{prod.name}</h5>
                                <img src={prod.img} alt="logo MegaFit-Sup"/>
                                <h3>{prod.category}</h3>
                                <p className="card-text">${prod.price}</p>
                                <Link to={`/detail/${prod.id}`}><button className="btn btn-primary">Ver detalle</button></Link>
                            </div>
                        </div> 

                    </div>
                )              
            })}
        </div>
    )        
}

export default ItemListContainer
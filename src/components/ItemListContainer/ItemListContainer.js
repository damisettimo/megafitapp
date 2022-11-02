import { useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = collection (db, "products")
        
        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc =>{
                const data = doc.data()
                console.log(data)

                return { id:doc.id, ...data }
            })
            console.log(productsAdapted)
            setProducts(productsAdapted)
            //setProducts(response)
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
            <ItemList products={products} />
        </div>
    )        
}

export default ItemListContainer
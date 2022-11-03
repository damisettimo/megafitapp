import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {addDoc, collection} from "firebase/firestore"
import { db } from "../../services/firebase";

const Checkout = () => {

    const { cart, total } = useContext(CartContext)

    const createOrder = () => {
        const objOrder = {
            buyer: {
                name: "jorge rod",
                phone: "341587896",
                mail: "jorgero@hotmail.com"
            },
    
            item: cart,
            total: total
        }

        const collectionRef = collection (db, "orders")

        addDoc (collectionRef, objOrder).then(response => {
            console.log(response.id)
        }).catch(error => {
            console.log(error)
            
        })

    }

    
    return (
        <div>    
            <h2>Checkout de tu Compra</h2>
            <h3>Formulario</h3>
            <button onClick={createOrder}>Genera tu Orden</button>
        </div>
    )











}
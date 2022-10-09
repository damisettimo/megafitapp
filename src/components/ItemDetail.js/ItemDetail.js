const ItemDetail = ({name, img, description, price}) => {
    return ( 
        <div>
            
            <div>
                    <h2>{name}</h2>
                    <img src={img} alt="logo MegaFit-Sup"/>
                    <h3>Descripcion:{description}</h3>
                    <p>${price}</p>
            </div>
        </div>

    )

}

export default ItemDetail
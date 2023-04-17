
import { useState, useEffect } from "react"
import {getProductById} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById("1")
        .then(Response => {
            setProduct(Response)
        })
        .catch(Error => {
            console.error(Error)
        })
    }, [])

    return(
        <div className="ItemDetailContainer">
        <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer

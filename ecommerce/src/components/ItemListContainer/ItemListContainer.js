import camiseta from "./assets/Camiseta.png"

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className="saludo">{greeting}</h1>
            <div>
                <p>Remera</p>
                <p>Camiseta Seleccion Argentina</p>
                <img src={camiseta} alt = "camiseta-selecion"/>
            </div>
        </div>
    )
}





export default ItemListContainer
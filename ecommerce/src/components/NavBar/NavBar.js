import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => { 
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button className="botones">Camisetas</button>
                <button className="botones">Shorts</button>
                <button className="botones">Botines</button>
            </div>
            <CartWidget />
        </nav>
    )
} 

export default NavBar
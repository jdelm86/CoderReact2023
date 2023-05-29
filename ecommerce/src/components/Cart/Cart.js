import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import './Cart.css'

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="Message">
                <h1>No hay Productos en el carrito</h1>
                <button className='Button'><Link to='/' >Productos</Link></button>
            </div>
        )
    }

    return (
        <div className="Final">
            {cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button className="Button" ><Link to='/checkout' className='Button' >Finalizar Compra</Link></button>
        </div>
    )
}

export default Cart;

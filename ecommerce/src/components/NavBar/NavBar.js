import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => { 
    return (
        <nav className="NavBar">
            <h3><Link to='/'>AFA STORE</Link></h3>
            <button className="Button"><Link to='/'>Nuestros Productos</Link></button> 
            <div>
            <button className="Button"><NavLink to={`/category/Camisetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink></button>
            <button className="Button"><NavLink to={`/category/Shorts`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink></button>
            <button className="Button"><NavLink to={`/category/Botines`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink></button>
            </div>
            <CartWidget />
        </nav>
    )
} 

export default NavBar
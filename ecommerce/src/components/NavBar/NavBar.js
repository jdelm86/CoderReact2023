import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => { 
    return (
        <nav>
            <Link to='/'>
            <h3>Ecommerce</h3>
            </Link>
            <div>
            <NavLink to={`/category/Camisetas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camisetas</NavLink>
            <NavLink to={`/category/Shorts`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Shorts</NavLink>
            <NavLink to={`/category/Botines`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Botines</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
} 

export default NavBar
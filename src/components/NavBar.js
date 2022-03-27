import "./navbar.scss"
import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="main-header">
      <h1 className="py-4 mb-0"><Link to="/">Mi Tienda Virtual</Link></h1>
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink to="/category/verduras">Verduras</NavLink>
          </li>
          <li>
            <NavLink to="/category/carnes">Carnes</NavLink>
          </li>
          <li>
            <NavLink to="/category/bebidas">Bebidas</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )}

export default NavBar
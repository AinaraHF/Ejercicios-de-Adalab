import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/list">Lista de mascotas</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
        </ul>
    </header>
  )
}

export default Header
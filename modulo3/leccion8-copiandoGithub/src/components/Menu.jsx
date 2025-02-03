import { Link } from "react-router-dom"

function Menu() {
  return (
    <ul>
        <li><Link to="/">Overview</Link></li>
        <li><Link to="/repositories">Repositories</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/settings">Settings</Link></li>
    </ul>
  )
}

export default Menu
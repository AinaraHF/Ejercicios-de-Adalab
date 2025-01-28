import '../styles/Header.scss';
import menu from "../images/ico-menu.svg";

function Header() {
  return (
    <header className="header">
    <a href="https://adalab.es/">
        <img src={menu} alt=""/>
    </a>
    </header>
  )
}

export default Header
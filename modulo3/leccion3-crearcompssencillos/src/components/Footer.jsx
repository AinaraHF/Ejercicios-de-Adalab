import '../styles/Footer.scss';
import arrow from "../images/ico-arrow.svg";

function Footer() {
  return (
    <footer className="footer">
    <a href="#hero"><img src={arrow} alt="arrow up" className="arrowup"/></a>
    <nav className="footer_menu">
        <ul className="links">
            <li>ZAPATILLAS
            <a href="https://adalab.es/"></a>
            </li>
            <li>ROPA
            <a href="https://adalab.es/"></a>
            </li>
            <li>NIÑO/A
            <a href="https://adalab.es/"></a>
            </li>
            <li>DESTACADOS
            <a href="https://adalab.es/"></a>
            </li>
            <li>TIPS
            <a href="https://adalab.es/"></a>
            </li>
        </ul>
        <ul className="socials">
            <li>TWITTER
            <a href="https://adalab.es/"></a>
            </li>
            <li>INSTAGRAM
            <a href="https://adalab.es/"></a>
            </li>
            <li>YOUTUBE
            <a href="https://adalab.es/"></a>
            </li>
        </ul>
        <div className="copy">
            <p>©2023</p>
            <p>we <i className="fa-solid fa-heart" style="color: #6c933e;"></i>  run</p>
        </div>
    </nav>
</footer>
  )
}

export default Footer